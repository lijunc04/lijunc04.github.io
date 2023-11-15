import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/nav'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home/home'
import NotFound from './components/NotFound/notfound'
import Contacts from './components/Contacts/contacts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/contacts' element = {<Contacts/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
