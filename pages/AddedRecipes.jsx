import React, {useState, useEffect} from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import AddRecipePage from './AddedRecipePage';


export default function AddedRecipes(){
  const [apiData, setApiData] = useState([]);

  const onDelete = (id) => {
    axios.delete(`http://localhost:3000/recipes/${id}`)
         .then(() => {
             setApiData(apiData.filter(recipe => recipe.id !== id));
         })
         .catch((error) => console.error('Error deleting recipe:', error));
};


  useEffect(() => {
    axios.get(`http://localhost:3000/recipes`)
        .then((response) => {
            console.log(response)
           setApiData(response.data);
        })
}, [])
    return(
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Recipe Name</Table.HeaderCell>
                        <Table.HeaderCell>Ingredients</Table.HeaderCell>
                        <Table.HeaderCell>Instructions</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Preparation Time</Table.HeaderCell>
                        <Table.HeaderCell>Cooking Time</Table.HeaderCell>
                        <Table.HeaderCell>Servings</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => (
                        <Table.Row key={data.id}>
                            <Table.Cell>{data.recipeName}</Table.Cell>
                            <Table.Cell>{data.Ingredients}</Table.Cell>
                            <Table.Cell>{data.instructions}</Table.Cell>
                            <Table.Cell>{data.category}</Table.Cell>
                            <Table.Cell>{data.preparationTime}</Table.Cell>
                            <Table.Cell>{data.cookingTime}</Table.Cell>
                            <Table.Cell>{data.servings}</Table.Cell>
                            <Table.Cell>
                                <Link to='/Update'>
                                    <Button>Update</Button>
                                </Link>
                                <Button color='red' onClick={() => onDelete(data.id)}>
                                    Delete
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}





{/* <Table.Body>
  {apiData.map((data) => {
     return (
       <><Table.Row>
         <Table.Cell>{data.recipeName}</Table.Cell>
         <Table.Cell>{data.Ingredients}</Table.Cell>
         <Table.Cell>{data.instructions}</Table.Cell>
         <Table.Cell>{data.category}</Table.Cell>
         <Table.Cell>{data.preparationTime}</Table.Cell>
         <Table.Cell>{data.cookingTime}</Table.Cell>
         <Table.Cell>{data.servings}</Table.Cell>
         <Link to='/Update'>
           <Table.Cell>
             <Button>Update</Button>
           </Table.Cell>
         </Link>
       </Table.Row><Button onClick={() => onDelete(data.id)}>Delete</Button></>
   )})}
</Table.Body> */}