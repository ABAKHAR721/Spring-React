import React, { useState, useEffect } from 'react';
import { listEmployes, deleteEmploye } from '../../services/EmployeeService';

const EmployeList = () => {
  const [employes, setEmployes] = useState([]);

  useEffect(() => {
    const fetchEmployes = async () => {
      const data = await listEmployes();
      setEmployes(data);
    };
    fetchEmployes();
  }, []);

  const handleDelete = async (id) => {
    await deleteEmploye(id);
    setEmployes(employes.filter(employe => employe.id !== id));
  };

  return (
    <div>
      <h2>Employés List</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>codeEmploye</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employes.map(employe => (
            <tr key={employe.codeEmploye}>

              <td>{employe.codeEmploye}</td>
              <td>{employe.nomEmploye}</td>

              <td>
                <button onClick={() => handleDelete(employe.codeEmploye)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeList;
