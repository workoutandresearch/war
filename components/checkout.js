import algosdk from 'algosdk';
import { algodClient } from 'lib/algodClient';
import toast from 'react-hot-toast';

const getCartItems = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem('cart') || '[]');
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

    // Pass the txn object directly to the signTransactions function
    const signedTxn = await signTransactions([txn]);
    const sendTx = await algodClient.sendRawTransaction(signedTxn).do(); // Remove `.blob` here as well
    console.log("Transaction successful with ID:", sendTx.txId);
    
    // Fetch transaction information
    let txInfo = null;
    let attempts = 0;
    const maxAttempts = 10;
    while (attempts < maxAttempts) {
      txInfo = await algodClient.pendingTransactionInformation(sendTx.txId).do();
      if (txInfo['confirmed-round'] !== null && txInfo['confirmed-round'] !== undefined) {
        break;
      }
      attempts++;
      await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds before retrying
    }

    if (txInfo['confirmed-round'] === undefined || txInfo['confirmed-round'] === null) {
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
    const totalWar = cartItems.reduce((total, item) => total + getWarPrice(item.price, usdToAlgoRate, algoToWarRate) * item.quantity, 0);

    // Check if the user has enough tokens
    const accountInfo = await algodClient.accountInformation(activeAddress).do();
    const warBalance = accountInfo['assets'].find(asset => asset['asset-id'] === 1015673913)?.amount || 0;

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
