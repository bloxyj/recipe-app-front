import { useState, useEffect } from 'react';
import { getRecipes } from '../services/api';
import RecipeCard from '../components/RecipeCard';
import '../App.css';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    getRecipes()
        .then((response) => {
        setRecipes(response.data);
        setLoading(false);
        })
        .catch((err) => {
        setError("Erreur lors de la récupération des recettes.");
        setLoading(false);
        });
}, []);


    if (loading) return <div className="loading">Chargement...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
    <div className="container">
        <h1>Nos Recettes</h1>
        <div className="recipe-grid">
        {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
        </div>
    </div>
    );
}; 

export default HomePage;