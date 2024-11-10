// src/components/EmployeeList.js
import React, { useEffect, useState } from 'react';
import { getEmployeesWithGroups } from '../../services/GroupService';  // Import the service

const EmpGrp = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch employees with their groups when the component mounts
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployeesWithGroups();
        setEmployees(data);
      } catch (error) {
        setError('Failed to fetch employees');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // If loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there is an error, show an error message
  if (error) {
    return <div>{error}</div>;
  }

  // Render the list of employees and their groups
  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Groups</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>
                {employee.groupes && employee.groupes.length > 0 ? (
                  <ul>
                    {employee.groupes.map((group) => (
                      <li key={group.codeGroupe}>{group.nomGroupe}</li>
                    ))}
                  </ul>
                ) : (
                  <span>No groups assigned</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpGrp;
