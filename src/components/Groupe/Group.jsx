import React, { useState, useEffect } from 'react';
import { listGroupes, deleteGroupe } from '../../services/GroupService';

const GroupeList = () => {
  const [groupes, setGroupes] = useState([]);

  useEffect(() => {
    const fetchGroupes = async () => {
      const data = await listGroupes();
      setGroupes(data);
    };
    fetchGroupes();
  }, []);

  const handleDelete = async (id) => {
    await deleteGroupe(id);
    setGroupes(groupes.filter(groupe => groupe.id !== id));
  };

  return (
    <div>
      <h2>Groupes List</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {groupes.map(groupe => (
            <tr key={groupe.codeGroupe}>
              <td>{groupe.codeGroupe}</td>
              <td>{groupe.nomGroupe}</td>
              <td>
                <button onClick={() => handleDelete(groupe.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupeList;
