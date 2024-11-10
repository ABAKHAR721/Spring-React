import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOperationsByCompte } from '../../services/OperationService';

const OperationsList = () => {
  const { compteCode } = useParams(); // Get the compteCode from the URL
  const [operations, setOperations] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    const fetchOperations = async () => {
      try {
        const data = await getOperationsByCompte(compteCode, page, size);
        setOperations(data.content); // Assuming `data.content` holds the operations
        console.log(data.content);
      } catch (error) {
        console.error('Erreur lors de la récupération des opérations:', error);
      }
    };

    if (compteCode) {
      fetchOperations();
    }
  }, [compteCode, page, size]);

  return (
    <div>
      <h2>Opérations pour le compte {compteCode}</h2>
      <ul>
        {operations.map((operation, index) => (
          <><li key={index}>
            TypeOperation: {operation.typeOp === "V" ? "Virement" : "Retrait"}  <br />Montant: {operation.montant} <br /> DateOperation{operation.dateOperation}
          </li><br /></>
        ))}
      </ul>
    </div>
  );
};

export default OperationsList;
