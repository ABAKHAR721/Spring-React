import axios from 'axios';

const BASE_URL = 'http://localhost:8080/comptes';

export const saveCompte = async (compte) => {
    try {
        const response = await axios.post(BASE_URL, compte);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création du compte:', error);
        throw error; // Rethrow the error to handle it in the component
    }
};

// Liste des comptes
export const listComptes = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des comptes:', error);
    }
};

// Obtenir un compte par code
export const getCompte = async (compteCode) => {
    try {
        const response = await axios.get(`${BASE_URL}/${compteCode}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération du compte:', error);
    }
};

// Mettre à jour un compte
export const updateCompte = async (compteCode, compte) => {
    try {
        const response = await axios.put(`${BASE_URL}/${compteCode}`, compte);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du compte:', error);
    }
}; 

// Supprimer un compte
export const deleteCompte = async (compteCode) => {
    try {
        await axios.delete(`${BASE_URL}/${compteCode}`);
    } catch (error) {
        console.error('Erreur lors de la suppression du compte:', error);
    }
};

// Obtenir les comptes d'un client
export const getComptesByClient = async (clientId) => {
    try {
        const response = await axios.get(`${BASE_URL}/client/${clientId}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des comptes du client:', error);
    }
};
