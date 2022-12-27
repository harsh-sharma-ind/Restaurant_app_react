import React from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

import { useContext } from "react";


import Feeds from "../data/feeds.json";

import { FoodContext } from "./food-context.js";

export const Menu = () => {

  


  const { cartItems, modalClick, modalClose, modalState, total, addItem, removeItem, items } = useContext(FoodContext);



  return (
    <div className="main">
      <br />

      <button onClick={modalClick} id="myBtn" className="btn">Bill</button>

      <div id="myModal" className="modal" style={{display: modalState}}>
        <div className="modal-content">
          <span onClick={modalClose}  className="close">&times;</span>
          <p>Cart Items</p>
          <ul>
            {Object.keys(cartItems).map((item, index)=> (
              <li key={index}>{item} : {cartItems[item]} </li>
            ))}
          </ul>
          <p> Total : {total}</p>
          <button className="btn">
            <Link to={'/cheakout'}> Cheakout</Link>
          </button>
        </div>

      </div>






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
                {cartItems[items[index]['name']]&& <>({cartItems[items[index]['name']]})</>}
              </div>
            </div>
          </li>
        ))}

        
      </ul> 
    </div>
  );
};
