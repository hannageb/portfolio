import './App.css';
import { useState } from 'react';
import AboutMe from './components/AboutMe';
import Design from './components/Design';
import WebDevelopment from './components/WebDevelopment';

function App() {
  /** for creating the tabs
   * from this video: https://www.youtube.com/watch?v=C2Hgh_GNxQ0
   */
  const [active, setActive] = useState(1)

  return (
    <div className="card-container" style={{padding: '10px'}}>
      <div className="tabs">
        <button className={active === 1 ? "active-tab" : ""} onClick={() => setActive(1)}>About Me</button>
        <button className={active === 2 ? "active-tab" : ""} onClick={() => setActive(2)}>Web Dev</button>
        <button className={active === 3 ? "active-tab" : ""} onClick={() => setActive(3)}>Design</button>
      </div>
      {/* FIRST CARD **/}
      {active === 1 && <AboutMe />}
      {/* WEB DEV CARD **/}
      {active === 2 && <WebDevelopment />}
      {/* DESIGN CARD **/}
      {active === 3 && <Design />}
    </div>
  );
}
export default App;