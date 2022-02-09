import React,{useState, useEffect, useRef} from 'react';
import './signup.css';
import FuseIcon from '../images/fuse.svg';
import swal from 'sweetalert';

import {useNavigate} from 'react-router-dom'



const Signup = () =>{
  const userRef = useRef();

  const navigate = useNavigate();


  const [user_firstname, setUser_firstname] = useState("")
  const [user_lastname, setUser_lastname] = useState("")
  const [user_email, setUser_email] = useState("")
  const [user_phone, setUser_phone] = useState("")
  const [user_password, setUser_password] = useState("")
  const [user_city, setUser_city] = useState("")
  const [user_zipcode, setUser_zipcode] = useState("")


 // For focussing the first input box after the page render
useEffect(()=>{
  userRef.current.focus()
},[])
 

  // function to see the invisible password
  function seePassword() {
    var password = document.getElementById("passwordValue");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }



async function register(credentials) {
  return await fetch('https://snapkaro.com/eazyrooms_staging/api/user_registeration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(res => res.json())
    .then(data =>{

      if(data){
          swal("Sign up Success")
          console.log("Success")
          navigate('/signin')
      }
      else{
          console.error("Error")

      }
  
  }).catch(err=>{
      console.log(err)
  })

 }


 async function submitHandler(e){
  e.preventDefault()
  let details = {user_email, user_password, user_firstname,user_lastname,user_phone,user_city, user_zipcode,user_email,user_password}
  console.log(details)

    const response = await register({
      user_firstname,
        user_lastname,
        user_phone,
        user_city,
        user_zipcode,
        user_email,
        user_password
    });

}

  return(
    <div className="container-fluid">
      <div className="row">
      <div className="col-lg-8 col-md-4 left p-3 h-100 bg-dark text-white d-sm-none d-md-block d-none d-sm-block d-md-none d-lg-block">
          <h1 className="welcomeText row">Welcome to <br/> our community</h1>
         <p className="fuseText">Fuse helps developers to build organized and well coded <br/>dashboards full of beautiful and rich modules. Join us and start <br/> building your application today</p>
         
         <div className="images">
           <div className='lastDiv col'>
         <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{"width":"40px","borderRadius":"50%"}}/>
         <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{"width":"40px","borderRadius":"50%"}}/>
         <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{"width":"40px","borderRadius":"50%"}}/>
         <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{"width":"40px","borderRadius":"50%"}}/>
         <p>More than 17k people joined us, it's your turn</p>

         </div>
        
         </div>
         
          </div>


        <div className="col-lg-4 p-3 d">


                    <form className='formBox row' onSubmit={submitHandler}>
                    <div className="form-group p-2">
                        <img className="fuseicon" src={FuseIcon} alt='FuseIcon'/>
                      </div>

                      <div className="form-group p-2">
                          <h2>Sign up</h2>

                          <p>Already have an account? <a href="/signin">Sign in</a></p>
                        </div>

                      <div className="form-group p-2">
                        <label>First Name*</label>
                        <input ref={userRef} type="text" value={user_firstname} onChange={(e)=>setUser_firstname(e.target.value)} className="form-control p-2" placeholder="First Name" required/>
                      </div>

                      <div className="form-group p-2">
                        <label>Last Name*</label>
                        <input type="text" value={user_lastname} onChange={(e)=>setUser_lastname(e.target.value)} className="form-control p-2" placeholder="Last Name" required/>
                      </div>

                      <div className="form-group p-2">
                        <label>Phone*</label>
                        <input type="number" value={user_phone} onChange={(e)=>setUser_phone(e.target.value)} className="form-control p-2" placeholder="Phone" required/>
                      </div>


                      <div className="form-group p-2">
                        <label>Email*</label>
                        <input type="email" value={user_email} onChange={(e)=>setUser_email(e.target.value)} className="form-control p-2" placeholder="Email" required/>
                      </div>

                      <div className="form-group p-2">
                        <label>Password*</label>
                        <div className="passwordBox">
                        <input type="password" value={user_password} onChange={(e)=>setUser_password(e.target.value)} maxLength="16" className="form-control p-2" id="passwordValue" placeholder="Password" required/>
                        <i className="eyeIcon fas fa-eye" id="toggleEye" onClick={seePassword}></i>

                        </div>
                      </div>

                      <div className="form-group p-2">
                        <label>City*</label>
                        <input type="text" value={user_city} onChange={(e)=>setUser_city(e.target.value)} className="form-control p-2" placeholder="City" required/>
                      </div>

                      <div className="form-group p-2">
                        <label>Zipcode</label>
                        <input type="number" value={user_zipcode} onChange={(e)=>setUser_zipcode(e.target.value)} className="form-control p-2" placeholder="Zipcode"/>
                      </div>

                      
                      <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" required/>
                        <label className="form-check-label">I agree the <a href='/terms-of-service'>Terms of Service</a> and <a href='/privacy-policy'>Privacy Policy</a></label>
                      </div>

                        <button type="submit" className="button btn btn-primary p-2 rounded-pill">Create your free account</button>
                    </form>

          </div>

      </div>
    
    </div>

  )

}

export default Signup;
























