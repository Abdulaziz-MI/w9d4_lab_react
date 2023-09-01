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
        rating: 5,
        imgSrc: "/images/victoria_cake.jpg"
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
          rating:3, 
          imgSrc: "/images/tea_loaf.jpg"
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
          rating:5,
          imgSrc: "/images/carrot_cake.jpg"
    })

    return(
    <><div className="recipesContainer">
        
      <Recipe recipe={victoriaSponge} />
      <Recipe recipe = {teaLoaf} />
      <Recipe recipe = {carrotCake} />
      </div>
        <h3> 
        Average rating - {(victoriaSponge.rating + teaLoaf.rating + carrotCake.rating) / 3}
        </h3>
</>
   )
}

export default RecipesContainer;