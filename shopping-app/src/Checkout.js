import React, { useState } from "react";

function Checkout({ product }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [message, setMessage] = useState("");

  const validateCard = () => {
    const cardRegex = /^\d{16}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvRegex = /^\d{3}$/;

    return (
      cardRegex.test(cardNumber) &&
      expiryRegex.test(expiry) &&
      cvvRegex.test(cvv)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateCard()) {
      setMessage("Invalid credit card information.");
      return;
    }

    setMessage(
      `Purchase successful! You bought ${product.name}.`
    );
  };

  return (
    <div>
      <h2>Checkout</h2>

      <p>
        Product: <b>{product.name}</b>
      </p>

      <p>
        Price: <b>${product.price}</b>
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Card Number:</label><br />
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Expiration Date (MM/YY):</label><br />
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
        </div>

        <div>
          <label>CVV:</label><br />
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">
          Complete Purchase
        </button>
      </form>

      <p className={message.includes("successful") ? "success" : "error"}>
        {message}
        </p>
    </div>
  );
}

export default Checkout;