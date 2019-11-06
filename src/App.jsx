import React, { Component } from 'react';
import EmployeeList from './EmployeeList'
import { Container } from 'semantic-ui-react'
class App extends Component {
  render() {
    return (
      <Container>
        <section name="header">
          <h1>Employee List</h1>
        </section>
        <section name="main">
          <EmployeeList />
        </section>
        <section name="footer"></section>
      </Container>
    );
  }
}

export default App;