import React, { Component } from 'react';
import API from '../utils/API';

class EmployeeTable extends Component {
    state = {
        result: {},
        search: "",
    };

    componentDidMount() {
        this.searchEmployees()
    }

    searchEmployees = query => {
        API.search(query)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
    };

    render() {
        return(
            <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Image</th>
                <td>Name</td>
                <td>Phone</td>
                <td>Email</td>
                <td>DOB</td>
              </tr>
            </tbody>
          </table>
        )
    }
}

export default EmployeeTable;