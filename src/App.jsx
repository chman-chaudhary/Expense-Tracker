import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {

  const [expenses, setExpenses] = useState([]);

  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prev) => [...prev, { id: uuidv4(), amount, type }]);
    setAmount(0);
    setType("");
  }

  const removeExpense = (id) => {
    let filtered = expenses.filter((expense) => expense.id != id);
    setExpenses(filtered);
  }

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold'>EXPENSE TRACKER</h1>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <input type="text" placeholder='Type' className='border-2 border-white bg-black mt-5 w-[315px] h-10 p-2' onChange={e => setType(e.target.value)} value={type} required />
        <input type='number' placeholder='Amount' className='border-2 border-white bg-black my-5 w-[315px] h-10 p-2' onChange={e => setAmount(Math.abs(e.target.value))} value={amount} required />
        <button type='submit' className='bg-blue-500 py-2 font-bold'>ADD EXPENSE</button>
      </form>
      <div className='my-5'>
        {expenses.map((expense) => {
          return <div key={expense.id} className='flex justify-between items-center w-[315px]'>
            <h3 className='text-xl font-semibold'>{expense.type}</h3>
            <h3 className='text-xl font-semibold'>{expense.amount}</h3>
            <button onClick={() => removeExpense(expense.id)}>❌</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
