import React from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

import { useContext } from "react";


import Feeds from "../data/feeds.json";

import { FoodContext } from "./food-context.js";

export const Menu = () => {

  


  const { cartItems,  addItem, removeItem, items } = useContext(FoodContext);



  return (
    <div className="main">
      <br />

      






      <ul className="cards">
        {Feeds.map((feed, index) => (
          <li className="cards_item" key={index}>
            <div className="card">
              <div className="card_image">
                <img src= {`../assets/${feed.image}`} alt="" />
              </div>
              <div className="card_content">
                <h2 className="card_title">{feed.name}</h2>
                <p className="card_text">Price : {feed.price}</p>
                
                <button className="btn card_btn" onClick={() => addItem(index)}>
                  +
                  </button>
                <button className="btn card_btn" onClick={() => removeItem(index)} style={{backgroundColor: cartItems[items[index]['name']] ? "DeepPink" : "grey"}}>
                  -
                  </button>
                
              </div>
            </div>
          </li>
        ))}

        
      </ul> 
    </div>
  );
};
