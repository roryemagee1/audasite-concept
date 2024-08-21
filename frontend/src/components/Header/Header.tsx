import { JSX } from 'react';
import './Header.css';

import Toggler from '@src/components/Toggler/Toggler';

interface IHeader {
  darkMode: boolean;
  flickerlessMode: boolean;
  toggleMode: (mode: string) => void;
}

export default function Header({ darkMode, flickerlessMode, toggleMode }: IHeader): JSX.Element {
  const mode = darkMode ? "dark" : "";
  
  return (
    <header className={`audasite-header ${mode}`}>
      <div className="toggle-stack">
        <Toggler 
          optionOne="LIGHT" 
          optionTwo="DARK"
          mode="darkMode"
          modeState={darkMode}
          toggleMode={toggleMode}
        />
        <Toggler 
          optionOne="FLICKER" 
          optionTwo="FLICKERLESS"
          mode="flickerlessMode"
          modeState={flickerlessMode}
          toggleMode={toggleMode}
        />
      </div>
    </header>
  )
}