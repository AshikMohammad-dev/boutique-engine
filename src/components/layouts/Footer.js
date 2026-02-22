import { BRAND } from "../../config/brand";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>{BRAND.name}</h3>
          <p>{BRAND.tagline}</p>
        </div>

        <div>
          <p>{BRAND.address}</p>
          <p>{BRAND.email}</p>
        </div>

        <div>
          <a
            href={`https://wa.me/${BRAND.phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;