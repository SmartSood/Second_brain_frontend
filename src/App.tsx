import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './componets/ui/Buttons'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant='primary' text='Add Content' size='md'startIcon={<PlusIcon size='md' />}  onClick={() => setCount((count) => count + 1)} />
      <Button variant='secondary' text='Share' size='md' startIcon={<ShareIcon size='md' />} onClick={() => setCount((count) => count + 1)} />
      <Button variant='primary' text='Share' size='sm' startIcon={<ShareIcon size='sm' />} endIcon={<PlusIcon size='sm' />} onClick={() => setCount((count) => count + 1)} />
    
    </>
  )
}

export default App
