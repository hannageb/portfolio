import './App.css';
import pic from './assets/pic.jpg'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import mail from './assets/mail.png'
import { useState } from 'react';
import { isSoundEnabled, setSoundEnabled, useSound } from 'react-sounds';

function App() {
  const { play } = useSound('ui/button_hard');
  /** this toggles the text for each section
   * there are three separate states so that each text only shows at one time
   **/
  const [showFirst, setFirst] = useState(false)
  const [showSecond, setSecond] = useState(false)
  const [showThird, setThird] = useState(false)
  const [showFourth, setFourth] = useState(false)
  const [showFifth, setFifth] = useState(false)
  const [showSixth, setSixth] = useState(false)

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
  const fourthToggle = () => {
    play()
    setFourth(!showFourth)
  }
  const fifthToggle = () =>{
    play()
    setFifth(!showFifth)
  }

  const sixthToggle = () =>{
    play()
    setSixth(!showSixth)
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
      <div className="tabs">
        <button className="tablinks" onClick={()=> updateToggle(1)}>About Me</button>
        <button className="tablinks" onClick={()=> updateToggle(2)}>Experience & Projects</button>
      </div>
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
      
      <div id="projects-card" className={active === 2 ? "show-content" : "content"}>
        <p style={{justifySelf: 'center', fontWeight: '700px'}}>Experience & Projects</p>
        <div className="card-contents">
          <div className="toggle">
            <div className="section">
              <div className="star" onClick={() => sixthToggle()}></div>
              <p>experience</p></div>
              {showSixth && (
                <><div className="inner-section">
                    <div className="star" onClick={() => secondToggle()}></div>
                     <p>Vocal Goals</p></div>
                    {showSecond && (
                      <div className="inner-section">
                        <div className="inner-section-text"
                        ><p>A mobile app helping people achieve gender-affirming vocal goals</p>
                        <p>Skills: React, TypeScript, Figma, User Research Methods</p>
                        </div>
                      </div>
                      )}
                  </>
              )}
            <div className="section">
              <div className="star" onClick={() => firstToggle()}></div>
              <p>projects</p> </div>
              {showFirst && (
                  <><div className="inner-section">
                    <div className="star" onClick={() => secondToggle()}></div>
                    <a href="https://hannageb.github.io/portfolio/">portfolio</a></div>
                    {showSecond && (
                      <><div className="inner-section"></div>
                        <div className="inner-section-text">
                          <p>This portfolio was created to showcase my skillset and previous/ongoing projects!</p>
                          <p>Skills: React, JavaScript, CSS, Figma</p>
                        </div></>
                      )}
                    <div className="inner-section">
                    <div className="star" onClick={() => thirdToggle()}></div>
                      <a href="https://hannageb.github.io/starterhelpi/">career helpi</a></div>
                      {showThird && (
                        <div className="inner-section-text">
                          <p>Created for an Intro to SWE course, this career helper takes users' answers from a basic or detailed questionaire and generates possible career options through OpenAI's API</p>
                          <p>Skills: React, TypeScript, OpenAI, Agile, Wireframing, UX</p>
                        </div>
                      )}
                    <div className="inner-section">
                    <div className="star" onClick={() => fourthToggle()}></div>
                    <a href="https://hannageb.github.io/mia-egypt/">redesigning the MIA website</a></div>
                      {showFourth && (
                        <div className="inner-section-text">
                          <p>Redesigning the website for the Museum of Islamic Art in Cairo, Egypt</p>
                          <p>Skills: React, TypeScript, Figma</p>
                        </div>
                      )}
                    </>
                )}
              <div className="section">
              <div className="star" onClick={() => fifthToggle()}></div>
              <p>extracurriculars</p></div>
              {showFifth && (
                  <div className="section-text"><p>I have been on the executive board of 5 organizations at UDel: Muslim Student Association (MSA), Middle Eastern Student Association (MESA), Egyptian Cultural Club (ECC), FALASTIN, and ACM-W.</p>
                  <p> At these organizations, I have run the Social Media pages, taken notes for meethings, created infographics & a newsletter, as well as taken care of finances. </p></div>
              )}
          </div>  
          </div>  
          </div>   
        </div>     
    </>
  );
}
export default App;
