import React,{useState, useEffect} from 'react';
import './signup.css';
import FuseIcon from '../images/fuse.svg';
import axios from 'axios'


const Signup = () =>{


  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [city, setCity] = useState("")
  const [zipcode, setZipcode] = useState("")


 

  



  function seePassword() {
    var password = document.getElementById("passwordValue");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }

  function submitHandler(e){
    e.preventDefault()
    let details = {firstname, lastname, email, phone, password, city, zipcode}
    console.log(details)

    fetch("https://snapkaro.com/eazyrooms_staging/api/user_registeration",{
      method:"GET",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify()
    }).then((result)=>{
      console.log("Result", result)
    })

  }



  

  

  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 left p-3 h-100 bg-dark text-white">
          <h1 className="row justify-content-center ">Welcome to our community</h1>
         <p>Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today</p>
         <p>More than 17k people joined us, it's your turn</p>
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
                        <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} className="form-control p-2" placeholder="First Name" required/>
                      </div>

                      <div className="form-group p-2">
                        <label>Last Name*</label>
                        <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} className="form-control p-2" placeholder="Last Name" required/>
                      </div>

                      <div className="form-group p-2">
                        <label>Phone*</label>
                        <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control p-2" placeholder="Phone" required/>
                      </div>


                      <div className="form-group p-2">
                        <label>Email*</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control p-2" placeholder="Email" required/>
                      </div>

                      <div className="form-group p-2">
                        <label>Password*</label>
                        <div>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} maxLength="16" className="form-control p-2" id="passwordValue" placeholder="Password (max 16 characters)" required/>
                        <i className="eyeIcon fas fa-eye" id="toggleEye" onClick={seePassword}></i>

                        </div>
                      </div>

                      <div className="form-group p-2">
                        <label>City*</label>
                        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className="form-control p-2" placeholder="City" required/>
                      </div>

                      <div className="form-group p-2">
                        <label>Zipcode</label>
                        <input type="number" value={zipcode} onChange={(e)=>setZipcode(e.target.value)} className="form-control p-2" placeholder="Zipcode"/>
                      </div>

                      
                      <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input"/>
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