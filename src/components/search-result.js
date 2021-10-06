import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import Loading from "./loading.js";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };

  componentDidMount() {
    this.fetchData(
      "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=Intoxicados&api_key=77093375607eafd9a343d126e20d8eee&format=json"
    );
  }

  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "lo q trae la api");

    if (data.error) {
      this.setState({
        loading: false,
        error: true,
      });
    } else {
      this.setState({
        loading: false,
        data: data,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading></Loading>}
        {this.state.error && <h1>Error de algo</h1>}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[4]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}

            <h1>{this.props.busqueda}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
