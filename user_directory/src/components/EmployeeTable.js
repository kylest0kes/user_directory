import React, { Component } from 'react';
import EmployeeRow from './EmployeeRow';
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
            .then(res => {this.setState({ result: res.data.results })
            console.log(this.state.result);
            })
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
            <div>
                <table className="table table-dark">
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
                        {this.state.result.map(result => (
                            <EmployeeRow 
                            picture={result.picture.thumbnail}
                            name={result.name.first}
                            cell={result.cell}
                            email={result.email}
                            dob={result.dob.date}/>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeTable;