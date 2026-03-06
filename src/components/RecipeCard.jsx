import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
        <img src={recipe.imageUrl} alt={recipe.title}/>
        <h3>{recipe.title}</h3>

        <p>{recipe.description}</p>

        <div className="recipe-info">
            <span>{recipe.prepTime} min</span>
            <br />
            <span>{recipe.category}</span>
        </div>

        <Link to={`/recipe/${recipe.id}`} className="btn-detail">
            Voir détail
        </Link>
        </div>
    );
};

export default RecipeCard;