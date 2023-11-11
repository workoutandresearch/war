const handleCheckout = async (event) => {
    event.preventDefault();
    
    if (!warTokenBalance || warTokenBalance <= 0) {
      alert("Insufficient WAR token balance for checkout.");
      return;
    }
  
    // Further validation or calculation of total cost based on WAR token can be added here
  
    // Proceed to checkout
    try {
      const result = await checkout(cart); // Pass the cart to the checkout function
      if (result.success) {
        // Handle successful checkout
        // Redirect or update UI accordingly
        alert(`Checkout successful! Order ID: ${result.orderId}`);
      } else {
        // Handle checkout failure
        alert("Checkout failed. Please try again.");
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert("An error occurred during checkout.");
    }
  };
  