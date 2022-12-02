import React, { useContext, useEffect } from "react";
import Links from "./Links";
import { userContext, UserContextType } from "../context/UserContext";
import { getItem } from "../helpers/localStorage";
import useCheckPath from "../hooks/useCheckPath";
import GZBank from "../images/GZBank.png";

const Header = () => {
 const { user, saveUserData } = useContext(userContext) as UserContextType;
 const {
  path: { login, signin },
 } = useCheckPath();
 
 useEffect(() => {
  const localStorageUser = getItem("user");
  if (localStorageUser) {
   const { id, username, accountId } = localStorageUser;
   saveUserData(id, username, accountId);
  }
 }, []);

 return (
  <header
   className="
      bg-black
      w-full
      h-28
      flex
      flex-col
      items-center
      justify-evenly
      gap-2
    "
  >
   {login || signin ? (
    <div className="flex items-center gap-2">
     <h1 className="text-white text-lg font-bold">Seja bem-vindo ao GZBank</h1>
     <img className="h-[50px]" src={GZBank} alt="Logo GZBank"/>
    </div>
   ) : (
    <>
     <span className="text-white font-semibold mt-1">Olá {user.username}</span>
     <div className="flex gap-4">
      <Links />
     </div>
    </>
   )}
  </header>
 );
};

export default Header;
