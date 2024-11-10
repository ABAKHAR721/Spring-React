import React, { useState } from 'react';
import { saveCompte } from '../../services/AccountService';

const CompteForm = () => {
    const [code, setCode] = useState('');
    const [type, setType] = useState('CC'); // default to CompteCourant
    const [balance, setBalance] = useState(0);
    const [decouvert, setDecouvert] = useState(0);
    const [taux, setTaux] = useState(0);
    const [codeCli, setCodeCli] = useState('');
    const [codeEmp, setCodeEmp] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let compte;
        const dateCreation = new Date();

        if (type === 'CC') {
            compte = {
                codeCompte: code,
                dateCreation,
                solde: balance,
                type: 'CC',
                decouvert: decouvert, // include decouvert for CompteCourant
                client: { codeClient: codeCli }, // Set client ID here
                employe: { codeEmploye: codeEmp } // Set employee ID
            };
        } else {
            compte = {
                codeCompte: code,
                dateCreation,
                solde: balance,
                type: 'CE',
                taux: taux, // include taux for CompteEpargne
                client: { codeClient: codeCli }, // Set client ID here
                employe: { codeEmploye: codeEmp } // Set employee ID
            };
        }

        try {
            const response = await saveCompte(compte); // Send request to backend
            setMessage("Le compte a été créé avec succès.");
            // Reset the form
            setCode('');
            setBalance(0);
            setDecouvert(0);
            setTaux(0);
            setCodeCli('');
            setCodeEmp('');
        } catch (error) {
            console.error('Erreur lors de la création du compte:', error);
            setMessage("Erreur lors de la création du compte.");
        }
    };

    return (
        <>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <h2>Créer un nouveau compte</h2>
                <div>
                    <label>Code: </label>
                    <input type="text" value={code} onChange={(e) => setCode(e.target.value)} required />
                </div>
                <div>
                    <label>Type: </label>
                    <select value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="CC">Compte Courant</option>
                        <option value="CE">Compte Epargne</option>
                    </select>
                </div>
                <div>
                    <label>Solde: </label>
                    <input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} required />
                </div>
                {type === 'CC' && (
                    <div>
                        <label>Découvert: </label>
                        <input type="number" value={decouvert} onChange={(e) => setDecouvert(e.target.value)} required />
                    </div>
                )}
                {type === 'CE' && (
                    <div>
                        <label>Taux: </label>
                        <input type="number" value={taux} onChange={(e) => setTaux(e.target.value)} required />
                    </div>
                )}
                <div>
                    <label>ID Client: </label>
                    <input type="text" value={codeCli} onChange={(e) => setCodeCli(e.target.value)} required />
                </div>
                <div>
                    <label>ID Employé: </label>
                    <input type="text" value={codeEmp} onChange={(e) => setCodeEmp(e.target.value)} required />
                </div>
                <button type="submit">Enregistrer le compte</button>
            </form>
        </>
    );
};

export default CompteForm;
