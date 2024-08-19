import algosdk from 'algosdk';
import { algodClient } from 'lib/algodClient';
import toast from 'react-hot-toast';

const getCartItems = () => {
  if (typeof window !== "undefined") {
    try {
      return JSON.parse(localStorage.getItem('cart') || '[]');
    } catch (error) {
      console.error('Error parsing cart items:', error);
      return [];
    }
  }
  return [];
};

const getWarPrice = (usdPrice, usdToAlgoRate, algoToWarRate) => {
  if (!usdToAlgoRate || !algoToWarRate) {
    throw new Error('Invalid rate values');
  }
  const warPrice = usdPrice / usdToAlgoRate * algoToWarRate;
  return Math.floor(warPrice);
};

const sendWarTransaction = async (amount, activeAddress, signTransactions) => {
  try {
    const projectAddress = "6KD7NSIJGA3ONUX4TPIQ3TCRDM3Q4HMW53QZOFVD5NIDW4WNZ3L2MF23MY";
    const params = await algodClient.getTransactionParams().do();

    const txn = algosdk.makeAssetTransferTxnWithSuggestedParams(
      activeAddress,
      projectAddress,
      undefined,
      undefined,
      amount,
      undefined,
      1015673913, // Assuming this is the asset ID for WAR tokens
      params
    );

    const signedTxn = await signTransactions([txn]);
    const sendTx = await algodClient.sendRawTransaction(signedTxn).do();
    console.log("Transaction successful with ID:", sendTx.txId);
    
    // Fetch transaction information
    let txInfo = null;
    const maxAttempts = 10;
    for (let attempts = 0; attempts < maxAttempts; attempts++) {
      txInfo = await algodClient.pendingTransactionInformation(sendTx.txId).do();
      if (txInfo && txInfo['confirmed-round'] !== null && txInfo['confirmed-round'] !== undefined) {
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds before retrying
    }

    if (!txInfo || txInfo['confirmed-round'] === undefined || txInfo['confirmed-round'] === null) {
      throw new Error('Transaction not confirmed after multiple attempts');
    }

    // Show a success message after the transaction is confirmed
    toast.success("Transaction successful!");
  } catch (error) {
    console.error('Error sending WAR transaction:', error);
    toast.error("Error sending WAR transaction");
    throw error;
  }
};

const Checkout = async (signTransactions, activeAddress, usdToAlgoRate, algoToWarRate) => {
  try {
    const cartItems = getCartItems();
    if (!cartItems.length) {
      throw new Error('No items in cart');
    }

    const totalWar = cartItems.reduce((total, item) => {
      if (!item.price || !item.quantity) {
        throw new Error('Cart item missing price or quantity');
      }
      return total + getWarPrice(item.price, usdToAlgoRate, algoToWarRate) * item.quantity;
    }, 0);

    // Check if the user has enough tokens
    const accountInfo = await algodClient.accountInformation(activeAddress).do();
    const warAsset = accountInfo['assets'] ? accountInfo['assets'].find(asset => asset['asset-id'] === 1015673913) : null;
    const warBalance = warAsset ? warAsset.amount : 0;

    if (warBalance < totalWar) {
      throw new Error('Insufficient balance to complete the purchase');
    }

    // Proceed with the transaction if the user has sufficient tokens
    await sendWarTransaction(totalWar, activeAddress, signTransactions);
  } catch (error) {
    console.error('Error in Checkout process:', error);
    toast.error(`Error processing checkout: ${error.message}`);
  }
};

export default Checkout;

