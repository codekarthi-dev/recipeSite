import React from "react";
import {Time,Group} from "../../assets/index";

let RecipeCards = (props) => {
    let {recipe} = props;

    return (<div className="recipeCard">
        <img src={recipe.image} alt={recipe.title} className="recipeImage"></img>
        <span className="recipeName">{recipe.title}</span>
        <div className="recipeInfo">
            <Time></Time>
            <span>{recipe.readyInMinutes}</span>
            <Group></Group>
            <span>{recipe.servings}</span>
        </div>

    </div>);
}

export default RecipeCards;