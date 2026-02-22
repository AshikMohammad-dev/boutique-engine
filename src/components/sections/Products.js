import { useState } from "react";
import ProductCard from "../ui/ProductCard";
import ProductModal from "../ui/ProductModal";
import { PRODUCTS } from "../../data/products";

function Products() {

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="featured container">
      <h2 className="section-title">Curated Pieces</h2>

      <div className="card-grid">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={setSelectedProduct}
          />
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}

export default Products;