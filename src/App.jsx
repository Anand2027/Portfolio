import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/Landing'
// import Landing02 from './components/landing02'
import Landing02 from './components/landing02'
// import Landing03 from './components/landing03'
import Landing03 from './components/Landing03'
import Cards from './components/Cards'
import Landing04 from './components/Landing04'
import Landing05 from './components/Landing05'
import Landing06 from './components/Landing06'
import Landing07 from './components/Landing07'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Landing/>
      <Landing02/>
      <Cards/>
      <Landing03/>
      <Landing04/>
      <Landing05/>
      <Landing06/>
      <Landing07/>
    </>
  )
}

export default App
