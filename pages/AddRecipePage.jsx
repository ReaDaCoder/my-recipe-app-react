import React, {useState, useEffect} from 'react';
import axios from 'axios';
//import { useNavigate, Link} from 'react-router-dom';

export default function AddRecipePage(){

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/recipes`)
        .then((response) => {
            setApiData(response.data);
        })
}, [])

useEffect(() => {
  setID(localStorage.getItem('ID'))
  setRecipeName(localStorage.getItem('Recipe Name'));
  setIngredients(localStorage.getItem('Ingredients'));
  setInstructions(localStorage.getItem('Instructions'))
  setCategory(localStorage.getItem('Category'));
  setPreparationTime(localStorage.getItem('Preparation Time'));
  setCookingTime(localStorage.getItem('Cooking Time'));
  setServings(localStorage.getItem('Servings'));
}, []);


  const postData = () =>{
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

const setData = (data) => {
  let { id, recipeName, Ingredients, instructions, category, preparationTime, cookingTime, servings } = data;
  localStorage.setItem('ID', id);
  localStorage.setItem('Recipe Name', recipeName);
  localStorage.setItem('Ingredients', Ingredients);
  localStorage.setItem('Instructions', instructions)
  localStorage.setItem('Category', category);
  localStorage.setItem('Preparation Time', preparationTime);
  localStorage.setItem('Cooking Time', cookingTime);
  localStorage.setItem('Servings', servings);
  console.log(data);
}

const onDelete = (id) => {
  axios.delete(`http://localhost:3000/recipes/${id}`)
       .then(() => {
           setApiData(apiData.filter(recipe => recipe.id !== id));
       })
       .catch((error) => console.error('Error deleting recipe:', error));
};

  const AddRecipe = (e) => {
    
    //e.preventDefault();
    console.log("Recipe Name:", recipeName);
    console.log("Ingredients:", Ingredients);
    console.log("Instructions:", instructions);
    console.log("Category:", category);
    console.log("Preparation Time:", preparationTime);
    console.log("Cooking Time:", cookingTime);
    console.log("Servings:", servings);
    postData();
}


  const [recipeName, setRecipeName] = useState('');
    const [Ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [servings, setServings] = useState('');
    const [id, setID] = useState(null);

  return(
    <div className="addrecipe">
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
              <button onClick={() => setData(data)}>Update</button>
        </form>
    </div>
  )
}