import React, {useState, useEffect} from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
//import AddRecipePage from './AddedRecipePage';


export default function AddedRecipes(){
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/recipes`)
        .then((response) => {
            setApiData(response.data);
        })
}, [])
    return(
        <div>
            <Table.Body>
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
</Table.Body>
        </div>
    )
}