import React from 'react'

const Transaction = () => {
  return (
    <div className='min-h-[550px]'>
      <div className="mt-4">
         <h2 className='text-center'>Filtrar por</h2>
         <form action="" className='flex flex-col px-4 gap-2'>
          <label htmlFor="">Tipo de transação</label>
          
          <select name="" id="" className='mb-2 rounded-md'>
            <option>Recebeu dinheiro</option>
            <option>Transferiu dinheiro</option>
          </select>
          <label htmlFor=''>Data da transação</label>
          
          <input type="date" className='rounded-md' />
         </form>
      </div>
    </div>
  )
}

export default Transaction