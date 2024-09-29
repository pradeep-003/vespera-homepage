import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src="../assets/FinalLogo.png" alt="Logo" className="logo" />
        <nav>
          <main>
            <Link to={"/About"}>About</Link>
            <Link to={"/Events"}>Events</Link>
            <Link to={"/Speakers"}>Speakers</Link>
            <Link to={"/Faq"}>FAQ</Link>
            <Link to={"/Sponsers"}>Sponsers</Link>
          </main>
        </nav>
      </div>
    </header>
  );
};

export default Header;
