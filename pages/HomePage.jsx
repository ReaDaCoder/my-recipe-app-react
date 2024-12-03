import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { useNavigate, Link } from "react-router-dom";
import { GridColumn, Grid, Image, Button } from "semantic-ui-react";
import axios from "axios";

export default function HomePage() {
  const [apiData, setApiData] = useState([]);

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:3000/recipes/${id}`)
      .then(() => {
        setApiData(apiData.filter((recipe) => recipe.id !== id));
      })
      .catch((error) => console.error("Error deleting recipe:", error));
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/recipes`).then((response) => {
      console.log(response);
      setApiData(response.data);
    });
  }, []);
  return (
    <div className="homepage">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="recipe-log.PNG" width="45" />
        <Link className="navbar-brand" to="#">
          Recipe Nest
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AddRecipePage">
                Link
              </Link>
            </li>
          </ul>
          <ul>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Admin
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Profile
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
            <button>
              <Link className="nav-link" to="./AddRecipePage">
                Add Recipe
              </Link>
            </button>
          </form>
        </div>
      </nav>
      <h2>Recent Recipes</h2>
      <Grid container columns={3}>
        {apiData.map((data) => (
          <GridColumn key={data.id}>
            <Image src="/images/wireframe/image.png" alt="Recipe Image" />
            <div><strong>Recipe Name:</strong> {data.recipeName}</div>
            <div><strong>Ingredients:</strong> {data.Ingredients}</div>
            <div><strong>Instructions:</strong> {data.instructions}</div>
            <div><strong>Category:</strong> {data.category}</div>
            <div><strong>Preparation Time:</strong> {data.preparationTime}</div>
            <div><strong>Cooking Time:</strong> {data.cookingTime}</div>
            <div><strong>Servings:</strong> {data.servings}</div>
            <Link to="/Update">
              <Button primary>Update</Button>
            </Link>
            <Button color="red" onClick={() => onDelete(data.id)}>
              Delete
            </Button>
          </GridColumn>
        ))}
      </Grid>
    </div>
  );
}


