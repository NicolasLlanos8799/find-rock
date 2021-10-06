import React, { Component } from "react";
import ArtistCard from "./components/artist-card.js";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result.js";

class PageSearchResult extends Component {
  state = {};

  componentDidMount() {
    console.log("componentDidMount()", "Luego del metodo render ");
  }
  componentWillMount() {
    console.log("componentWillMount()", "Antes del metodo render");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount", "cuando me fui");
  }

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log("render()", "Estoy en el metodo render");
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
