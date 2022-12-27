import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import { useContext } from "react";
import { FoodContext } from "./food-context.js";

export const Navbar = () => {
  const { cartItems, modalClick, modalClose, modalState, total, totalcnt, addItem, removeItem, items } = useContext(FoodContext);

  return (
    <>
      <header>
        <Link to={"/"}>
          <img className="logo" src="../assets/restaurant_48px.svg" alt="" />
        </Link>

        <p>Food's Restaurant</p>

        {total > 0 && (
          <button
            className="cart"
            onClick={modalClick}
            style={{ backgroundColor: "blue", borderColor: "blue" }}
          >
            {" "}
            <ShoppingCart size={32} /> {totalcnt}
          </button>
        )}
      </header>

      <div id="myModal" className="modal" style={{ display: modalState }}>
        <div className="modal-content">
          
          <p>Cart Items</p>
          <ul>
            {Object.keys(cartItems).map((item, index) => (
              <li key={index}>
                {item} : {cartItems[item]}{" "}

                <button className="btn card_btn" onClick={() => addItem(index)}>
                  +
                  </button>
                <button className="btn card_btn" onClick={() => removeItem(index)} style={{backgroundColor: cartItems[items[index]['name']] ? "DeepPink" : "grey"}}>
                  -
                  </button>
              </li>
            ))}
          </ul>
          <p> Total (INR): {total}</p>
          <button className="btn" onClick={modalClose}>
            <Link to={"/cheakout"} className="cart">Save And Checkout</Link>
          </button>

          <button onClick={modalClose} className="btn cart">Close</button>
        </div>
      </div>
    </>
  );
};
