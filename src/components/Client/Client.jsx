import React, { useState, useEffect } from 'react';
import { listClients, deleteClient } from '../../services/ClientService';
import { useNavigate } from 'react-router-dom';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      const data = await listClients();
      setClients(data);
      
    };
    fetchClients();
  }, []);

  const handleDelete = async (id) => {
    await deleteClient(id);
    setClients(clients.filter(client => client.id !== id));
  };

  const handleCompteClient= (codeClient) =>{
      navigate(`/compte/client/${codeClient}`);
  };
  

  return (
    <div>
      <h2>Clients List</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Code Client</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {clients.map(client => (
            <tr key={client.codeClient}>
              
              <td>
                <button onClick={() => handleCompteClient(client.codeClient)}>Voir les comptes de {client.codeClient}</button>
              </td>
              <td>{client.nomClient}</td>
              <td>
                <button onClick={() => handleDelete(client.codeClient)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
