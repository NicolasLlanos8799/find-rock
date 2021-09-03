import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import "./page-artist.css";
import SimilarArtist from "./components/similar-artist.js";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/06/25093705/Gustavo-Cerati-Bocanada.jpg"
                alt=""
                className="pic-artist margenes50"
              />

              <h3>Gustavo Cerati</h3>
              <p>
                Gustavo Adrián Cerati (Buenos Aires, 11 de agosto de
                1959-ibidem, 4 de septiembre de 2014) fue un músico, cantautor,
                actor, y productor discográfico argentino que obtuvo
                reconocimiento internacional por haber sido el líder de la banda
                de rock Soda Stereo. Es considerado por parte de la prensa,
                cantantes y críticos como uno de los músicos más influyentes del
                rock latinoamericano.
              </p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtist />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
