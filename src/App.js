import './App.css';
import pic from './assets/pic.jpg'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import mail from './assets/mail.png'
import { useState } from 'react';
import { isSoundEnabled, setSoundEnabled, useSound } from 'react-sounds';
import {NavLink} from "react-router-dom";
import Experience from './experience';
import Design from './design';

function App() {
  const { play } = useSound('ui/button_hard');
  /** this toggles the text for each section
   * there are three separate states so that each text only shows at one time
   **/
  const [showFirst, setFirst] = useState(false)
  const [showSecond, setSecond] = useState(false)
  const [showThird, setThird] = useState(false)

  const firstToggle = () => {
    play()
    setFirst(!showFirst)
  } 
  const secondToggle = () => {
    play()
    setSecond(!showSecond)
  } 
  const thirdToggle = () => {
    play()
    setThird(!showThird)
  }

  /** for creating the tabs
   * from this video: https://www.youtube.com/watch?v=C2Hgh_GNxQ0
   */
  const [active, setActive] = useState(1)
  
  function updateToggle(id){
    setActive(id);
  }

  const enabled = isSoundEnabled();
  function toggleSound(){
    setSoundEnabled(!enabled);
    console.log(`Sound is ${enabled}`);
  }
  
  return (
    <>
    <button id="sound-btn" onClick={() => toggleSound()}style={{display: 'flex', border: 'none', background: 'none', fontSize: '30px', cursor: "pointer"}}>{enabled ? "🔊" :"🔇"}</button>
    <div className="card-container">
      <ul className="tabs">
        <li className="tablinks"><NavLink to="portfolio/">About Me</NavLink></li>
        <li className="tablinks"><NavLink to="./experience">Experience & Projects</NavLink></li>
         <li className="tablinks"><NavLink to="./design">Graphic Design</NavLink></li>
      </ul>
      <div id="front-card" className={active === 1 ? "show-content" : "content"}>
        <div className="top-text">
          <p style={{fontWeight: '700px'}}>Welcome to my Portfolio!</p>
          <p style={{fontSize: '20px'}}>Click on the stars to get started</p>
        </div>
        <div className="card-contents">
          <div className="pic">
            <img className="profile-pic" alt="pic of me!" src={pic}></img>
            <p className="name">Hanna Gebrel</p>
            <ul className="links">
              <li> <a href="https://www.github.com/hannageb"><img alt="github logo" src={github}></img></a></li>
              <li> <a href="https://www.linkedin.com/in/hannagebrel"><img alt="linkedin logo" src={linkedin}></img></a></li>
              <li> <a href="mailto:gebrelhanna112@gmail.com"><img alt="mail icon" src={mail}></img></a></li>
            </ul>
          </div>
          <div className="toggle">
              <div className="section">
                <div className="star" onClick={() => firstToggle()}></div>
                <p>about me</p> </div>
                {showFirst && (
                  <div className="section-text"><p>Hi I'm Hanna! I'm an aspiring front-end developer and software engineer who looks to make the internet a better place for everyone </p></div>
                )}
            
              <div className="section">
                <div className="star" onClick={() => secondToggle()}></div>
                <p>education</p></div>
                {showSecond && (
                  <div className="section-text"><p>I am an honors student at the University of Delaware studying Computer Science with a concentration in Human-Computer Interaction and minors in Advertising and Interactive Media</p></div>
                )}
              
              <div className="section">
                <div className="star" onClick={() => thirdToggle()}></div>
                <p>other interests</p></div>
                {showThird && (
                  <div className="section-text"><p>I love Islamic history, Arab film, translated literature, and all forms of art</p></div>
                )
              }
              
          </div>
        </div>
        </div>  
        </div>     
    </>
  );
}
export default App;
