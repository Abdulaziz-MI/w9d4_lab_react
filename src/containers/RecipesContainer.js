import Recipe from "../components/Recipe";
import { useState } from "react";

const RecipesContainer = () =>{


    

    const [rating1, setRating1] = useState(5)
    const [price1, SetPrice1] = useState(5)

    const [rating2, setRating2] = useState(2)
    const [price2, SetPrice2] = useState(3)

    const [rating3, setRating3] = useState(8)
    const [price3, SetPrice3] = useState(5)


    return(<div className="recipesContainer">
        
        <Recipe 
  cakeName={"Victoria Sponge"}
  ingredients={[
    "eggs",
    "oil",
    "dried fruit",
    "sugar",
    "self-raising flour",
    "strong tea",
  ]}
  price={price1}
  rating={rating1} 

/>

<Recipe 
  cakeName={"Tea Loaf"}
  ingredients={[
    "eggs",
    "oil",
    "dried fruit",
    "sugar",
    "self-raising flour",
    "strong tea",
  ]}
  price={price2}
  rating={rating2}

/>

<Recipe 
  cakeName={"Carrot Cake"}
  ingredients={[
    "carrots",
    "walnuts",
    "oil",
    "cream cheese",
    "flour",
    "sugar",
  ]}
  price={price3}
  rating={rating3} 
/>

<h4> Average rating - {(rating1 + rating2 + rating3) / 3}</h4>
    </div>)
}

export default RecipesContainer;