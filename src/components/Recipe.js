const Recipe = ({recipe }) => {


    console.log(recipe)

return(<div className="recipe">

    <h3>{recipe.cakeName}</h3>
    <div className="imgContainer">
        <img src={recipe.imgSrc}></img>
    </div>
    <p>Ingredients</p>
    {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}


    <p> price - {recipe.price}</p>
    <p> rating - {recipe.rating}</p>

        </div> )
}

export default Recipe;