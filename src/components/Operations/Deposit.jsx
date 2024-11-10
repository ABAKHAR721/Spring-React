import React, { useState } from 'react';
import { deposit } from '../../services/OperationService';  // Import the deposit function

const Deposit = () => {
  const [compteCode, setCompteCode] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
 
  const handleDeposit = async () => {
    try {
      await deposit(compteCode, amount);  // Use the deposit API function
      setMessage('Dépôt réussi');
    } catch (error) {
      setMessage('Échec du dépôt');
    }
  };

  return (
    <div>
      <h2>Dépôt d'argent</h2>
      <input
        type="text"
        placeholder="Code du compte"
        value={compteCode}
        onChange={(e) => setCompteCode(e.target.value)}
      />
      <input
        type="number"
        placeholder="Montant"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Déposer</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Deposit;
