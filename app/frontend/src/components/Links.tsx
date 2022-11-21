import React, { useContext } from 'react';
import { BiTransfer } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import useCheckPath from '../hooks/useCheckPath';
import { useNavigate } from 'react-router-dom';
// import { userContext, UserContextType } from '../context/UserContext';


function Links() {
  const {path: {transaction, balance, transfer}} = useCheckPath();
  // const {user} = useContext(userContext) as UserContextType
  const history = useNavigate()
  
  
  return (
    <>       
    <span className="flex flex-col items-center mb-2 gap-1" onClick={() => history(`/transaction`)}>
      <i className={ transaction ? "icon-pink" : "icon-green" }
      >
        <BiTransfer />
      </i>
      <span className={ transaction ? "link-pink" : "link-white" }>Transações</span>
    </span>
    
    <span className="flex flex-col items-center mb-2 gap-1" onClick={() => history(`/balance`)}>
      <i className={ balance ? "icon-pink" : "icon-green" }
      >
        <MdAttachMoney />
      </i>
      <span className={ balance ? "link-pink" : "link-white" }>
          Saldo Atual
      </span>
    </span>
    <span className="flex flex-col items-center mb-2 gap-1" onClick={() => history(`/transfer`)}>
      <i className={ transfer ? "icon-pink" : "icon-green" }
      >
        <FaMoneyBillWave />
      </i>
      <span className={ transfer ? "link-pink" : "link-white" }>
          Transferir
      </span>
    </span>
    <span className="flex flex-col items-center mb-2 gap-1" >
      <i className="icon-red"
      >
        <BiLogOut />
      </i>
      <span className="link-white">
          Sair
      </span>
    </span>
    </>
  )
}

export default Links