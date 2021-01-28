import React, { useEffect, useState } from 'react';
import styles from './styles.css';
import Table from '../table/';
import CreateEditModal, {
    CreateEditModalHeader, 
    CreateEditModalBody, 
     
    useCreateEditModal
} from '../createEditModal'

import api from '../../services/employee'

const Container = () => {
    const { isShowingCreateEditModal, toggleCreateEditModal } = useCreateEditModal();
    const [employeeList, setEmployeeList] = useState([]);
    const [employeeId, setEmployeeId] = useState('');
    const [lastEmployeeIdSaved, setLastEmployeeIdSaved] = useState('');

    const handleLastEmployeeId = (id) => {
        setEmployeeId(id);
    }

    const getData = async () => {
        try {
            const response = await api.get('');
            console.log(response.data);
            setEmployeeList(response.data);
        }catch(error) {
            console.log(error);
        }
    };

    const getEmployeeId = (employeeId) => {
        setEmployeeId(employeeId);
    };
    
    useEffect(() => {
        getData();
      }, [setEmployeeList]);
    return (
        <div className="container">
            <div className="crud-container">
                <button onClick={() => {toggleCreateEditModal(); setEmployeeId('') }} className="crud-container-button">Create Employee</button>
                <button className="crud-container-button">Delete last Employee</button>
                <button onClick={() => {toggleCreateEditModal()}} className="crud-container-button">Update last Employee</button>
            </div>
            
            <CreateEditModal {...{isShowingCreateEditModal, toggleCreateEditModal}}>
                <CreateEditModalHeader {...{toggleCreateEditModal}}/>
                <CreateEditModalBody {...{toggleCreateEditModal}} listFunction={getData} employeeId={employeeId} handleLastEmployeeId={handleLastEmployeeId}>
                    <button onClick={toggleCreateEditModal}>
                        Cancel
                    </button>
                </CreateEditModalBody>
                
                      
            </CreateEditModal>
            <Table employees={employeeList} toggleCreateEditModal={toggleCreateEditModal} getEmployeeId={getEmployeeId} />
        </div>
    )
}

export default Container;