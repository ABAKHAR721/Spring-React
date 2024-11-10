import React, { useState } from 'react';
import { saveClient } from '../../services/ClientService';  // Adjust the path to your service file

const CreateClient = () => {
    // State to manage form input and response/error
    const [nomClient, setNomClient] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Validate the input
        if (!nomClient) {
            setError('Le nom du client est requis');
            return;
        }

        // Create a client object
        const newClient = {
            nomClient: nomClient,
        };

        try {
            // Call the saveClient function from the service
            const savedClient = await saveClient(newClient);
            if (savedClient) {
                setMessage('Client créé avec succès!');
                setNomClient(''); // Reset the form
                setError(''); // Reset the error
            }
        } catch (error) {
            setError('Erreur lors de la création du client. Veuillez réessayer.');
            setMessage('');
        }
    };

    return (
        <div>
            <h2>Créer un nouveau client</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nomClient">Nom du Client</label>
                    <input
                        type="text"
                        id="nomClient"
                        value={nomClient}
                        onChange={(e) => setNomClient(e.target.value)}
                        placeholder="Entrez le nom du client"
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Créer</button>
            </form>

            {/* Display success or error message */}
            {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
};

export default CreateClient;
