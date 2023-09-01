import Recipe from "../components/Recipe";
import { useState } from "react";

const RecipesContainer = () =>{



    const [victoriaSponge, setVictoriaSponge] = useState(
      {
        cakeName: "Victoria Sponge",
        ingredients: [
          "eggs",
          "oil",
          "dried fruit",
          "sugar",
          "self-raising flour",
          "strong tea",
        ],  
        price:5,
        rating: 5
      })


    const [teaLoaf, setTeaLoaf] = useState({
        cakeName:"Tea Loaf",
        ingredients:[
          "eggs",
          "oil",
          "dried fruit",
          "sugar",
          "self-raising flour",
          "strong tea",
        ],
          price:2,
          rating:3
    })

    const [carrotCake, setCarrotCake] = useState({

          cakeName:"Carrot Cake",
          ingredients:[
            "carrots",
            "walnuts",
            "oil",
            "cream cheese",
            "flour",
            "sugar",
          ],
          price:8,
          rating:5
    })

    return(<div className="recipesContainer">
        
      <Recipe recipe={victoriaSponge} />
      <Recipe recipe = {teaLoaf} />
      <Recipe recipe = {carrotCake} />
      
        <h4> 
        Average rating - {(victoriaSponge.rating + teaLoaf.rating + carrotCake.rating) / 3}
        </h4>

    </div>)
}

export default RecipesContainer;