import axios from 'axios';

const BASE_URL = 'http://localhost:8080/clients'; // Remplacer par l'URL de votre backend

// Créer un client
export const saveClient = async (client) => {
    try {
        const response = await axios.post(BASE_URL, client);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création du client:', error);
    }
};

// Liste des clients
export const listClients = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des clients:', error);
    }
};

// Obtenir un client par ID
export const getClient = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération du client:', error);
    }
};

// Mettre à jour un client
export const updateClient = async (id, client) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, client);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du client:', error);
    }
};

// Supprimer un client
export const deleteClient = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error('Erreur lors de la suppression du client:', error);
    }
};
