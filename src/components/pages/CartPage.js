import React, { useEffect } from "react";
import { NavLink } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import ItemListsCards from "../cards/ItemListsCards";

const CartPage = () => {
  // subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((acc, curr) => {
      const price =
        curr?.card?.info?.defaultPrice ||
        curr?.dish?.info?.price ||
        curr?.card?.info?.price;

      return acc + (price / 100 || 0); // Divide by 100 if price is in paise, and handle potential undefined price
    }, 0);

    setTotalAmount(total);
  }, [cartItems]);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold ">-: Cart Items :-</h1>
      {cartItems.length > 0 ? (
        <div className="flex wrap justify-evenly">
          <div className="w-6/12  my-4  bg-gray-50 shadow-lg p-4 ">
            {cartItems.map((item) => (
              <ItemListsCards key={item?.card?.info?.id} resItem={item} />
            ))}
          </div>

          <div className="flex flex-col justify-between">
            <div className="mt-20">
              <p className="text-xl text-[#166534] uppercase font-[600]">
                Your Cart
              </p>
              <p className="text-5xl font-[600] text-[#15803d] uppercase mb-4">
                Summary
              </p>

              <p
                data-testid="totalItems"
                className="font-[600] text-xl text-slate-700"
              >
                Total Items:
                <span className="font-normal"> {cartItems.length}</span>
              </p>
            </div>

            <div className="mb-20">
              <p className="text-slate-700 text-xl font-[600] mb-5 ">
                Total Amount:
                <span className="font-bold ml-2 text-black">
                  ₹{totalAmount}
                </span>
              </p>
              <button
                className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
          border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in"
              >
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center m-4 ">
          <h1 className="font-[600] text-xl">Your Cart is empty!</h1>
          <NavLink to="/">
            <button
              className="mt-4 bg-[#16a34a] text-white text-md uppercase font-[600] py-2 px-5 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300"
            >
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default CartPage;
