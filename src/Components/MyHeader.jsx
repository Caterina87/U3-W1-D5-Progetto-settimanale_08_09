import { Component } from "react";
import { Container, Navbar } from "react-bootstrap";

class MyHeader extends Component {
  render() {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <h2 className="ms-2 mb-4 text-light fs-1">TV Shows</h2>
          <div className="dropdown">
            <button
              className="btn btn-dark border-light btn-sm dropdown-toggle rounded-0"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Genres &nbsp;
            </button>
            <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
              <ul>
                <li className="dropdown-item text-white bg-dark">Comedy</li>
                <li className="dropdown-item text-white bg-dark">Drama</li>
                <li className="dropdown-item text-white bg-dark">Thriller</li>
              </ul>
            </div>
          </div>
          <div>
            <i className="bi bi-list"></i>
            <i className="bi bi-list"></i>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default MyHeader;
