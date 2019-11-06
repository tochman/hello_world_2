import React, { Component } from 'react';
import axios from 'axios'
import { List } from 'semantic-ui-react'
import EmployeeDetail from './EmployeeDetail'


class EmployeeList extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    this.fetchEmployees()
  }

  async fetchEmployees() {
    let response = await axios.get('https://reqres.in/api/users')
    this.setState({ employees: response.data.data })
  }

  render() {
    let employeeList = this.state.employees.map(employee => {
      return (
        <EmployeeDetail employee={employee} />
      )
    })
    return (
      <>
        <List>
          {employeeList}
        </List>
      </>
    );
  }
}

export default EmployeeList;