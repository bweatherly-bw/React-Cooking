import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import styles from './Styles.css';
import HealthyRecipe from './HealthyRecipe';
import Button from 'react-bootstrap/Button';


const Desserts = () => {
  const APP_ID = '33fe170b';
  const APP_KEY = '52626f2cdf88d7903a4f69b64cdcd31d';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getDesserts();
  }, []);

  const getDesserts = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=keto-friendly&q=low-carb&to=20&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  
    return (
      <section className="desserts">
      <h1>Healthy Meals:</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch} />
            <Button className="search-button" type="submit" variant="outline-dark">Search</Button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <HealthyRecipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </section>
  );
}
  
  
  export default Desserts;