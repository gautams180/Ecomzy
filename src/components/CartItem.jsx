import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch} from 'react-redux';
import {toast} from 'react-hot-toast';
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
     dispatch(remove(item.id));
     toast.error("Item Removed");
  }

  return (
    <div>

      <div className="h-full px-10 py-5 flex gap-10 justify-between border-b-2 border-b-black">

        <div className="h-[180px] min-w-[140px] flex justify-center items-center">
          <img src={item.image} className="h-full " />
        </div>

        <div className="flex flex-col ">
          <h1 className="font-semibold tracking-wide">{item.title}</h1><br/>
          <h1 className="text-sm">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1><br/>
          <div className="flex justify-between">
            <p className="font-bold text-green-600">${item.price}</p>
            <div
            onClick={removeFromCart} 
            className="flex justify-center items-center h-[30px] w-[30px] bg-red-300 rounded-full text-red-800"><MdDelete /></div>
          </div>
          
        </div>

      </div>

    </div>
  );
};

export default CartItem;
