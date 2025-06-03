import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './assets/Navbar';
import { Animation } from './assets/Animation';
import { Cards } from './assets/Cards';
import { Bestmeals } from './assets/Bestmeals';
import Login from './assets/Login';
import Signup from './assets/Signup';
import { Recipes } from './assets/Recipes';


import './App.css';
const Home = () => (
  <>
    <Animation />
    <br /><br /><br /><br />
  </>
);

const Gallery = () => (
  <>
    <Cards src="https://i.gifer.com/11o9.gif" alt="online1" width="700" height="600" onclick={handleerror} />
    <Cards src="https://i.pinimg.com/originals/65/ed/e5/65ede51b5fd0c065d954bfd8ca8eab80.gif" alt="online2" width="700" height="600" />
    <Cards src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa244azZ3ZWhhcHo1b3E5NDNvYmZiYm5laDF4M3Y5bzBwMHI4b3hhcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ucXbjTmJPwKUE/giphy.gif" alt="onlinw3" width="700" height="600"/>
    <Cards src="https://media.giphy.com/media/mRVz4HPxR7Fe6ac0mK/giphy.gif" alt="onlinw3" width="700" height="600"/>
    <Cards src="https://media.giphy.com/media/ovLuqYhDyldARSN3Uy/giphy.gif" alt="onlinw3" width="700" height="600"/>
    <Cards src="https://media.giphy.com/media/17fWNt4GSIK6HI73Pa/giphy.gif" alt="onlinw3" width="700" height="600"/>
    <Cards src="https://media.giphy.com/media/g0LNPgMdIoKU5gdwgY/giphy.gif" alt="onlinw3" width="700" height="600"/>
    <Cards src="https://media.giphy.com/media/u2SkBAtW5vZgQLFDmZ/giphy.gif" alt="onlinw3" width="700" height="600"/>
  </>
);


const Gallery2 = () => (
  <>
  
  <Bestmeals
  vegSrc="veg-meal.jpg"
  vegAlt="Veg Meal"
  vegPrice="₹199"
  nonVegSrc="nonveg-meal.jpg"
  nonVegAlt="Non-Veg Meal"
  nonVegPrice="₹249"
  chineseSrc="chinese-meal.jpg"
  chineseAlt="chinese Meal"
  ChinesePrice="78"
/>

    
  </>
);
<Route path="/recipe" element={<Recipes />} />



const Loggedin = () => <Login />;
const handleerror=()=>{
  alert("sign in first");
}

function AppWrapper() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';;



  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery1" element={<Gallery2 />} />
        <Route path="/login" element={<Loggedin />} />
        <Route path="/recipe" element={<Recipes />} />
       
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
     

      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  
  
  );
}

export default App;
