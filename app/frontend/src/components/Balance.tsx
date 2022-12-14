import React, { useEffect, useContext } from "react";
import MoneyBag from "../images/money-bag.png";
import { getItem } from "../helpers/localStorage";
import replaceDotToComa from "../helpers/replace";
import useAxios from "../hooks/useAxios";
import { userContext, UserContextType } from "../context/UserContext";

function Balance() {
 const { user, userAmount, saveUserAmount } = useContext(
  userContext
 ) as UserContextType;

const { setToken, requestData } = useAxios()

 useEffect(() => {
  const getBalance = async () => {
   const token = getItem("token");
   setToken(token);
   const {
    balance: { balance },
   } = await requestData(`/balance/${user.accountId}`);
   saveUserAmount(balance);
  };
  getBalance();
 }, []);

 return (
  <div
   className="
      h-full 
      flex 
      justify-center 
      items-center 
      bg-black 
      border-y-2 
      border-white
    "
  >
   <div
    className="
      w-3/4 
      h-3/4                
      flex 
      flex-col 
      items-center
      justify-around      
    "
   >
    <h2 className="text-white font-semibold text-4xl">Saldo atual</h2>
    <img src={MoneyBag} alt="saco de dinheiro" />
    <p className="font-semibold text-white text-4xl">
     R$: {replaceDotToComa(userAmount.amount)}
    </p>
   </div>
  </div>
 );
}

export default Balance;
