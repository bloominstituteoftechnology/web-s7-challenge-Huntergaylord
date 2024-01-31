import React from 'react'
import Home from './Home'
import Form from './Form'
import { NavLink, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div id="app">
      <nav>
          {/* NavLinks here */}
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/order">
          Order
        </NavLink>
      </nav>
      {/* Routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Form />} />
      </Routes>
      
    </div>
  )
}

export default App
