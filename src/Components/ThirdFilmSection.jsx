import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

class ThirdFilmSection extends Component {
  state = {
    films: [],
  };
  componentDidMount = () => {
    this.lordoftherings();
  };

  lordoftherings = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=12b061f8&s=lord%20rings");
      const data = await response.json();
      const lordoftherings = data.Search;
      console.log(data.Search);
      this.setState({ films: lordoftherings });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <h4 className="text-light d-flex justify-content-start">New Releases</h4>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 py-4 flex-nowrap no-gutters"
          style={{ overflow: "hidden" }}
        >
          {this.state.films.map((film) => {
            return (
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid d-flex "
                  style={{ height: "18em", width: "15em" }}
                  src={film.Poster}
                  alt="filmImg"
                />
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default ThirdFilmSection;
