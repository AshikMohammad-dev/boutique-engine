import { BRAND } from "../../config/brand";

function ProductModal({ product, onClose }) {
  if (!product) return null;

  const productURL = `${window.location.origin}/product/${product.id}`;

  const message = `
Hello,

I'm interested in:

Product: ${product.name}
Category: ${product.category}
Price: ${product.price}

Product Link:
${productURL}

Image:
${product.image}

Please share more details.
`;

  const whatsappURL = `https://wa.me/${BRAND.phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-grid">
          <img src={product.image} alt={product.name} />

          <div className="modal-info">
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{product.price}</p>

            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;