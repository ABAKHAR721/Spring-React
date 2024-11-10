import axios from 'axios';

const BASE_URL = 'http://localhost:8080/operations';

// Déposer de l'argent
export const deposit = async (compteCode, amount) => {
    try {
        await axios.post(`${BASE_URL}/deposit`, null, {
            params: { compteCode, amount }
        });
        alert('Dépôt réussi');
    } catch (error) {
        console.error('Erreur lors du dépôt:', error);
        alert('Échec du dépôt');
    }
};

// Retirer de l'argent
export const withdraw = async (compteCode, amount) => {
    try {
        await axios.post(`${BASE_URL}/withdraw`, null, {
            params: { compteCode, amount }
        });
        alert('Retrait réussi');
    } catch (error) {
        console.error('Erreur lors du retrait:', error);
        alert('Échec du retrait');
    }
};

// Transfert d'argent
export const transfer = async (fromCompteCode, toCompteCode, amount) => {
    try {
        await axios.post(`${BASE_URL}/transfer`, null, {
            params: { fromCompteCode, toCompteCode, amount }
        });
        alert('Transfert réussi');
    } catch (error) {
        console.error('Erreur lors du transfert:', error);
        alert('Échec du transfert');
    }
};

// Récupérer les opérations par compte
export const getOperationsByCompte = async (compteCode, page, size) => {
    try {
        const response = await axios.get(`${BASE_URL}/compte/${compteCode}`, {
            params: { page, size }
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des opérations:', error);
    }
};
