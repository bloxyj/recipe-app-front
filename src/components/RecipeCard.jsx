import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
        <h3>{recipe.title}</h3>
        <img
            src={recipe.imageUrl || "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fcats%2Fcomments%2F1nlvyud%2Fthis_is_a_popular_cat_called_rigby%2F&ved=0CBYQjRxqFwoTCLCWqtXYi5MDFQAAAAAdAAAAABAH&opi=89978449"}
            alt={recipe.title}
        />

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