import React, { Component } from "react";
import ArtistCard from "./artist-card.js";

class SearchResult extends Component {
  state = {
    artist: [
      {
        name: "Allie X",
        match: "1",
        url: "https://www.last.fm/music/Allie+X",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81J4jpxoScL._SX522_.jpg",
      },
      {
        name: "Lorde",
        mbid: "8e494408-8620-4c6a-82c2-c2ca4a1e4f12",
        match: "0.827789",
        url: "https://www.last.fm/music/Lorde",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81J4jpxoScL._SX522_.jpg",
      },
      {
        name: "Billie Eilish",
        match: "0.811899",
        url: "https://www.last.fm/music/Billie+Eilish",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81J4jpxoScL._SX522_.jpg",
      },
      {
        name: "Marina",
        mbid: "fe0ad4d4-391b-4f43-b02f-4d2ed0ab2b5e",
        match: "0.648183",
        url: "https://www.last.fm/music/Marina",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81J4jpxoScL._SX522_.jpg",
      },
      {
        name: "BROODS",
        mbid: "68205c8f-9518-4b49-8df7-bd297da67599",
        match: "0.573807",
        url: "https://www.last.fm/music/BROODS",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81J4jpxoScL._SX522_.jpg",
      },
      {
        name: "Declan Mckenna",
        match: "0.525606",
        url: "https://www.last.fm/music/Declan+Mckenna",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81J4jpxoScL._SX522_.jpg",
      },
      {
        name: "Susanne Sundfør",
        mbid: "f3f9e76a-0685-4a9a-97d1-6fa2b50f9fba",
        match: "0.463562",
        url: "https://www.last.fm/music/Susanne+Sundf%C3%B8r",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81J4jpxoScL._SX522_.jpg",
      },
      {
        name: "iamamiwhoami",
        mbid: "9aaa99df-9383-47df-92af-8bb5e5595815",
        match: "0.457291",
        url: "https://www.last.fm/music/iamamiwhoami",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81J4jpxoScL._SX522_.jpg",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.artist.map((artista, i) => {
              return (
                <ArtistCard img={artista.image} titulo={artista.name} key={i} />
              );
            })}

            {/* <ArtistCard
              img="https://images-na.ssl-images-amazon.com/images/I/81J4jpxoScL._SX522_.jpg"
              titulo="Iron maiden"
            />
            <ArtistCard
              img="https://i0.wp.com/masdecibelios.es/wp-content/uploads/2015/09/slayer-repentless.jpg?resize=650%2C650"
              titulo="Slayer"
            />
            <ArtistCard
              img="https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/05/Fear-Factory-Demanufacture.jpg"
              titulo="Fear Factory"
            />
            <ArtistCard
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFvqnXth_DH6CQnnd2QsL9O7Udbstf06EI0IimwUoizY5Fkcnx9H6rq66nmZQUWacUzI&usqp=CAU"
              titulo="Dream Theater"
            /> */}
            <h1>{this.props.busqueda}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
