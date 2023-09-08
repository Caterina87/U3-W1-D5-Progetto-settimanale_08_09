import { Component } from "react";
import { Container, Dropdown, Navbar } from "react-bootstrap";

class MyHeader extends Component {
  render() {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <h2 className="ms-2 mb-4 text-light fs-1">TV Shows</h2>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="border light">
              Geners
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    );
  }
}

export default MyHeader;
