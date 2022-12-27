
import {Navbar} from './components/Navbar.js'
import {Menu} from './components/Menu.js'
import {Login} from './components/Login.js'
import {Signup} from './components/Signup.js'
import {Home} from './components/Home.js'
import {Cheakout} from './components/Cheakout.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/cheakout' element={<Cheakout/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
