import { useState } from 'react'
import './App.scss'
import Nav from './components/Nav/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './containers/Home/home'
import NotFound from './containers/NotFound/notfound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/home' element = {<Home />}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
