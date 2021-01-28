import React from 'react';
import styles from './styles.css'
const Table = ({employees, toggleCreateEditModal, getEmployeeId}) => {

    const mockedItems = [
        {
          "_id": "60119eac37711c03e8736380",
          "name": "TomasMeneses",
          "birthDate": "1996-06-11",
          "email": "tomasmeneses22@gmail.com",
          "cpf": "01446809471",
          "startDate": "11",
          "team": "front",
          "gender": "M"
        },
        {
          "_id": "60119eac37711c03e8736381",
          "name": "TomasMeneses",
          "birthDate": "1996-06-11",
          "email": "tomasmeneses22@gmail.com",
          "cpf": "01446809471",
          "startDate": "11",
          "team": "front",
          "gender": "M"
        },
        {
          "_id": "60119ef437711c03e8736382",
          "name": "Tomas Teste 1",
          "birthDate": "1996-06-11",
          "email": "tomasmeneses22@gmail.com",
          "cpf": "01446809471",
          "startDate": "11",
          "team": "front",
          "gender": "M"
        },
        {
          "_id": "60119ef437711c03e8736383",
          "name": "Tomas Teste 1",
          "birthDate": "1996-06-11",
          "email": "tomasmeneses22@gmail.com",
          "cpf": "01446809471",
          "startDate": "11",
          "team": "front",
          "gender": "M"
        },
        {
          "_id": "60119f6f37711c03e8736384",
          "name": "Teste 3",
          "birthDate": "1996-06-11",
          "email": "tomasmeneses22@gmail.com",
          "cpf": "01446809471",
          "startDate": "11",
          "team": "front",
          "gender": "M"
        },
        {
          "_id": "60119fcb37711c03e8736385",
          "name": "Teste 3",
          "birthDate": "1996-06-11",
          "email": "tomasmeneses22@gmail.com",
          "cpf": "01446809471",
          "startDate": "11",
          "team": "front",
          "gender": "M"
        }
      ]
    return (
        <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Start Date</th>
                <th>Team</th>
              </tr>
            </thead>
                <tbody>
            {employees.map(employee =>
            <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.startDate}</td>
                <td>{employee.team}</td>
                <td><button onClick={() => {toggleCreateEditModal(); getEmployeeId(employee._id) }}>Edit</button></td>
                <td><button>Delete</button></td>
            </tr>
                )}
            </tbody>
            
        </table>
    )
}

export default Table;