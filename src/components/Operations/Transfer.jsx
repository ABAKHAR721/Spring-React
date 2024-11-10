import React, { useState } from 'react';
import { transfer } from '../../services/OperationService';  // Import the transfer function

const Transfer = () => {
  const [fromCompteCode, setFromCompteCode] = useState('');
  const [toCompteCode, setToCompteCode] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleTransfer = async () => {
    try {
      await transfer(fromCompteCode, toCompteCode, amount);  // Use the transfer API function
      setMessage('Transfert réussi');
    } catch (error) {
      setMessage('Échec du transfert');
    }
  };

  return (
    <div>
      <h2>Transfert d'argent</h2>
      <input
        type="text"
        placeholder="Code du compte d'origine"
        value={fromCompteCode}
        onChange={(e) => setFromCompteCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Code du compte destinataire"
        value={toCompteCode}
        onChange={(e) => setToCompteCode(e.target.value)}
      />
      <input
        type="number"
        placeholder="Montant"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transférer</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Transfer;
