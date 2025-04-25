import './App.css'
import React, { useState } from 'react'
import Homepage from './Pages/Homepage/Homepage'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import About from './Pages/About/About'
import Preview from './Pages/Preview/Preview'
import {Routes, Route} from 'react-router'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        {/* <Route 
          path="/signup" 
          element={
            isAuthenticated ? 
              <Navigate to="/" /> : 
              <SignupPage setIsAuthenticated={setIsAuthenticated} />
          } 
        />
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
              <Navigate to="/" /> : 
              <LoginPage setIsAuthenticated={setIsAuthenticated} />
          } 
        /> */}
        <Route path='about' element={<About/>}/>
        <Route path='preview' element={<Preview/>}/>
      </Routes>
    </div>
  )
}

export default App
