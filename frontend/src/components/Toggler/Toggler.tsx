import { JSX } from 'react';
import './Toggler.css';

interface IToggler {
  optionOne: string;
  optionTwo: string;
  mode: string;
  modeState: boolean;
  toggleMode: (mode: string) => void;
}
export default function Toggler({ optionOne, optionTwo, mode, modeState, toggleMode }: IToggler): JSX.Element {
  const toggle = modeState ? "on" : "";
  
  return (
    <div className={`${toggle} toggler`}>
      <p className="toggler--left">{optionOne}</p>
      <div className="toggler--slider" onClick={() => toggleMode(mode)}>
        <div className="toggler--slider--circle"></div>
      </div>
      <p className="toggler--right">{optionTwo}</p>
    </div>
  )
}