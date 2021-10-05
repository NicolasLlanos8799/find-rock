import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import Footer from "./components/footer.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Footer>
          <Switch>
            <Route path="/busqueda" component={PageSearchResult} />
            <Route path="/artista" component={PageArtist} />
            <Route path="/" component={PageHome} />
          </Switch>
        </Footer>
      </BrowserRouter>
    );
  }
}

export default App;
