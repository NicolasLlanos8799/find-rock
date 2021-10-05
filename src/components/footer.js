import React from "react";

function Footer(props) {
  const children = props.children;
  return (
    <React.Fragment>
      {children}

      <div className="row">
        <div className="col-md-12 centrar">
          <p>Todos los derechos reservados 2021 @NicolasLlanos</p>
        </div>
      </div>
    </React.Fragment> //para retornar algo que no sea un solo elemenot
  );
}
export default Footer;
