import { useState } from 'react';
import Dashboard from './dasboard/dashboard';
import Menu from './ui/components/menu';

function App () {
  const [s, sets] = useState();
  
  return (
    <main className='w-full h-screen grid grid-cols-2'>
        <Menu />
        <Dashboard />
    </main>
  )
}

export default App
