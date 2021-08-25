import React from 'react'

function Table(props) {

  const employees = props.employees

    return (
        <table className="table bg-gradient-light table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Phone</th>            
          </tr>
        </thead>
        <tbody>
          {employees.map((employees, i) => (
          <tr key={i}>
            <td><img src = {employees.picture.medium} alt = ""></img></td>
            <td className="p-5">{employees.name.first}</td>
            <td className="p-5">{employees.name.last}</td>
            <td className="p-5">{employees.cell}</td>            
          
          </tr>

          ))}
          
        </tbody>
      </table>
    )
}

export default Table