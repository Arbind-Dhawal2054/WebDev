//import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import AboutUs from './Components/AboutUs'
/* import Textbuttons from './Components/Textbuttons'
 */
/* import Doubleform from './Components/Doubleform' */
/* import DynamicFormHandling from './Components/DynamicFormHandling' */

/* import React, { useState } from 'react'
import {UserContext} from './Components/UserContext';
import ApiUse from './Components/ApiUse'
 */
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {

  /* const [user, setUser] = useState({name:'Arbind', age: '26'});
 */
  return (
  <>
    <Router>
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
    </Router>
  </>
  );

}

export default App;

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

