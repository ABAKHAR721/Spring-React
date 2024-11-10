import React, { useState, useEffect } from 'react';
import { getCompte } from '../../services/AccountService';

const CompteOne = () => {
    const [code, setCode] = useState('');
    const [compte, setCompte] = useState(null); // initialize as null for better conditional rendering

    const fetchCompte = async () => {
        try {
            const data = await getCompte(code);
            setCompte(data);
        } catch (error) {
            console.error('Error fetching compte:', error);
        }
    };

    useEffect(() => {
        if (code) {
            fetchCompte();
        }
    }, [code]);

    return (
        <>
            {/* Check if the compte exists */}
            {!compte ? (
                <>
                    <label>Code compte</label>
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                </>
            ) : (
                <>
                    <ul>
                        <li>Code Compte: {compte.codeCompte}</li>
                        <li>Date de Création: {compte.dateCreation}</li>
                        <li>Solde: {compte.solde}</li>
                        <li>Découvert: {compte.decouvert || 'N/A'}</li>
                        <li>Type: {compte.type}</li>
                    </ul>
                </>
            )}
        </>
    );
};

export default CompteOne;
