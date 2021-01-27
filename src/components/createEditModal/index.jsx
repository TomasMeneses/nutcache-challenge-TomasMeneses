import React, { useState, useEffect } from 'react'

import ReactDom from 'react-dom'
import { useForm } from "react-hook-form";
import  api  from "../../services/employee"

import './styles.css'


const CreateEditModal = ({ isShowingCreateEditModal, toggleCreateEditModal, children }) => { 
  useEffect(() => {
    const listner = function (e) {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();

        isShowingCreateEditModal && toggleCreateEditModal();
      }
    }

    window.addEventListener('keyup', listner)

    return (() => {
      window.removeEventListener('keyup', listner)
    })

  }, [isShowingCreateEditModal, toggleCreateEditModal])

  return (
    isShowingCreateEditModal ? ReactDom.createPortal(
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div className="modal">
            {children}
          </div>
        </div>
      </div>, document.body
    ) : null
  )
}



export const CreateEditModalHeader = () => (
    <div className="modal-header">
        <h3>Employee</h3>
    </div>
)

export const CreateEditModalBody = ({ children, listFunction, employeeId }) => {
  
  const { register, handleSubmit, errors } = useForm();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    
    const getEmployee = async () => {
      console.log(typeof(employeeId));
      if(employeeId) {
        try {
          const response = await api.get(employeeId);
          console.log(response.data);
          setEmployee(response.data);
        }catch(error) {
          console.log(error);
        }
      }
      
    };
    getEmployee();
  }, [employeeId,setEmployee]);

  const handleSetValue = (event) => {
    console.log({...employee, [event.target.name]: event.target.value})
    setEmployee({...employee, [event.target.name]: event.target.value})
  }

  const onSubmit = async (data) => {
    
      if(data){
        try{
          const response = await api.post('', data);
          listFunction();
        } catch(error) {
          console.log(error);
        }
      }
  }

  const handleSaveEmployee = async () => {

    if(employee && employee._id){
      try{
        var idToUpdate = employee._id;
        delete employee._id
        const response = await api.put(idToUpdate, employee);
        listFunction();
      } catch(error) {
        console.log(error);
      }
    }else if (employee) {
      try{
        const response = await api.post('', employee);
        listFunction();
      } catch(error) {
        console.log(error);
      }
    }
  }

  return (
      <div className="modal-body">
        <form >
          <div className="body-inputs">
            <label htmlFor="name">Name</label>
            <input value={employee.name} onChange={handleSetValue}  name="name" id="name" type="text"/>

            <label htmlFor="birthDate">Birth Date</label>
            <input value={employee.birthDate} onChange={handleSetValue}  name="birthDate" id="birthDate" type="date"/>

            
          </div>
          
          <div className="body-inputs">
            <label htmlFor="email">E-mail</label>
            <input value={employee.email}  onChange={handleSetValue}  name="email" id="email" type="text"/>

            <label htmlFor="cpf">CPF</label>
            <input value={employee.cpf}  onChange={handleSetValue}  name="cpf" id="cpf" type="text"/>
          </div>

          <div className="body-inputs">
            <label htmlFor="startDate">Start Date</label>
            <input value={employee.startDate}  onChange={handleSetValue}  name="startDate"  id="starDate" type="text"/>

            <label htmlFor="team">Team</label>
            <input value={employee.team} onChange={handleSetValue}  name="team" id="team" type="text"/>
          </div>

          <div className="body-inputs">
            <label htmlFor="gender">Gender</label>
            <input value={employee.gender} onChange={handleSetValue}  name="gender" id="gender" type="text"/>
          </div>
          
        </form>
        <div className="modal-footer">
        <button onClick={handleSaveEmployee}>
          Create
        </button>
            {children}
          </div>
      </div>
  )
}


export const useCreateEditModal = () => {
  const [isShowingCreateEditModal, setIsShowingCreateEditModal] = useState(false);
  
  function toggleCreateEditModal() {
    setIsShowingCreateEditModal(!isShowingCreateEditModal);
  }

  return {
    isShowingCreateEditModal,
    toggleCreateEditModal,
  }
}

export default CreateEditModal;