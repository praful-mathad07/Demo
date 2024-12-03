import React, { useState } from "react";
import "../Component/Payments.css";

const Payments = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showUPIField, setShowUPIField] = useState(false);

  // Handle change in payment method
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    if (e.target.value === "Credit Card") {
      setShowCardDetails(true);
      setShowUPIField(false);
    } else if (e.target.value === "Google Pay") {
      setShowCardDetails(false);
      setShowUPIField(true);
    } else {
      setShowCardDetails(false);
      setShowUPIField(false);
    }
  };

  return (
    <div className="payments-container">
      <h1>Billing Information</h1>

      <form className="payments-form">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="email" placeholder="Confirm Email Address" required />
        <input type="text" placeholder="Address" required />
        <input
          type="text"
          placeholder="Apartment, suite, unit, etc."
          required
        />
        <input type="text" placeholder="Town / City" required />
        <input type="text" placeholder="State / Province" required />
        <input type="text" placeholder="ZIP Code" required />
      </form>

      <h3>Payment Method</h3>
      <div className="payment-methods">
        <label>
          <input
            type="radio"
            name="payment"
            value="Credit Card"
            onChange={handlePaymentMethodChange}
          />
          Credit Card
        </label>

        {showCardDetails && (
          <div className="credit-card-inputs">
            <input type="text" placeholder="Card Number" required />
            <input type="text" placeholder="MM/YY" required />
            <input type="text" placeholder="CVV" required />
          </div>
        )}

        <label>
          <input
            type="radio"
            name="payment"
            value="Google Pay"
            onChange={handlePaymentMethodChange}
          />
          Google Pay
        </label>

        {showUPIField && (
          <div className="upi-input">
            <input type="text" placeholder="Enter UPI ID" required />
          </div>
        )}
      </div>

      <button type="submit" className="submit-button">
        Submit Payment
      </button>
    </div>
  );
};

export default Payments;
