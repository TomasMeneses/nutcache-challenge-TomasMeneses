import React from 'react';
import styles from './styles.css'
import { TiPencil } from 'react-icons/ti';
import { BsFillTrashFill } from 'react-icons/bs';
const Table = ({employees, toggleCreateEditModal, getEmployeeId, toggleDeleteModal}) => {

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
      <div className="container-table">

        <table className="content-table" data-testid="table-component">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Start Date</th>
                <th>Team</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
                <tbody>
            {mockedItems.map(employee =>
            <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.startDate}</td>
                <td>{employee.team}</td>
                <td><button className="btn-edit"onClick={() => {toggleCreateEditModal(); getEmployeeId(employee._id) }}><TiPencil/></button></td>
                <td><button className="btn-delete" onClick={() => {toggleDeleteModal(); getEmployeeId(employee._id) }}><BsFillTrashFill/></button></td>
            </tr>
                )}
            </tbody>
            
        </table>
      </div>
    )
}

export default Table;