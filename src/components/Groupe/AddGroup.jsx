import React, { useState } from 'react';
import { saveGroupe } from '../../services/GroupService';

const GroupForm = () => {
  const [nomGroupe, setnomGroupe] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const groupe = { nomGroupe };
    try {
      await saveGroupe(groupe);
      setMessage('Dépôt réussi');
      setnomGroupe('');
    } catch (error) {
      setMessage("Échec d'ajouter");
    }
  };

  return (
    
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create New Groupe</h2>
        <div>
          <label>Nom Group: </label>
          <input type="text" value={nomGroupe} onChange={(e) => setnomGroupe(e.target.value)} />
        </div>
        <button type="submit">Add Group</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default GroupForm;
