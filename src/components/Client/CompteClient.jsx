import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getComptesByClient } from '../../services/AccountService';

const CompteClient = () => {
  const { codeClient } = useParams(); // Get the client code from the URL
  const [Comptes, setComptes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComptes = async () => {
      try {
        const data = await getComptesByClient(codeClient);
        console.log(data); // Inspecting the API response
        setComptes(data);  // Since `data` is the array itself, set it directly
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des Comptes:', error);
        setLoading(false);
      }
    };

    if (codeClient) {
      fetchComptes();
    }
  }, [codeClient]);

  return (
    <div>
      <h2> Tous les comptes de {codeClient}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Comptes && Comptes.length > 0 ? (
            Comptes.map((Compte, index) => (
              <>
              <li li key={index}>Code Compte: {Compte.codeCompte}</li><li>Date de Création: {Compte.dateCreation}</li><li>Solde: {Compte.solde}</li><li>Découvert: {Compte.decouvert || 'N/A'}</li><li>Type: {Compte.type}</li> <br/> </>
         
            ))
          )
          
          : (
            <p>No accounts found for this client.</p>
          )}
          
        </ul>
      )}
    </div>
  );
};

export default CompteClient;
