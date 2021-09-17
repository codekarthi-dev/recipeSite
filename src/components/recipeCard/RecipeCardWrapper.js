import React,{useEffect,useState} from "react";
import RecipeCards from "./RecipeCards";
import "./RecipeCards.css"
const API_KEY = 'bd179e45fdf9446cb1fa7c7ed3b2eec2';

let RecipeCardWrapper = (props) => {
    const[recipes,setRecipes] = useState([]);

    console.log(props.selectedRecipe);

    useEffect(() =>{
if(props.selectedRecipe) 
fetchRecipe();
    },[props.selectedRecipe]);

    let fetchRecipe = async() => {
        let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${props.selectedRecipe}&addRecipeInformation=true&number=10`)
        let recipeData = await response.json();
        setRecipes(recipeData.results);
        console.log(recipeData);
    }

    return(<div className="recipeWrapper">
        {recipes.map((recipes)=> (
        <RecipeCards key={recipes.id} recipe={recipes} />
        ))}
    </div>);
}

export default RecipeCardWrapper;