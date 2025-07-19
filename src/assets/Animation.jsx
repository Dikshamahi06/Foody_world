import React, { useState, useEffect } from 'react';

import "./animation.css";


const background = [
  { img: "url('https://png.pngtree.com/background/20210710/original/pngtree-fast-food-light-yellow-hamburger-coke-chips-hot-coffee-tomato-sauce-picture-image_981064.jpg')", text: "What would you like to eAT?" },
  { img: "url('https://wallpapercave.com/wp/wp4289092.jpg')", text: "🍕 Delicious Recipes, Delivered Fresh!" },
  {img:"url('https://images7.alphacoders.com/928/928507.jpg')",text:"Delight in Every Dish 🍛💖"},
  {img: "url('https://wallpapertag.com/wallpaper/full/4/d/7/317105-gorgerous-food-background-2990x1918-for-mobile-hd.jpg')", text: "🍔 SAVOR THE FLAVOR” 🍲"},
  {img: "url('https://images5.alphacoders.com/380/thumb-1920-380966.jpg')", text: "🍕 Delicious Recipes, Delivered Fresh!" },
];

export const Animation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex((previousIndex) => (previousIndex + 1) % background.length);
    }, 4000);
    return () => clearTimeout(interval);
  }, [index]);

  return (
    <div
      className="home_container"
      style={{ backgroundImage: background[index].img }}
    >
      <div className="overlay" />
      <div className="text_content">
        <h1 className="main_heading">Welcome to Foodie's Corner 🍽️</h1>
        <h2 className="home_text">{background[index].text}</h2>
         <div className="search_box">
        <input className="search_input" type="text" placeholder="Search your favorite dish..." />
        <button className='search_btn'>Search</button>

      </div>
      </div>
     
    </div>
  );
};
