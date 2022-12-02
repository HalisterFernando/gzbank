import React from "react";
import { GiCoffeeCup } from "react-icons/gi";

const PageFooter = () => {
 return (
  <footer className="bg-black p-3 text-white">
   <div className="text-sm text-center relative">
    Desenvolvido por Halister Fernando dos Santos utilizando TypeScript, React,
    TailwindCSS, NodeJS, Sequelize e várias canecas de café{" "}
    <i className="text-lg text-ng-green absolute ml-2">
     <GiCoffeeCup />
    </i>
   </div>  
  </footer>
 );
};

export default PageFooter;
