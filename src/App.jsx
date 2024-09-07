import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProtectedRoutes from '../pages/ProtectedRoutes';
import AddRecipePage from '../pages/AddRecipePage';
import AddRecipe from '../pages/AddedRecipes';
import Update from '../pages/Update';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route path="/RegistrationPage" element={<RegistrationPage/>} />
          <Route element={<ProtectedRoutes/>}/>
          <Route element={<HomePage/>} path="/HomePage"/>
          <Route element={<AddRecipePage/>} path="/AddRecipePage"/>
          <Route element={<AddRecipe/>} path="/AddedRecipe"/>
          <Route element={<Update/>} path="/Update"/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
