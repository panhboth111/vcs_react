import React from "react";
import { Link } from "react-router-dom";

//styles
const navBarStyles = {
  lineHeight: "60px",
  background: "#E7E7E7",
  padding: "0 100px",
};
const navItemStyles = {
  cursor: "pointer",
  margin: "0 30px",
};
const logoStyle = {
  fontSize: "1.7rem",
  fontWeight: "bold",
  color: "#008FA9 ",
};

const NavBar = () => {
  //data
  const navItems = [
    { title: "Home", to: "/", id: 0 },
    { title: "Contacts", to: "/contacts", id: 1 },
    { title: "History", to: "/history", id: 2 },
  ];
  return (
    <nav style={navBarStyles} className="flex flex-row justify-between">
      <div style={logoStyle}>VCS</div>
      <div>
        <ul className="flex flex-row">
          {navItems.map((i) => (
            <li key={i.id} style={navItemStyles}>
              <Link to={i.to}>{i.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>Neak Panhboth</div>
    </nav>
  );
};

export default NavBar;
