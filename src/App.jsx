
import './App.css'
import Navbar from "./components/Header/Navbar"
import Name from './components/Name/Name';
import { useState, useEffect } from "react";



function App() {
    const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
 

  return (
    
    
    <>


        {showIntro ? <Name /> : <Navbar />}
      
     
    
    
    </>
  )
}

export default App
