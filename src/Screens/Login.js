import React from 'react'
import './PageCSS/login.css'
import { FaGoogle } from "react-icons/fa";

const Login = () => {

  return (
    <>
    <div className='container text-light login rounded mt-5'>
        <div>
            <img src='https://www.kfcpakistan.com/static/media/login-animation.857cb4f842a7a27eed63.gif' />
        </div>
        <div className='second-log mt-5 mb-4'> 
            <h1>Welcome!</h1>
            <div className='input'>
                <p>Phone Number (3XXXXXXXXX)</p>
                <label>+92 | </label>
                <input type='phone' />
                <hr/>
                <p className='text-danger'>Number must be valid 10 digit</p>
            </div>
            <button className='btn btn-danger disabled centeredbtn'>LOGIN</button>

                <div className='bxbtn'>                    
                    <button className="btn btn-danger centeredbtn" type="button"><FaGoogle /> LOGIN WITH GOOGLE</button>
                </div>

        </div>
    </div>


    </>
  )
}

export default Login