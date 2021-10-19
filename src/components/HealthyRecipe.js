import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Recipe = ({ key, title, calories, image, url, ingredients }) => {

  const saveToFavs = () => {
    fetch('https://api.edamam.com/search?q=Random&app_id=33fe170b&app_key=52626f2cdf88d7903a4f69b64cdcd31d' + {key})
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let favsJSON = localStorage.getItem('favslist');
      let favslist = JSON.parse(favsJSON);

      if (favslist == null) {
        favslist = [];
      }
    
      favslist.push(data);
      localStorage.setItem('favslist', JSON.stringify(favslist));    
    })
  }



  return (
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
          <p>Calories: {calories}</p>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link className="websiteLink" href={url}>Recipe</Card.Link>
        <Card.Link className="websiteLink" onClick="saveToFavs" href="/Dinner">Save to Favs</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Recipe;
