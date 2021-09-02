import React from "react";
import "./page-home.css";
import logo from "./logo.png";

class PageHome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img id="logo" src={logo} alt="" />

            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="form"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.props.onChange}
                />
              </div>
              <div className="actions">
                <button className="btng">Search Similar Artist</button>
                <button className="btng">Escuela Dev Rock</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default PageHome;
