import { createContext, useState } from "react";
import Feeds from "../data/feeds.json";


export const FoodContext = createContext(null);

export const FoodContextProvider = (props) => {

  const items = Feeds;
  const [cartItems, setCartItems] = useState({});
  const [modalState, setModalState] = useState("none");
  const [total, setTotal] = useState(0);
  const [totalcnt, settotalcnt] = useState(0);
  let sum;

  const addItem = (id) => {
    
    if(cartItems[items[id]['name']] ) {
      
      cartItems[items[id]['name']] += 1;
      setCartItems(cartItems);
      
    }
    else {
      cartItems[items[id]['name']] = 1;
      setCartItems(cartItems);
    }
    settotalcnt(totalcnt+1);
    sum = total;
    sum += parseInt(items[id]['price']);
    setTotal(sum);
  }

  const removeItem = (id) => {
    
    if(cartItems[items[id]['name']] ) {
      
      cartItems[items[id]['name']] -= 1;
      setCartItems(cartItems);
    }
    else {
      
    }
    if(totalcnt > 0) settotalcnt(totalcnt-1);
    sum = total;
    sum -= parseInt(items[id]['price']);
    setTotal(sum);
  }

  const modalClick = () => {
    
    setModalState("block");
    
  }

  const modalClose = () => {
    setModalState("none");
  }

  const contextValue = {
    addItem,
    removeItem,
    modalClick,
    modalClose,
    cartItems,
    total,
    modalState,
    items,
    totalcnt
  };

  return (
    <FoodContext.Provider value={contextValue}>
      {props.children}
    </FoodContext.Provider>
  );
};