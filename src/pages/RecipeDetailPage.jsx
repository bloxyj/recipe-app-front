import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipe } from '../services/api';
import './RecipeDetailPage.css';

function RecipeDetailPage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRecipe(id)
            .then((response) => {
                setRecipe(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Recette introuvable.');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="loading">Chargement...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="detail-container">
            <Link to="/" className="detail-back">← Retour</Link>

            <div className="detail-hero">
                <img src={recipe.imageUrl} alt={recipe.title} />
            </div>

            <div className="detail-content">
                <div className="detail-meta">
                    <span className="detail-category">{recipe.category}</span>
                    <span className="detail-time">{recipe.prepTime} min</span>
                </div>

                <h1>{recipe.title}</h1>
                <p className="detail-description">{recipe.description}</p>

                <section className="detail-section">
                    <h2>Ingrédients</h2>
                    <ul>
                        {recipe.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </ul>
                </section>

                <section className="detail-section">
                    <h2>Préparation</h2>
                    <ol>
                        {recipe.steps.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ol>
                </section>
            </div>
        </div>
    );
}

export default RecipeDetailPage;
