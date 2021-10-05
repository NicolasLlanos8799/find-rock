import React from "react";
import Footer from "./footer";

function Layout(props) {
  const children = props.children;
  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment> //para retornar algo que no sea un solo elemenot
  );
}
export default Layout;
