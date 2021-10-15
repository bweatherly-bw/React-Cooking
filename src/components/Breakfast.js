import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import styles from './Styles.css';
import Recipe from './Recipe';


const Breakfast = () => {
  const APP_ID = '33fe170b';
  const APP_KEY = '52626f2cdf88d7903a4f69b64cdcd31d';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getBreakfast();
  }, []);

  const getBreakfast = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=Breakfast&app_id=${APP_ID}&app_key=${APP_KEY}`);
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
      <section className="breakfast">
      <h1>Breakfast</h1>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
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
  
  export default Breakfast;