import React, {
 useState,
 useEffect, 
 useContext,
 ChangeEvent
} from "react";

import MoneyTransfer from "../images/transfer.png";
import { userContext, UserContextType } from "../context/UserContext";
import { requestData, requestPost } from "../helpers/requests";
import { getItem } from "../helpers/localStorage";
import { setToken } from "../helpers/requests";
import { useFormik } from "formik";
import { transferSchema } from "../validations/yupSchemas";

type Account = {
 accountId: string;
 username: string;
};

function Transfer() {
 const { user, userAmount, saveUserAmount } = useContext(
  userContext
 ) as UserContextType;

 const [transfer, setTransfer] = useState({
  accountId: "",
  username: "",
 });

 const { username, accountId } = transfer;
 const [accounts, setAccounts] = useState<Account[]>([]);


 const [isDisabled, setIsDisabled] = useState(true);
 const [hidden, setHidden] = useState(true);

 const initialValues = {  
  amount: "",
 };

 const formik = useFormik({
  initialValues,
  validationSchema: transferSchema,
  onSubmit: async ({amount}) => {

   const threeSeconds = 3000;

   await requestPost("/transaction", {
    debitedAccountId: user.accountId,
    creditedAccountId: accountId,
    value: amount,
   });

   setHidden(false);

   setTimeout(() => {
    setHidden(true);
   }, threeSeconds);
  },
 });

 const amountProps = formik.getFieldProps("amount") 

 const validateAmount = () => {  
    const isAmountEnought = Number(userAmount.amount) >= Number(amountProps.value);  
    const isAmountValid = amountProps.value
   
  if (isAmountEnought && isAmountValid) {
   setIsDisabled(false);
  } else {
   setIsDisabled(true);
  }
 };

 const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTransfer({...transfer, [name]: value})
};

 useEffect(() => {
  validateAmount();
 }, [initialValues]);

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
 }, [hidden]);

 useEffect(() => {
  const getAccounts = async () => {
   const token = getItem("token");
   setToken(token);
   const allAccounts = await requestData(`/balance/transfer/${user.accountId}`);
   setAccounts(allAccounts);  
   setTransfer({
    ...transfer,
    accountId: allAccounts[0].accountId,
    username: allAccounts[0].username
   })
  };

  getAccounts();
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
   <form
    onSubmit={formik.handleSubmit}
    className="
        w-3/4
        h-full           
        flex 
        flex-col 
        items-center
        justify-evenly          
    "
   >
    <img className="w-28" src={MoneyTransfer} alt="transferência" />

    <label
     htmlFor="username"
     className="card-title text-white font-semibold text-xl"
    >
     Transferir para
    </label>
    <select
     id="username"      
     name="username"
     value={username}
     onChange={handleChange}
     className="
        select 
        select-bordered 
        rounded-md 
        w-full 
        max-w-xs
    "
    >
     {accounts.length &&
      accounts.map(({ accountId, username }) => (
       <option key={accountId} id={accountId} value={username}>
        {username}
       </option>
      ))}
    </select>

    <label
     htmlFor="ammount"
     className="
        card-title 
        text-white 
        font-semibold 
        text-xl
    "
    >
     Quantia
    </label>
    <input    
     id="amount"     
     {...amountProps}     
     className="rounded-md"
     type="number"
     placeholder="Escreva sem pontos ou vírgula"
    />
    {formik.touched.amount && formik.errors.amount ? (
      <div className="bg-ng-pink font-semibold rounded-md p-2 mb-4">
       {formik.errors.amount}
      </div>
     ) : null}

    <span className={hidden ? "hidden-transfer-alert" : "show-transfer-alert"}>
     Transferência realizada com sucesso!
    </span>
    <button
     type="submit"
     disabled={isDisabled}
     className={isDisabled ? "disable-green-btn" : "able-green-btn"}
    >
     OK
    </button>
   </form>
  </div>
 );
}

export default Transfer;
