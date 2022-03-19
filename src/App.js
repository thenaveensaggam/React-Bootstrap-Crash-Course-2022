import React from 'react';
import './App.css';
import {Container, Navbar} from "react-bootstrap";
import Counter from "./components/Counter";
import Register from "./components/Register";
import UserList from "./components/UserList";

let App = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
          <Container>
              <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
          </Container>
      </Navbar>
    {/*<Counter/>*/}
        {/*<Register/>*/}
        <UserList/>
    </>
  );
}

export default App;
