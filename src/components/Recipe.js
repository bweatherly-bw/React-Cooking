import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Recipe = ({ title, calories, image, url, ingredients }) => {
  return (
    // <div>
    //     <a href={url}> <h1>{title}</h1> </a>
    //     <ol>
    //         {ingredients.map(ingredient => (
    //             <li>{ingredient.text}</li>
    //         ))}
    //     </ol>
    //     <p>{calories}</p>
    //     <img src={image} alt="" />
    // </div>
<div className='bootstrapCard'>
    <Card style={{ width: "24rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="cardTitle">{title}</Card.Title>
        
        <Card.Text>
          <h3 className="cardIngredients"> INGREDIENTS: </h3>
          <ol>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link className="websiteLink" href={url}>Recipe</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Recipe;
