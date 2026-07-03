import './App.css';
import pic from './assets/pic.jpg'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import mail from './assets/mail.png'
import { useState } from 'react';
import calendar from './assets/calendar.gif';
import mesa from './assets/mesa-posts.png';

function App() {
  /** for creating the tabs
   * from this video: https://www.youtube.com/watch?v=C2Hgh_GNxQ0
   */

  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState(1)

  return (
    <>
    <div className="card-container" style={{padding: '10px'}}>
      <div className="tabs">
        <button className={active === 1 ? "active-tab" : ""} onClick={() => setActive(1)}>About Me</button>
        <button className={active === 2 ? "active-tab" : ""} onClick={() => setActive(2)}>Social Media</button>
        <button className={active === 3 ? "active-tab" : ""} onClick={() => setActive(3)}>Web Design</button>
      </div>
      <div id="front-card" className={active === 1 ? "show-content" : "content"}>
        <div className="top-text">
          <p style={{fontWeight: '700px'}}>Welcome to my Portfolio ☺︎</p>
        </div>
        <div className="card-contents">
          <div className="text">
                <p style={{textDecoration:'underline'}}>ABOUT ME</p>
                <p>Hi I'm Hanna!<br/>I'm a Senior Computer Science student at the University of Delaware with a concentration in Human-Computer Interaction and minoring in Advertising and Interactive Media.</p>
                <p>I love history, film, literature, and all forms of art, but especially when get to learn about different cultures.</p>
          </div>
          <div className="pic">
            <img className="profile-pic" alt="pic of me!" src={pic}></img>
          </div>
        </div>
        <div className="top-text">
          <p style={{fontWeight: '700px'}}>Let's Keep in Touch!</p>
          <p style={{fontSize: '20px'}}>Feel free to reach out if you have any questions, share film/book recommendations or just want to connect!</p>
            <ul className="links" style={{justifyContent: 'center'}}>
                <li> <a href="https://www.github.com/hannageb"><img alt="github logo" src={github}></img></a></li>
                <li> <a href="https://www.linkedin.com/in/hannagebrel"><img alt="linkedin logo" src={linkedin}></img></a></li>
                <li> <a href="mailto:gebrelhanna112@gmail.com"><img alt="mail icon" src={mail}></img></a></li>
              </ul>
        </div>
      </div> 
     <div id="design-card" className={active === 2 ? "show-content" : "content"}>
        <p style={{justifySelf: 'center', fontWeight: '700px'}}>DESIGN</p>
        <div className="card-contents">
          <div className="toggle">
            <div className="section">
              <p>experience</p></div>
                  <div className="inner-section">
                    <div className="inner-section-text">
                      <p>A mobile app helping people achieve gender-affirming vocal goals</p>
                      <p>Skills: React, TypeScript, Figma, User Research Methods</p>
                    </div>
                  </div>
            <div className="section">
              <p>projects</p> </div>
                  <><div className="inner-section">
                    <a href="https://hannageb.github.io/portfolio/">portfolio</a></div>
                      <><div className="inner-section"></div>
                        <div className="inner-section-text">
                          <p>This portfolio was created to showcase my skillset and previous/ongoing projects!</p>
                          <p>Skills: React, JavaScript, CSS, Figma</p>
                        </div></>
                    <div className="inner-section">
                      <a href="https://hannageb.github.io/starterhelpi/">career helpi</a></div>
                        <div className="inner-section-text">
                          <p>Created for an Intro to SWE course, this career helper takes users' answers from a basic or detailed questionaire and generates possible career options through OpenAI's API</p>
                          <p>Skills: React, TypeScript, OpenAI, Agile, Wireframing, UX</p>
                        </div>
                    <div className="inner-section">
                    <a href="https://hannageb.github.io/mia-egypt/">redesigning the MIA website</a></div>
                        <div className="inner-section-text">
                          <p>Redesigning the website for the Museum of Islamic Art in Cairo, Egypt</p>
                          <p>Skills: React, TypeScript, Figma</p>
                        </div>
                      </>
          </div>
          </div>
        </div>
        <div id="web-development-card" className={active === 3 ? "show-content" : "content"}>
            <p style={{ justifySelf: 'center', fontWeight: '700', textDecoration: 'underline'}}>WEB DEVELOPMENT</p>
            <div className="card-contents">
                <ul className="cards">
                    <li><img src={calendar} alt="cairo calendar" style={{ width: '335px', height: '450px' }} /></li>
                    <li><img src={mesa} alt="mesa posts" style={{ width: '450px', height: '450px' }} /></li>
                </ul>
            </div>
      </div>
      </div>
    </>

  );
}
export default App;