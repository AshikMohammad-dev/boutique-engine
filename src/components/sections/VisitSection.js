import { BRAND } from "../../config/brand";

function VisitSection() {
  return (
    <section className="visit-section" id="contact">
      <div className="container visit-grid">
        <div className="visit-text">
          <h2>Visit Our Studio</h2>
          <p>{BRAND.address}</p>
          <p>{BRAND.email}</p>

          <a
            href={BRAND.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Open in Google Maps
          </a>
        </div>

        <div className="visit-map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Kochi&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default VisitSection;