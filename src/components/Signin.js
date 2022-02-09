import React from 'react';
import './signin.css';
import FuseIcon from '../images/fuse.svg';


const Signin = () =>{


  function seePassword() {
    var password = document.getElementById("passwordValue");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }





  

  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-md-4 left p-3 h-100 bg-dark text-white d-sm-none d-md-block d-none d-sm-block d-md-none d-lg-block">
          <h1 className="row justify-content-center">Welcome to our community</h1>
         <p>Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today</p>
         <p>More than 17k people joined us, it's your turn</p>
          </div>


        <div className="col-lg-4 p-3 d">


                    <form className='formBox row'>
                    <div className="form-group p-2">
                        <img className="fuseicon" src={FuseIcon} alt='FuseIcon'/>
                      </div>

                      <div className="form-group p-2">
                          <h2>Sign in</h2>

                          <p>Don't have an account? <a href="/signup">Sign up</a></p>
                        </div>

                      

           


                      <div className="form-group p-2">
                        <label>Email*</label>
                        <input type="email" className="form-control p-2" placeholder="Email"/>
                      </div>

                      <div className="form-group p-2">
                        <label>Password*</label>
                        <div>
                        <input type="password" maxLength="16" className="form-control p-2" id="passwordValue" placeholder="Password"/>
                        <i className="eyeIcon fas fa-eye" id="toggleEye" onClick={seePassword}></i>

                        </div>
                      </div>

                      
                      
                      <div className="row form-group p-2">
                        <p className='col form-check-label'><input type="checkbox" className="form-check-input"/>Remember me</p>
                        <p className='col'><a href='/forgot-password'>Forgot Password?</a></p>
                      </div>

                        <button type="submit" className="button btn btn-primary p-2 rounded-pill">Sign in</button>
                    
                    </form>
                    <hr/>


                    <div className='links p-2 '> 
                      
                      <p className='p-2 offset-lg-4'>Or continue with</p>
                      <div className="row bottomLinks offset-lg-2">
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                          <a><i className="linkBox fab fa-facebook-f"></i></a>

                        </div>

                        <div className=' col-lg-4 col-md-4 col-sm-12'>
                          <a><i className="linkBox fab fa-twitter"></i></a>
                          
                        </div>

                        <div className=' col-lg-4 col-md-4 col-sm-12'>
                          <a><i className="linkBox fab fa-github"></i></a>
                          
                        </div>

                      </div>
                      </div>





          </div>

      </div>
    </div>
    


  )






}

export default Signin;