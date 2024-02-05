import algosdk from 'algosdk';
import { algodClient } from 'lib/algodClient';

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

    const signedTxn = await signTransactions([txn.toByte()]);
    const sendTx = await algodClient.sendRawTransaction(signedTxn.blob).do();
    console.log("Transaction successful with ID: ", sendTx.txId);
    
    // Show a success message or perform additional actions after the transaction is successfully sent
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

    await sendWarTransaction(totalWar, activeAddress, signTransactions);
  } catch (error) {
    console.error('Error in Checkout process:', error);
  }
};

export default Checkout;