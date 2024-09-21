import React from "react";

const Footer = () => {
  const FooterStyle = {
    backgroundColor: "mediummblue",
    color: "#fff",
    width: "62vh",
  };
  const today = new Date();
  return (
    <footer style={FooterStyle}>
      <p>Copyright &copy; {today.getFullYear()} </p>
    </footer>
  );
};

export default Footer;
