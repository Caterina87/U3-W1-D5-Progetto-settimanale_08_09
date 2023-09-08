import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

class FilmSection extends Component {
  state = {
    films: [],
    isError: false,
  };
  componentDidMount = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=12b061f8&s=" + this.props.saga);
      console.log(response.ok);
      if (response.ok) {
        let data = await response.json();
        this.setState({ films: data.Search.slice(0, 6) });
      } else {
        console.log("error");
        this.setState({ isError: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <h4 className=" text-light d-flex justify-content-start mt-4">{this.props.title}</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 py-4 flex-nowrap no-gutters">
          {this.state.films.map((film) => {
            return (
              <div key={film.imdbID} className="col mb-2 px-1">
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

export default FilmSection;
