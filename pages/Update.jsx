import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function Update(){

    const [recipeName, setRecipeName] = useState('');
    const [Ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [servings, setServings] = useState('');

    useEffect(() => {
        setRecipeName(localStorage.getItem('ID'))
        setIngredients(localStorage.getItem('Ingredient'));
        setInstructions(localStorage.getItem('Instructgion'));
        setCategory(localStorage.getItem('Category'));
        setPreparationTime(localStorage.getItem('Preparation'));
        setCookingTime(localStorage.getItem('Cooking Time'));
        setServings(localStorage.getItem('Serving'));
}, []);

const updateApitData = () =>{
    axios.post('http://localhost:3000/recipes', {
      recipeName,
      Ingredients,
      instructions,
      category,
      preparationTime,
      cookingTime,
      servings
  })
}

    return(
        <div>
            <form>
            <input type="text" placeholder="Add Recipe name" onChange={(e) => setRecipeName(e.target.value)}/><br/>
            <input type="text" placeholder="Ingredients (separated by commas)"onChange={(e) => setFirstName(e.target.value)}/><br/>
            <input type="text" placeholder="Instructions"onChange={(e) => setIngredients(e.target.value)}/><br/>
            <input type="text" placeholder="Category"onChange={(e) => setCategory(e.target.value)}/><br/>
            <input type="text" placeholder="Preparation Time"onChange={(e) => setPreparationTime(e.target.value)}/><br/>
            <input type="text" placeholder="Cooking Time (mins)"onChange={(e) => setCookingTime(e.target.value)}/><br/>
            <input type="text" placeholder="Servings"onChange={(e) => setServings(e.target.value)}/><br/>
            <div className="card">
                 <input type="file" accept="image/JPEG, image/png, image/jpg" id="input-file" />
                 <label htmlFor="input-file" id="update-img">Update</label>
              </div>
              <button onClick={AddRecipe} type="submit">Add Recipe</button>
        </form>

        </div>
    )
}