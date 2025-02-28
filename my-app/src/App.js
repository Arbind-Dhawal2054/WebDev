//import './App.css';
//import Navbar from './Components/Navbar'
//import TextForm from './Components/TextForm'
/* import Textbuttons from './Components/Textbuttons'
 */
/* import Doubleform from './Components/Doubleform' */
import DynamicFormHandling from './Components/DynamicFormHandling'

function App() {
  return (
  <>
    {/*  <Navbar title="TextFun" aboutTextFun="About Us" /> 
     <div className="container ">
     <TextForm heading="Enter the text here"/>
     </div> */}
    {/* <div className="container">
      <Textbuttons/>
    </div> */}
   {/*  <div className="container my-3">
    <DynamicGreeting name= "Arbind Ji" />
    </div> */}
    {/* <div className="container">
      <Doubleform/>
    </div> */}

    <div className="container">
      <DynamicFormHandling/>
    </div>



  </>
  );
}

export default App;
