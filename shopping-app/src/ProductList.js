import React from "react";

function ProductList({ onBuy }) {
  const products = [
    { id: 1, name: "Laptop", price: 799 },
    { id: 2, name: "Phone", price: 499 },
    { id: 3, name: "Headphones", price: 99 },
    { id: 4, name: "Keyboard", price: 49 }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>${product.price}</p>

          <button onClick={() => onBuy(product)}>
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;