import React from 'react';
import styles from './styles.css'
import { TiPencil } from 'react-icons/ti';
import { BsFillTrashFill } from 'react-icons/bs';
const Table = ({employees, toggleCreateEditModal, getEmployeeId, toggleDeleteModal}) => {

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
            {employees.map(employee =>
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