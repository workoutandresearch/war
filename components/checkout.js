import algosdk from 'algosdk';
import { algodClient } from 'lib/algodClient';
import error from 'next/error';

// Define types for your function parameters as needed
interface CartItem {
  price: number;
  quantity: number;
}

// Assuming getCartItems and getWarPrice are related functions, let's keep them together
const getCartItems = (): CartItem[] => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
  return [];
};

const getWarPrice = (usdPrice: number, usdToAlgoRate: number, algoToWarRate: number): number => {
  if (!usdToAlgoRate || !algoToWarRate) {
    throw new Error('Invalid rate values');
  }
  const warPrice = usdPrice / usdToAlgoRate * algoToWarRate;
  return Math.floor(warPrice);
};

// Define types for the parameters of sendWarTransaction
const sendWarTransaction = async (amount: number, activeAddress: string, signTransactions: (transactions: Uint8Array[]) => Promise<{ blob: Uint8Array }>) => {
  try {
    const projectAddress = "6KD7NSIJGA3ONUX4TPIQ3TCRDM3Q4HMW53QZOFVD5NIDW4WNZ3L2MF23MY"; // Replace with your project's address
    const params = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParams(
      activeAddress, // Sender's address
      projectAddress, // Receiver's address
      undefined, // Close remainder to
      undefined, // Revocation target
      amount, // Amount
      undefined, // Note
      1015673913, // Replace with your actual WAR token ID
      params
    );

    const signedTxn = await signTransactions([txn.toByte()]);
    const sendTx = await algodClient.sendRawTransaction(signedTxn.blob).do();
    console.log("Transaction successful with ID: ", sendTx.txId);
  } catch (error) {
    console.error('Error sending WAR transaction:', error);
  }
};

// Define types for the parameters of Checkout
const handleCheckout = async (signTransactions: (transactions: Uint8Array[]) => Promise<{ blob: Uint8Array }>, activeAddress: string, usdToAlgoRate: number, algoToWarRate: number) => {
  try {
    const cartItems = getCartItems();
    const totalWar = cartItems.reduce((total, item) => total + getWarPrice(item.price, usdToAlgoRate, algoToWarRate) * item.quantity, 0);

    await sendWarTransaction(totalWar, activeAddress, signTransactions);
  } catch (error) {
    console.error('Error in Checkout process:', error);
    // Handle or display error appropriately
  }
};

export default Checkout;
