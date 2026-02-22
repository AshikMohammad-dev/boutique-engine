import { BRAND } from "../../config/brand";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2>{BRAND.name}</h2>
      </div>

      <div className="nav-right">
        <a href="#products">Collections</a>
        <a href="#contact">Visit</a>

      </div>
    </nav>
  );
}

export default Navbar;