import React, {useState} from 'react';
import axios from 'axios';

export default function AddRecipePage(){

  const postData = () => {
    axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
        recipeName,
        ingredients,
        instructions,
        category,
        preparation,
        cookingTime,
        servings
    })
}
  const [recipeName, setRecipeName] = useState('');
    const [Ingredients, setIngredients] = useState('');
    const [category, setCategory] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [servings, setSetservings] = useState('');
  return(
    <div className="addrecipe">
      <form>
            <input type="text" placeholder="Add Recipe name" onChange={(e) => setRecipeName(e.target.value)}/><br/>
            <input type="text" placeholder="Ingredients (separated by commas)"onChange={(e) => setFirstName(e.target.value)}/><br/>
            <input type="text" placeholder="Instructions"onChange={(e) => setIngredients(e.target.value)}/><br/>
            <input type="text" placeholder="Category"onChange={(e) => setCategory(e.target.value)}/><br/>
            <input type="text" placeholder="Preparation Time"onChange={(e) => setPreparation(e.target.value)}/><br/>
            <input type="text" placeholder="Cooking Time (mins)"onChange={(e) => setCookingTime(e.target.value)}/><br/>
            <input type="text" placeholder="Servings"onChange={(e) => setServings(e.target.value)}/><br/>
            <button onClick={AddRecipe} type="submit">Add Recipe</button>
        </form>
    </div>
  )
}