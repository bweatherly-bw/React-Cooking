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

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="cardTitle">{title}</Card.Title>
        <Card.Text>
          <ol>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={url}>Wesbite</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
