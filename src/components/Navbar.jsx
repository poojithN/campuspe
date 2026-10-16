import { useState } from "react";
import Button from "./Button";
import { navLinks } from "../constants/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#">CampusPe</a>
        <nav className="links" aria-label="Main">
          {navLinks.map((link) => <a href="#" key={link}>{link}</a>)}
        </nav>
        <div className="nav-actions">
          <a href="#" className="signin">Sign In</a>
          <Button>Sign Up</Button>
          <button type="button" className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-menu" aria-label="Mobile">
          {navLinks.map((link) => <a href="#" key={link}>{link}</a>)}
        </nav>
      )}
    </header>
  );
}
