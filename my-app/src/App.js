import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

function App() {
  return (
  <>
     <Navbar title="TextFun" aboutTextFun="About Us"/> 
     <div className="container " my-3>
     <TextForm heading="Enter the text here"/>
     </div>
    
  </>
  );
}

export default App;
