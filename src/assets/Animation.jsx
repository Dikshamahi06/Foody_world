import React, { useState, useEffect } from 'react';
import "./animation.css";


const background = [
  { img: "url('https://wallpapercave.com/wp/wp9506513.jpg')", text: "What would you like to eAT?" },
  { img: "url('https://t3.ftcdn.net/jpg/02/54/20/88/240_F_254208823_NXcV5RCcWJ1vgSuWjhPqIpPmqXIyBrDO.jpg')", text: "Hello world" }
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
        <h1 className="main_heading">Welcome to the food website</h1>
        <h2 className="home_text">{background[index].text}</h2>
      </div>
    </div>
  );
};
