import React from 'react';
import './Bestmeals.css';
import { Header } from './Header';

export const Bestmeals = () => {
  const vegetarianItems = [
    { src: 'https://www.recipetineats.com/tachyon/2017/07/Vegetable-Curry.jpg', alt: 'Veg Curry' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzJMFAH3tVYc5X0TZTZuWEH9LRdUBuhjIrQ&s', alt: 'Paneer Tikka' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BVeza3pA8aX8LKwAC6J1gxTz-j-oBDq3TQ&s', alt: 'Veg Biryani' },
    {src:'https://i.pinimg.com/736x/80/3f/f0/803ff029867e021b7b4193f58e1c4ad1.jpg',alt:'Chhole bhature'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_rGA_pC3z7FGLEt3SsvDGhZtxlmWVneJHw&s' ,alt:'aloo Gobi'},
    {src:'https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg',alt:'Rajwa chawal'},
    {src:'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/03/kadhi-recipe-kadhi-pakora.jpg',alt:'Kadhi Pakoda'},
    {src:'https://www.umami.recipes/api/image/recipes/1TD1h1D2VYSjkcuKMTt5/images/4WvNQbRJBaxQXK0ohLbzhz?w=3840&q=75',alt:'Dal Makhani'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvfsFw6JBQ9y1vxzn4p5v_1TTgBFBY2EDPQ&s',alt:'Palak Paneer'},
    {src:'https://biancazapatka.com/wp-content/uploads/2019/07/aloo-paratha-indian-potato-stuffed-flatbread-recipe-vegan.jpg',alt:'Stuffed Paratha (Aloo, Gobi, Paneer)'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLi7oNUX5EqQePcYjX-7KPV0w3niXxjffFA&s',alt:'Baingan Bharta'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJbruKCN9mGuTZoQCHOyHD3qwlaqCreZvnQ&s',alt:'Matar Paneer'},
  ];

  const nonVegetarianItems = [
    { src: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Chicken-Curry-Recipe.jpg', alt: 'Chicken Curry' },
    { src: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg', alt: 'Mutton Biryani' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1tS2lgiRfF1z9ILBTR5brstHcIeKTNDijw&s', alt: 'Fish Fry' },
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkchsX_ZF0YqunzrBg8ccqL2ki_UefvLMpBw&s',alt:'Egg Curry'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuKHYH0uW7QYT4kNQ4kJIsIVPTbNf5SlVBQ&s',alt:'Keema Matar'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdiPM2OrxRXjTI2Q7UOnDGz5cZ-fTtkrHRg&s',alt:'Chicken Do Pyaza'},
    {src:'https://www.hungrylankan.com/wp-content/uploads/2022/12/dosa-and-sambar-1-500x500.jpg',alt:'Tandoori Chicken'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLNiplIDCZzQU5ncPPh1wOw4EoxstRFStZnw&s',alt:'Mutton Rogan Josh'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ94dKPbMxsYt7WNq944qGv2BvG7issKPmlw&s',alt:'Seekh Kebabs'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0x5rvfOHwGWOsp2WuKBJQr2O64hSV_Uu_A&s',alt:'Handi Chicken'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxX3rUpvLyg8oY6WXwPCm9hze1Yh-no3YtTQ&s',alt:'Chicken Changezi'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_LImNWFGJA6BPezf-fZ6taT-CnQ9_ThreQ&s',alt:'Tangdi Kabab'},

  ];
  const SouthindianItems=[
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPhZFMnmnCwPOJBM0jUUcr2qLF1q10-o3RQ&s',alt:'Masala Dosa'},
    {src:'https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg',alt:'Idli with Sambar '},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwB2EYW8LctftE8SZB-2pTpAiU98V_5xm4w&s',alt:'Medu Vada'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly0RP4grQDmSNR2eetx19Y_VDJ7btjuSUcw&s',alt:'Upma'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNs_k00kLfeTMdEf2QXEcLI61RKma4zrghg&s',alt:'Rava Dosa'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgS07BfBYlgmToA90x3dMl4Z5r5lrg1W7dzA&s',alt:'Curd Rice '},
    {src:'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/lemon-rice-recipe.webp',alt:'Lemon Rice / Tamarind Rice / Tomato Rice '},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoujsag0SASwlwn-Iv7ORNjnzSbojk_zTq3Q&s',alt:'Bisi Bele Bath '},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-DGiQgcJZlou0ycilr2L_DqNYsbPUj-6RA&s',alt:'Kerala Parotta with Veg Kurma'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzetr9HC_9ufwV71zRXv5kUtcYC7RBDhw7tQ&s',alt:'Kerala Fish Curry with Rice / Appam'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTaI4MsT_ep9wKEmmvB_eUMtmRy9MlGXmVw&s',alt:'Rava Kesari'},
    {src:'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/mysore-pak.jpg',alt:'Mysore Pak'},

  ]
  const northindianitems=[
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXHt9SSmRvUegOecqrijsLkaYxq7-8anW2Q&s',alt:'Malai Kofta'},
    {src:'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/hara-bhara-kabab.jpg',alt:'Hara Bhara Kabab '},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVslDxA1SpxunPEh9unSJYUgMoOXb4_aZTKg&s',alt:'Aloo Tikki Chaat'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuRlDGN1NZlQsQk-Mcc6mS-HZ2EWZvww6ag&s',alt:'Stuffed Mushrooms'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtxlO3zLZsnwwBuA9irjUYqJlXeVb1VXONw&s',alt:'Channa Samosa'},
    {src:'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/12/jeera-rice-recipe.webp',alt:'Plain Basmati Rice / Jeera Rice'},
    {src:'https://images.slurrp.com/prodrich_article/vwnmr2nj7zi.webp?impolicy=slurrp-20210601&width=880&height=500',alt:'Jalebi / Malpua / Imarti'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMf84KscCNyi4MlWIDvt6ft88QyKVreAvROA&s',alt:'Kheer / Phirni / Seviyan '},
    {src:'https://www.archanaskitchen.com//images/archanaskitchen/Indian_Vegetables_Gravy/Paneer_Butter_Masala_Recipe.jpg',alt:'Paneer Butter Masala with kulcha'},
    {src:'https://content.jdmagicbox.com/comp/ludhiana/k3/0161px161.x161.190613121111.q3k3/catalogue/sardar-ji-amritsari-naan-and-nutri-kulcha-rahon-road-ludhiana-fast-food-sj3a8q5kod.jpg',alt:'amritsari naan with chole'},
    {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgC_QypEU609La-3m66clnzkSbwpXJfvPn4uePeuFrpUO6gogHTUHGnhXu6CO6Phx43U&usqp=CAU',alt:' Mix Veg Curry'},
    {src:'https://www.cookwithmanali.com/wp-content/uploads/2022/04/Boondi-Raita.jpg',alt:'Boondi Raita or Mixed Raita'},




  ]

  return (
    <>
      <Header />
      <div className="meal-container">
        <div className="left-bestmeals">
          <h2>Vegetarian</h2>
          <div className="meal-list">
            {vegetarianItems.map((item, index) => (
              <div key={index} className="meal-item">
                <img src={item.src} alt={item.alt} className="meal-image" />
                <p>{item.alt}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="right-bestmeals">
          <h2>Non-Vegetarian</h2>
          <div className="meal-list">
            {nonVegetarianItems.map((item, index) => (
              <div key={index} className="meal-item">
                <img src={item.src} alt={item.alt} className="meal-image" />
                <p>{item.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br />
      <div className="meal-container1">
        <div className="bottom-leftmeals">
          <h2>South Indian Food</h2>
          <div className="meal-list1">
          {SouthindianItems.map((item, index) => (
              <div key={index} className="meal-item">
                <img src={item.src} alt={item.alt} className="meal-image" />
                <p>{item.alt}</p>
              </div>
            ))} 
          </div>
          
        </div>
        <br /><br /><br /><br /><br />
        <div className="bottom-rightmeals">
          <h2>North Indian Food</h2>
          <div className="meal-list1">
          {northindianitems.map((item,index)=>(
            <div key={index} className="meal-item">
            <img src={item.src} alt={item.alt} className="meal-image" />
            <p>{item.alt}</p>
          </div>

          ))}
          </div>
        </div>
        
        

      </div>
    </>
  );
};
