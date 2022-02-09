import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup'
import Signin from './components/Signin';

function App() {
  return (
      <Router>
          <Routes>
          <Route exact path="/" element={<Signup/>}/>
              <Route exact path="/signin" element={<Signin/>}/>
              <Route exact path="/home" element={<Home/>}/>
          </Routes>
      </Router>


  );
}

export default App;




























// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Signin from './components/Signin';
// import Profile from './components/Profile';

// function App() {
//   const token = localStorage.getItem('accessToken');

//   if(!token) {
//     return (
//       <div className="wrapper">
//       <BrowserRouter>
//         <Routes>
          
//           <Route exact path="/" element={<Signin/>}/>
          
//         </Routes>
//       </BrowserRouter>
//     </div>


//     )
    
    
    
//   }

//   return (
//     <div className="wrapper">
//       <BrowserRouter>
//         <Routes>
          
//           <Route exact path="/profile" element={<Profile/>}/>
          
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
