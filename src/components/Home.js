import React,{useEffect, useState} from "react";
import Recipe from "./Recipe";
import Button from 'react-bootstrap/Button';

function Home() {
  const APP_ID = '33fe170b';
  const APP_KEY = '52626f2cdf88d7903a4f69b64cdcd31d';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&to=30&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipes()
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <section className="home">
      <h2>Use the search bar to find your next meal...</h2>
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

export default Home;