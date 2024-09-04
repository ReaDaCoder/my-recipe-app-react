import React, {useState, useEffect} from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

export default function AddRecipePage(){

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/recipes`)
        .then((response) => {
            setApiData(response.data);
        })
}, [])

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

  const AddRecipe = (e) => {
    e.preventDefault();
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
            <button onClick={AddRecipe} type="submit">Add Recipe</button>
        </form>

        <Table.Body>
  {apiData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell>{data.recipeName}</Table.Cell>
           <Table.Cell>{data.Ingredients}</Table.Cell>
           <Table.Cell>{data.instructions}</Table.Cell>
           <Table.Cell>{data.category}</Table.Cell>
           <Table.Cell>{data.preparationTime}</Table.Cell>
           <Table.Cell>{data.cookingTime}</Table.Cell>
           <Table.Cell>{data.servings}</Table.Cell>
           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
        </Table.Row>
   )})}
</Table.Body>
    </div>
  )
}




/*import React, {useState} from 'react';
import axios from 'axios';

export default function AddRecipePage(){

  const AddRecipe =(event) =>{
    event.preventDefault()
    axios.post(`http://localhost:3000/recipes`, {
      recipeName,
      Ingredients,
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
    const [servings, setServings] = useState('');

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
            <button onClick={AddRecipe} type="submit">Add Recipe</button>
        </form>
    </div>
  )
}*/