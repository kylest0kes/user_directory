import React from 'react'

export default function EmployeeRow(props) {
    return (
        <tr>
            <th scope="row"><img src={props.picture.thumbnail}></img></th>
            <td>{props.name.first} {props.name.last}</td>
            <td>{props.cell}</td>
            <td>{props.email}</td>
            <td>{props.dob.date}</td> 
        </tr>
    );
}
