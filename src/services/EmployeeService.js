import axios from 'axios';

const BASE_URL = 'http://localhost:8080/employes';

// Créer un employé
export const saveEmploye = async (employe) => {
    try {
        const response = await axios.post(BASE_URL, employe);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création de l\'employé:', error);
    }
};

// Liste des employés
export const listEmployes = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des employés:', error);
    }
};

// Obtenir un employé par ID
export const getEmploye = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'employé:', error);
    }
};

// Mettre à jour un employé
export const updateEmploye = async (id, employe) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, employe);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'employé:', error);
    }
};

// Supprimer un employé
export const deleteEmploye = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'employé:', error);
    }
};
