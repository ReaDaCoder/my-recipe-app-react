import React, { useEffect, useState } from "react";

function AddRecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const data = window.localStorage.getItem('RECIPES');
    if (data) setRecipes(JSON.parse(data));
  }, []);


  useEffect(() => {
    window.localStorage.setItem('RECIPES', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (ev) => {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const ingredients = ev.target.elements.ingredients.value;
    const instructions = ev.target.elements.instructions.value;
    const category = ev.target.elements.category.value;
    const prepTime = ev.target.elements.prepTime.value;
    const cookTime = ev.target.elements.cookTime.value;
    const servings = ev.target.elements.servings.value;

    
    if (!name || !ingredients || !instructions || !category || !prepTime || !cookTime || !servings) {
      setError('All fields are required.');
      return;
    }

    const newRecipe = {
      id: Date.now(), 
      name,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions,
      category,
      prepTime,
      cookTime,
      servings,
    };

    
    setRecipes([...recipes, newRecipe]);
    setError(''); 
    ev.target.reset(); 
  };

  return (
    <div className="add-recipe-box">
      <h1>Add New Recipe</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={addRecipe}>
        <input type="text" name="name" placeholder="Recipe Name" required /><br />
        <textarea name="ingredients" placeholder="Ingredients (separated by commas)" required /><br />
        <textarea name="instructions" placeholder="Instructions" required /><br />
        <input type="text" name="category" placeholder="Category (e.g., Dessert)" required /><br />
        <input type="number" name="prepTime" placeholder="Preparation Time (mins)" required /><br />
        <input type="number" name="cookTime" placeholder="Cooking Time (mins)" required /><br />
        <input type="number" name="servings" placeholder="Servings" required /><br />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipePage;
