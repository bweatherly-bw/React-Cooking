import React from 'react';
import { Link } from "react-router-dom";

const Recipe = ({title, calories, image, url, ingredients}) => {
    return (
        <div>
            <a href={url}> <h1>{title}</h1> </a>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            {/* Option for Calories  */}
            {/* <p>{calories}</p> */}
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;