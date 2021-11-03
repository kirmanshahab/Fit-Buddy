import '../css/stylesheet.css';
import React, {useState} from 'react'
import logo from '../img/logo-for-index.png';
import {useHistory} from 'react-router-dom';

function Login() {

    const history = useHistory();
  

    return (
        <div>
            <div className="container-login">
                <div id="logo">
                    <img src={logo}/>
    
                </div>
            </div>
            <div className="signin-signup">
                <form action="#" className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>
                    
                    <a onClick={()=>history.push('/main')} className="btn1 solid" id="btn-a">Login</a>
                    <p className="social-text">Or Sign in with social platforms</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
       
        
    
    )
}

export default Login;
