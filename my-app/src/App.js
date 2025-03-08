//import './App.css';
/* import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import AboutUs from './Components/AboutUs' */
/* import Textbuttons from './Components/Textbuttons'
 */
/* import Doubleform from './Components/Doubleform' */
/* import DynamicFormHandling from './Components/DynamicFormHandling' */

/* import React, { useState } from 'react'
import {UserContext} from './Components/UserContext';
import ApiUse from './Components/ApiUse'
 */

import Home from './Components/Home'
import Features from './Components/Features'
import Pricing from './Components/Pricing'
import Navbar1 from './Components/Navbar1'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar2 from "./Components/Navbar2";
function App() {

  /* const [user, setUser] = useState({name:'Arbind', age: '26'});
 */
  return (
  <>
      <Router>
        <Navbar2/>
        <Routes>
            <Route 
            path="/"
            element={
              <div className="container">
                <Navbar1/>
              </div>
            }
            >
            </Route>

            <Route 
              path="/Home"
              element={
                <div className="container">
                  <Home/>
                </div>
              }
            >
              
            </Route>
            <Route 
              path="/Features"
              element={
                <div className="container">
                  <Features/>
                </div>
              }
            >
            </Route>
            
            <Route 
              path="/Pricing"
              element={
                <div className="container">
                  <Pricing/>
                </div>
              }
            >
            </Route>
        </Routes>
      </Router>
  </>
  );

}

export default App;

/* <Router>
<Navbar title="TextFun" aboutTextFun="About Us" />

<Routes>
  <Route path="/Aboutus" element={
    <div className='container'>
        <AboutUs />
    </div>
    
  }
  />
  <Route
    path="/"
    element={
      <div className="container">
        <TextForm heading="Enter the text here" />
      </div>
    }
  />
</Routes>
</Router> */

/* <div className="container">
      <UserContext.Provider value={{user, setUser}}>
      <ApiUse/>
      </UserContext.Provider>
    </div>
 */
/* 
{  } 
    /*{} <div className="container">
      <Textbuttons/>
    </div> }*/
   /*{}  <div className="container my-3">
    <DynamicGreeting name= "Arbind Ji" />
    </div> }*/
    /*{} <div className="container">
      <Doubleform/>
    </div> }*/

   /*{  <div className="container">
      <DynamicFormHandling/>
    </div>
}*/

