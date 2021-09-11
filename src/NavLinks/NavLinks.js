import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

export default function NavLinks() {
  return (
    <div className="navLinks">
      <div className="navLinksOuter">
        <Link>Today's Deal</Link>
        <Link>Customer Service</Link>
        <Link>Gift Cards</Link>
        <Link>Registry</Link>
        <Link>Sell</Link>
      </div>
    </div>
  );
}
