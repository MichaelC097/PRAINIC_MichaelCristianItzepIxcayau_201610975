import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

export const getAllPublications = async () => {
    const response = await axios.get(`${API_URL}publications`);
    return response.data;
};

export const createPublication = async (data) => {
    const response = await axios.post(`${API_URL}publications/create`, data);
    return response.data;
};
