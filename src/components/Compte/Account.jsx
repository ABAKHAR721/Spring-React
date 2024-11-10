import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listComptes, deleteCompte } from '../../services/AccountService';

const CompteList = () => {
  const [comptes, setComptes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComptes = async () => {
      try {
        const data = await listComptes();
        setComptes(data);
        console.log(comptes);
      } catch (error) {
        console.error('Error fetching comptes:', error);
      }
    };
    fetchComptes();
  }, []);

  const handleDelete = async (code) => {
    try {
      await deleteCompte(code);
      setComptes(comptes.filter(compte => compte.codeCompte !== code));
    } catch (error) {
      console.error('Error deleting compte:', error);
    }
  };

  const handleViewOperations = (codeCompte) => {
    navigate(`/operations/${codeCompte}`);
  };
 
  const handleViewCompte = (codeCompte) => {
    navigate(`/compte/${codeCompte}`);
  };

  return (
    <div>
      <h2>Comptes List</h2>
      <table className="table">
        <thead>
          <tr> 
            <th>Type</th>
            <th>Code</th>
            <th>Date de Création</th>
            <th>Découvert</th>
            <th>Taux</th>
            <th>Solde</th>
            <th>Historique</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comptes.map(compte => (
            <tr key={compte.codeCompte}>
              <td>{compte.type}</td>
              <td>
                <button onClick={() => handleViewCompte(compte.codeCompte)}>
                  View Compte {compte.codeCompte}
                </button>
              </td>
              <td>{compte.dateCreation || 'N/A'}</td>
              <td>{compte.decouvert || 'N/A'}</td>
              <td>{compte.taux || 'N/A'}</td>
              <td>{compte.solde}</td>
              <td>
                <button onClick={() => handleViewOperations(compte.codeCompte)}>
                  View Operations
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(compte.codeCompte)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompteList;
