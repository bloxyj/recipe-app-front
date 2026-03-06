import axios from 'axios'; 

const API_URL = 'http://localhost:3000/recipes';

export const getRecipes = () => {
    return axios.get(API_URL);
};

export const getRecipe = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createRecipe = (recipeData) => {
    return axios.post(API_URL, recipeData);
};

export const updateRecipe = (id, recipeData) => {
    return axios.put(`${API_URL}/${id}`, recipeData);
};

export const deleteRecipe = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};