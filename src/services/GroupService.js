import axios from 'axios';

const BASE_URL = 'http://localhost:8080/groupes';

// Créer un groupe
export const saveGroupe = async (groupe) => {
    try {
        const response = await axios.post(BASE_URL, groupe);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création du groupe:', error);
    }
};

// Liste des groupes
export const listGroupes = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des groupes:', error);
    }
};

// Obtenir un groupe par ID
export const getGroupe = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération du groupe:', error);
    }
};

// Mettre à jour un groupe
export const updateGroupe = async (id, groupe) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, groupe);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du groupe:', error);
    }
};

// Supprimer un groupe
export const deleteGroupe = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error('Erreur lors de la suppression du groupe:', error);
    }
};

// Assigner un employé à un groupe
export const assignEmployeToGroupe = async (employeId, groupeId) => {
    try {
        await axios.post(`${BASE_URL}/assignEmploye`, null, {
            params: { employeId, groupeId }
        });
    } catch (error) {
        console.error('Erreur lors de l\'assignation de l\'employé au groupe:', error);
    }
};
  // Correct for listing employees

const API_BASE_URL = 'http://localhost:8080/groupes/employes';  // Make sure to update the API URL if different

// Function to get the list of employees and their groups
export const getEmployeesWithGroups = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data; // Assuming the backend returns a list of employees
  } catch (error) {
    console.error("Error fetching employees with groups:", error);
    throw error;
  }
};

