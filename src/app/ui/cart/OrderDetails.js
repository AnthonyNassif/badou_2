'use client'

import Link from "next/link"
import { useContext } from "react"
import { StoreContext } from "@/app/context"


const OrderDetails = () => {


    const {cartData}= useContext(StoreContext);

        const itemsToBuy = cartData.filter((item) => {
            return item.type === 'Buy'
        });

        const priceForBuy = itemsToBuy.reduce(
            (accumulator,item) => accumulator+item.sellPrice,0
        );

        const deliveryCharge = 15;

  return (

    <div className="w-full text-amber-700 font-bold bg-white rounded-lg px-8 pt-6 pb-8 mb-4  " >
        <h2 className="text-2xl pb-4 underline underline-offset-8  " > Order Details :</h2>
        {
            (itemsToBuy.length  > 0) ? (<><ul className="pb-4 text-md">


          <li>Buying {itemsToBuy.length} book(s) for <strong>{priceForBuy} $ </strong></li>
          
          <li className="pt-2">Delivery Charge: <strong>{deliveryCharge} $</strong></li>
        </ul>
        <div className="border"></div>
        <div className="pt-4">
          <p className="text-xl">Total Amount to Pay</p> 
          <p className="text-center p-4 text-5xl font-semibold">{ priceForBuy + deliveryCharge} $ </p>
        </div></>) : 
        (
          <div className="flex flex-col items-center p-2">
            <span className="text-red-500 font-bold text-xl">No Items are in Cart!</span><br/>

            <Link
              href="/store"
              className="bg-amber-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >Go To Store</Link>
          </div>)
        }





    </div>
 

    )
}

export default OrderDetails