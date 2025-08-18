import './App.css';
import pic from './assets/pic.jpg'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import mail from './assets/mail.png'
import { useState } from 'react';

function App() {
  /** this toggles the text for each section
   * the parameter would be "about", "edu", or "misc"
   **/
  const [showAbout, setAbout] = useState(false)
  const [showEducation, setEducation] = useState(false)
  const [showMisc, setMisc] = useState(false)

  const toggleAbout = () => {
    setAbout(!showAbout)
    setEducation(false);
    setMisc(false);
  } 
  const toggleEducation = () => {
    setEducation(!showEducation)
    setAbout(false);
    setMisc(false);
  } 
  const toggleMisc = () => {
    setMisc(!showMisc)
    setAbout(false);
    setEducation(false);
  }

  return (
    <>
    <div className="card">
      <p style={{justifySelf: 'center', fontWeight: '700px'}}>Welcome to my Portfolio!</p>
      <div className="card-contents">
          <div className="pic">
            <img className="profile-pic" alt="pic of me!" src={pic}></img>
            <p>Hanna Gebrel</p>
            <ul className="links">
              <li> <a href="https://www.github.com/hannageb"><img alt="github logo" src={github}></img></a></li>
              <li> <a href="https://www.linkedin.com/in/hannagebrel"><img alt="linkedin logo" src={linkedin}></img></a></li>
              <li> <a href="mailto:gebrelhanna112@gmail.com"><img alt="mail icon" src={mail}></img></a></li>
            </ul>
          </div>
          <div className="toggle">
            <div className="section">
              <div className="star" onClick={() => toggleAbout()}><p></p></div>
              <p>about me</p> </div>
              {showAbout && (
                <div className="section-text"><p>I am so confused!</p></div>
              )}
           
            <div className="section">
              <div className="star" onClick={() => toggleEducation()}></div>
              <p>education & experience</p></div>
              {showEducation && (
                <div className="section-text"><p>I am an honors student at the University of Delaware studying Computer Science with a concentration in Human-Computer Interaction and a minor in Advertising</p></div>
              )}
            
            <div className="section">
              <div className="star" onClick={() => toggleMisc()}></div>
              <p>other interests</p></div>
              {showMisc && (
                <div className="section-text"><p>I love Islamic history, Arab film, translated literature, and all other forms of art</p></div>
              )
            }
            
          </div>
       </div>
    </div>
    </>
  );
}

export default App;
