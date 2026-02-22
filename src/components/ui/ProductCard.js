import React from "react";

function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>

        <button
          className="product-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClick(product);
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;