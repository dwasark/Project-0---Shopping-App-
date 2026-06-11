import React, { useState } from "react";
import ProductList from "./ProductList";
import Checkout from "./Checkout";
import "./App.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container">
      <h1>Simple Shopping App</h1>

      {!selectedProduct ? (
        <ProductList onBuy={setSelectedProduct} />
      ) : (
        <Checkout product={selectedProduct} />
      )}
    </div>
  );
}

export default App;