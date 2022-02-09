import React,{useState,useEffect,useRef} from 'react';
import './signin.css';
import FuseIcon from '../images/fuse.svg';
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert';

const Signin = () =>{
  // for navigating to different routes, we use useNavigate
  const navigate = useNavigate();
  const userRef = useRef()

    const [user_email, setUser_email] = useState("")
    const [user_password, setUser_password] = useState("")

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


  // this handles the signin function.
  // assigning the content type as application/json
  //  converting the data into string
async function signinUser(credentials) {
  return await fetch('https://snapkaro.com/eazyrooms_staging/api/userlogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

// After clicking the button, the form will be submitted. This function is to handle that part.
 async function submitHandler(e){
    e.preventDefault()
    let details = {user_email, user_password }
    console.log(details)

      const response = await signinUser({
        user_email,
        user_password
      });
      // checking if the response has a key with the name user-data, then navigating to home page
      if ("user_data" in response) {
        swal("Sign in Success")
        
        console.log("Success")
        navigate("/home");
 
      } else {
        console.error("Error");
      }

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


                    <form onSubmit={submitHandler} className='formBox row'>
                    <div className="form-group p-2">
                        <img className="fuseicon" src={FuseIcon} alt='FuseIcon'/>
                      </div>

                      <div className="form-group p-2">
                          <h2>Sign in</h2>

                          <p>Don't have an account? <a href="/signup">Sign up</a></p>
                        </div>

                          
                      <div className="form-group p-2">
                        <label>Email*</label>
                        <input ref = {userRef}type="email" value={user_email} onChange={(e)=>setUser_email(e.target.value)} className="form-control p-2" placeholder="Email" required/>
                      </div>

                      <div className="form-group p-2">
                        <label>Password*</label>
                        <div>
                        <input type="password" value={user_password} onChange={(e)=>setUser_password(e.target.value)} maxLength="16" className="form-control p-2" id="passwordValue" placeholder="Password" required/>
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
































// import {useNavigate} from 'react-router-dom'

// import React, { useState } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import swal from 'sweetalert';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     backgroundImage: 'url(https://source.unsplash.com/random)',
//     backgroundSize: 'cover',
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%',
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// async function loginUser(credentials) {
//   return await fetch('https://www.mecallapi.com/api/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }

// export default function Signin() {

//     const navigate = useNavigate();

//   const classes = useStyles();
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const response = await loginUser({
//       username,
//       password
//     });
//     if ('user' in response) {
//       swal("Success", response.message, "success", {
//         buttons: false,
//         timer: 2000,
//       })
//       navigate("/profile");
//     } else {
//       swal("Failed", response.message, "error");
//     }
//   }

//   return (
//     <Grid container className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} md={7} className={classes.image} />
//       <Grid item xs={12} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} noValidate onSubmit={handleSubmit}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               // id="email"
//               onChange={e => setUserName(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               // id="password"
//               type="password"
//               onChange={e => setPassword(e.target.value)}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }


