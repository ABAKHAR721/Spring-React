import React, { useState } from 'react';
import { saveEmploye } from '../../services/EmployeeService';

const AddEmploye = () => {
    const [nomEmploye, setNomEmploye] = useState('');
    const [employeSup, setEmployeSup] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const employe = {
            nomEmploye,
            employeSup: employeSup ? { codeEmploye: employeSup } : null
        };
        
        try {
            await saveEmploye(employe);
            alert('Employee added successfully');
            setNomEmploye('');
            setEmployeSup('');
        } catch (error) {
            alert('Error adding employee');
        }
    };

    return (
        <div className="container">
            <h2>Add New Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nomEmploye">Employee Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nomEmploye"
                        value={nomEmploye}
                        onChange={(e) => setNomEmploye(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="employeSup">Supervisor ID:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="employeSup"
                        value={employeSup}
                        onChange={(e) => setEmployeSup(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmploye;
