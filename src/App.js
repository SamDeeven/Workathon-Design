import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Signup from './components/Signup'
import Signin from './components/Signin';

function App() {
  return (
      <Router>
          <Routes>
                {/* <Route exact path="/" element={<Home/>}/> */}
              <Route exact path="/signup" element={<Signup/>}/>
              <Route exact path="/signin" element={<Signin/>}/>


          </Routes>
      </Router>


  );
}

export default App;
