import { JSX, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import Header from '@src/components/Header/Header'
import Footer from '@src/components/Footer/Footer'

function App(): JSX.Element {
  const [ darkMode, setDarkMode ] = useState(false);
  const [ flickerlessMode, setFlickerlessMode ] = useState(true);
  
  function toggleMode(mode: string) {
    switch(mode) {
      case "darkMode":
        setDarkMode(prevMode => !prevMode);
        break;
      case "flickerlessMode":
        setFlickerlessMode(prevMode => !prevMode);
        break;
    }
  }

  const background = darkMode ? "background--dark" : "background";
  const crt = flickerlessMode ? "no-crt" : "crt";

  return (
    <div className={`${crt} ${background}`}>
      <Header 
        darkMode={darkMode}
        flickerlessMode={flickerlessMode} 
        toggleMode={toggleMode}
      />
      <main className="app">
        <Outlet context={darkMode} />
      </main>
      <Footer />
    </div>
  )
}

export default App
