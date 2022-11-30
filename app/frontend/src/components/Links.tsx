import React, { useContext } from 'react';
import { BiTransfer } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import useCheckPath from '../hooks/useCheckPath';
import { useNavigate } from 'react-router-dom';
import { userContext, UserContextType } from '../context/UserContext';
import { removeItem } from '../helpers/localStorage';


function Links() {
  const {path: {transaction, balance, transfer}} = useCheckPath();
  const {user} = useContext(userContext) as UserContextType
  const history = useNavigate()

  const logOut = () => {
    removeItem('token')
    removeItem('user')
    removeItem('transactions')
    history('/login')
  }
  
  return (
    <>       
    <span className="flex flex-col items-center mb-2 gap-1" onClick={() => history(`/transaction/history/${user.accountId}`)}>
      <i className={ transaction ? "icon-pink" : "icon-green" }
      >
        <BiTransfer />
      </i>
      <span className={ transaction ? "link-pink" : "link-white" }>Transações</span>
    </span>
    
    <span className="flex flex-col items-center mb-2 gap-1" onClick={() => history(`/balance/${user.accountId}`)}>
      <i className={ balance ? "icon-pink" : "icon-green" }
      >
        <MdAttachMoney />
      </i>
      <span className={ balance ? "link-pink" : "link-white" }>
          Saldo Atual
      </span>
    </span>
    <span className="flex flex-col items-center mb-2 gap-1" onClick={() => history(`/transfer/${user.accountId}`)}>
      <i className={ transfer ? "icon-pink" : "icon-green" }
      >
        <FaMoneyBillWave />
      </i>
      <span className={ transfer ? "link-pink" : "link-white" }>
          Transferir
      </span>
    </span>
    <span className="flex flex-col items-center mb-2 gap-1" onClick={() => logOut()}>
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