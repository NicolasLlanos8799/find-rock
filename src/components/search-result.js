import React, { Component } from "react";
import ArtistCard from "./artist-card.js";

class SearchResult extends Component {
  state = {
    data: "",
  };

  componentDidMount() {
    this.fetchData(
      "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=Metallica&api_key=77093375607eafd9a343d126e20d8eee&format=json"
    );
  }

  fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      data: data,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {/* {this.state.artist.map((artista, i) => {
              return (
                <ArtistCard img={artista.image} titulo={artista.name} key={i} />
              );
            })} */}

            <h1>{this.props.busqueda}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
