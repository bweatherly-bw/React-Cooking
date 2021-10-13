import React from 'react';

const Recipe = ({title, calories, image, url, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <a href={url}>URL</a>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;