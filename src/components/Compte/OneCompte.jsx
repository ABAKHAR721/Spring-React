import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCompte } from '../../services/AccountService';

const OneCompte = () => {
  const { id } = useParams();
  const [compte, setCompte] = useState({});
 
  useEffect(() => {
    const fetchCompte = async () => {
      try {
        const data = await getCompte(id);
        setCompte(data);
        
      } catch (error) {
        console.error('Error fetching compte:', error);
      }
    };

    if (id) {
      console.log(compte);
      fetchCompte();
    }
  }, [id]);

  return (
    <div>
      <h2>Compte Details: {id}</h2>
      <ul>
        {compte && (
          <>
            <li>Code Compte: {compte.codeCompte}</li>
            <li>Date de Création: {compte.dateCreation}</li>
            <li>Solde: {compte.solde}</li>
            <li>Découvert: {compte.decouvert || 'N/A'}</li>
            <li>Taux: {compte.taux || 'N/A'}</li>
            <li>Type: {compte.type}</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default OneCompte;
