import React from "react";
import "./loading.css";

function Error(props) {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="col-md-12 centrar">
          <h3>Error{props.errorMensaje}</h3>
        </div>
      </div>
    </React.Fragment> //para retornar algo que no sea un solo elemenot
  );
}
export default Error;
