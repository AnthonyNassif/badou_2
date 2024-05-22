//import CartItems from "@/app/ui/cart/CartItems";
import Payment from "@/app/ui/cart/Payment";
import OrderDetails from "@/app/ui/cart/OrderDetails";

const CartPage = () => {

    return (

        <div className="p-2 flex flex-col w-full">
            <h2 className="text-3xl text-amber-700 ">Welcome </h2>
            <p className="text-xl text-zinc-600 pt-2"> Thanks for thrifting. Please complete the checkout process : </p>
            
            <div className="flex flex-wrap xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center pt-10 ">
            
            <OrderDetails />
            <Payment />
            
            </div>

        </div>


    )




}

export default CartPage;