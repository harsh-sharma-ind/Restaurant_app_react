import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

export const Login = () => {
  return (
    
    
    <form>
        
 
        <div className="container">
          <h1>LOGIN</h1>
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" />
 
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" />
 
            <button type="submit" className='lg'>
              <Link to={'/Home'}>
                Login
              </Link>
            </button>
            
        </div>
 
        <div className="container" >
            <button type="button" className="cancelbtn"><Link to={'/'} >
                 SignUp
            </Link>
            </button>
            
        </div>
    </form>
  )
}

