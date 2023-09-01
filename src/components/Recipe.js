const Recipe = ({recipe }) => {


return(<div className="recipe">

    <h3>{recipe.cakeName}</h3>
    <h4>ingredients</h4>
    <ul>

    {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}

    </ul>
    <p> price - {recipe.price}</p>
    <p> rating - {recipe.rating}</p>

        </div> )
}

export default Recipe;