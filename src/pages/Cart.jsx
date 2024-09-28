import CartItem from "../components/CartItem";
import {useSelector} from 'react-redux';
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; 

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0 ) );
  },[cart])

  return(
    <div>
      {
        cart.length > 0 ?
        (<div
        className="max-w-6xl flex gap-10 mx-auto mt-24 mb-36"
        >

          <div className="max-w-[60%] ">
            {
              cart.map((item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />
              })
            }
          </div>

          <div className="flex flex-col justify-between">

            <div className="fixed top-36">
              <div className="text-lg font-semibold text-green-800">Your Cart</div>
              <div className="text-4xl font-bold tracking-wide text-green-700">SUMMARY</div>
              <p className="mt-3">
                <span className="font-semibold">Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="fixed bottom-10">
              <p className="font-semibold tracking-wider">Total Amount: <span className="font-bold">${totalAmount.toFixed(2)}</span> </p>
              <button className="w-[23rem] h-[2.5rem] rounded-md text-white font-semibold bg-green-600 mt-4">
                Checkout Now
              </button>
            </div>

          </div>

        </div>) :
        (<div className="h-screen w-screen flex flex-col justify-center items-center font-bold">

          <h1>Cart Empty</h1>
          <NavLink to="/">
            <button className="w-[10rem] text-white mt-2 bg-green-600 hover:bg-green-700 transition duration-300 rounded-md">
              Shop Now
            </button>
          </NavLink>

        </div>)
      }
    </div>
  );
};

export default Cart;
