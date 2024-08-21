import { JSX, useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import './HomePage.css'

import audasite from '@src/assets/audasite/GlitchA.png';
import audasiteDark from '@src/assets/audasite/GlitchA-synth2.png';

export default function HomePage(): JSX.Element {
  const [ message, setMessage ] = useState<string>("");

  useEffect(() => {
    async function testFunc() {
      const res = await fetch('/api');
      const data = await res.json();
      setMessage(data?.message || "Error");
    }
    testFunc();
    console.log(message);
  }, [message])

  const darkMode = useOutletContext();
  const logo = darkMode ? audasiteDark : audasite;

  return (
    <>
      <div className="logo-container">
        <img className="crt-image logo" src={logo} alt="Audasitē logo" />
      </div>
      <div className="company-statement">
        <p className="company-caption-one"><strong>(noun)</strong>[aw-<strong>das</strong>-i-tee]</p>
        <p className="company-caption-two">: <strong>stand-out</strong> web design & development </p>
      </div>
    </>
  )
}