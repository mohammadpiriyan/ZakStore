import CardCart from "@/components/Card/cardCart";
import React, { useEffect, useState } from "react";
import { handeleAddTOCart, handeleEmptyCart } from "@/Redux/slices/cartSlices";
import { useDispatch, useSelector } from "react-redux";



const Cart = () => {
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const cart = useSelector((state) => state.cart.CartProducts);
  console.log(cart);
  const dispatch = useDispatch();

useEffect(() => {
  const mamad = cart.reduce((sum,item)=>sum+item.totalPriceproduct,0)
    setTotalPriceCart(mamad);
  
});

  return (
    <div className="pt-16 bg-meMain flex" dir="rtl">
      <div className="w-9/12 p-4 flex flex-col gap-4">
        {cart.map((item) => {
          // setTotalPriceCart((prev)=>prev + item.totalPriceproduct);
          return <CardCart key={item._id} item={item} />;
        })}
      </div>
      <div className="w-3/12 p-4 ">
        <div className="bg-white p-4 rounded-xl flex flex-col items-center gap-4">
          <div className="flex justify-between items-center w-full">
            <p className="text-sm text-meHalfBlack">مجموع خرید شما:</p>
            <p className="text-sm text-meHalfBlack">
              تومان <span>{totalPriceCart}</span>
            </p>
          </div>
          <button className="w-11/12 text-sm bg-red-600 text-white p-3 rounded-md">
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
