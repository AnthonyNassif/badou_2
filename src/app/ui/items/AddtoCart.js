'use client'

import { useContext } from "react";
import { StoreContext } from "@/app/context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const AddtoCart = ({item}) => {

    const {cartData,setCartData}=useContext(StoreContext);

    const handleCart = (e, reason ) => {

        e.preventDefault();
        console.log(item);
        const newData = {...item, type: reason};
        setCartData([...cartData, newData]);
        console.log(cartData);

        toast.success(`Added ${item.title} to the Cart`, {
            autoClose: 1500,
           // position: toast.POSITION.TOP_RIGHT
        });
    }


    return(

        <div className="flex justify-around  mt-5 border-t-2 p-1 " >

           <button className="bg-amber-700 hover:bg-amber-100 text-amber-200 font-bold  py-2 px-4 rounded-full" 
                onClick = {(event) => handleCart(event, 'Buy')}
           >
             
           <ShoppingCartIcon className="w-5 mr-0.5 inline"/>
             Add to cart 
           </button>

        </div>
    )


}

export default AddtoCart