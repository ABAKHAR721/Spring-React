import React, { useState } from 'react';
import { withdraw } from '../../services/OperationService';  // Import the withdraw function

const Withdraw = () => {
  const [compteCode, setCompteCode] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleWithdraw = async () => {
    try {
      await withdraw(compteCode, amount);  // Use the withdraw API function
      setMessage('Retrait réussi');
    } catch (error) {
      setMessage('Échec du retrait');
    }
  };

  return (
    <div>
      <h2>Retirer de l'argent</h2>
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
      <button onClick={handleWithdraw}>Retirer</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Withdraw;
