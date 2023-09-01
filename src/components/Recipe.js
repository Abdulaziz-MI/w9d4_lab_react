const Recipe = ({cakeName, ingredients, price, rating }) => {


return(<div className="recipe">

    <h3>{cakeName}</h3>
    <h4>ingredients</h4>
    <ul>

    {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}

    </ul>
    <p> price - {price}</p>
    <p> rating - {rating}</p>

        </div> )
}

export default Recipe;