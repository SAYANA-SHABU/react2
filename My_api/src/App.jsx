import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Usertable from './components/Usertable'
import { Link, Route, Routes } from 'react-router-dom'
import Newtable from './components/Newtable'
import Listmap from './components/Listmap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Routes>
      <Route path='/t1' element={<Usertable/> }/>
      <Route path='/t2' element={<Newtable/> }/>
      <Route path='/t3' element={<Listmap/> }/>
     </Routes>
      
     

    </>
  )
}

export default App
