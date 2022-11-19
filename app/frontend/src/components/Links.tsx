import React from 'react';
import { BiTransfer } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';

function Links() {
  const balancePath = window.location.href.includes('balance');
  const transactionPath = window.location.href.includes('transactions');
  const transferPath = window.location.href.includes('transfer');

  return (
    <>
    <span className="flex flex-col items-center mb-2 gap-1">
      <i className={ transactionPath ? "icon-pink" : "icon-green"}
      >
        <BiTransfer />
      </i>
      <span className="text-sm text-white">Transações</span>
    </span>
    <span className="flex flex-col items-center mb-2 gap-1">
      <i className={ balancePath ? "icon-pink" : "icon-green"}
      >
        <MdAttachMoney />
      </i>
      <span className={ balancePath ? "link-pink" : "link-white" }>
          Saldo Atual
      </span>
    </span>
    <span className="flex flex-col items-center mb-2 gap-1">
      <i className={ transferPath ? "icon-pink" : "icon-green"}
      >
        <FaMoneyBillWave />
      </i>
      <span className={
        transferPath ? 
        "text-sm text-ng-pink font-medium" : 
        "text-sm text-white font-medium" }>
          Transferir
      </span>
    </span>
    </>
  )
}

export default Links