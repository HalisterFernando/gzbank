import React, { useEffect, useState, useContext, ChangeEvent } from "react";
import { userContext, UserContextType } from "../context/UserContext";
import { setItem, getItem } from "../helpers/localStorage";
import { requestData, setParam } from "../helpers/requests";

type Transactions = {
 id: number;
 debitedAccountId: number;
 creditedAccountId: number;
 value: string;
 createdAt: string;
};

const Transaction = () => {
 const { user } = useContext(userContext) as UserContextType;
 const [transactions, setTransactions] = useState<Transactions[]>([]);
 const [transactionType, setTransactionType] = useState({
  all: true,
  cashIn: false,
  cashOut: false,
 });

 const [date, setDate] = useState<string>();

 useEffect(() => {
  const localStorageTransactions = getItem("transactions");
  if (localStorageTransactions) {
   setTransactions(localStorageTransactions);
  }
 }, []);

 useEffect(() => {
  const getTransactions = async () => {
   setParam(user.id);
   const response = await requestData(`/transaction/history/${user.id}`);
   setItem("transactions", response);
   setTransactions(response);
  };

  getTransactions();
 }, []);

 const transactionOptions = {
  "cash-in": () => {
   setTransactionType({
    ...transactionType,
    all: false,
    cashIn: true,
    cashOut: false,
   });
  },
  "cash-out": () => {
   setTransactionType({
    ...transactionType,
    all: false,
    cashIn: false,
    cashOut: true,
   });
  },
  all: () => {
   setTransactionType({
    ...transactionType,
    all: true,
    cashIn: false,
    cashOut: false,
   });
  },
 };

 const handleChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
  transactionOptions[value]();

 const handleDate = ({ target: { value } }: ChangeEvent<HTMLDataElement>) => {
  const newData = value.replace(/-/g, "/").split("/").reverse().join("/");
  setDate(newData);
 };

 const transactionsFilter = () => {
  const { cashIn, cashOut } = transactionType;

  let allTransactions = [...transactions];

  if (cashIn) {
   allTransactions = allTransactions.filter(
    ({ debitedAccountId }) => debitedAccountId !== user.accountId
   );
  }

  if (cashOut) {
   allTransactions = allTransactions.filter(
    ({ debitedAccountId }) => debitedAccountId === user.accountId
   );
  }

  if (date) {
   allTransactions = allTransactions.filter(({ createdAt }) =>
    createdAt.includes(date)
   );
  }

  return allTransactions.reverse();
 };

 const renderTransactions = () => {
  const allTransactions = transactionsFilter();

  return allTransactions.map((transaction) => (
   <div
    key={transaction.id}
    className="p-2 m-4 border border-white rounded-md "
   >
    <div className="px-2 flex flex-col text-white">
     {transaction.creditedAccountId === user.accountId ? (
      <span>Valor recebido R$: {transaction.value}</span>
     ) : (
      <span>Valor transferido R$: {transaction.value}</span>
     )}
     <span>Transação feita em: {transaction.createdAt}</span>
    </div>
   </div>
  ));
 };

 return (
  <div
   className="
      h-full 
      flex 
      justify-center 
      items-start 
      bg-black 
      border-y-2 
      border-white overflow-y-auto
      "
  >
   <div
    className="                                        
      w-3/4
      flex           
      flex-col 
      items-center
      justify-around
      gap-2      
    "
   >
    <h2 className="text-center text-white text-2xl font-semibold mt-2">
     Filtrar por
    </h2>

    <label className="text-white" htmlFor="">
     Tipo de transação
    </label>
    <select
     name="type"
     id=""
     className="mb-2 rounded-md"
     onChange={handleChange}
    >
     <option value="all">Todas as transições</option>
     <option value="cash-in">Recebeu dinheiro</option>
     <option value="cash-out">Transferiu dinheiro</option>
    </select>
    <label className="text-white" htmlFor="">
     Data da transação
    </label>
    <input type="date" className="rounded-md w-[205px]" onChange={handleDate} />

    {renderTransactions()}
   </div>
  </div>
 );
};

export default Transaction;
