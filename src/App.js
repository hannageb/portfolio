import './App.css';
import pic from './assets/pic.jpg'
import github from './assets/github.webp'
import linkedin from './assets/linkedin.png'
import mail from './assets/mail.png'

function App() {
  return (
    <>
    <div className="bkgd"></div>
    <div className="card">
      <p style={{justifySelf: 'center'}}>Welcome to my Portfolio!</p>
      <div className="card-contents">
        <div className="pic">
          <img alt="pic of me!" src={pic}></img>
          <ul className="links">
            <p>Hanna Gebrel</p>
            <li href="github.com/hannageb"><img alt="github logo" src={github}></img></li>
            <li href="linkedin.com/hannagebrel"><img alt="linkedin logo" src={linkedin}></img></li>
            <li href="gebrelhanna112@gmail.com"><img alt="mail icon" src={mail}></img></li>
          </ul>
        </div>
        <ul className="toggle">
          <li className="abt">
            <div className="star"></div>
            <p>about me</p>
          </li>
          <li className="edu">
            <div className="star"></div>
            <p>education & experience</p>
          </li>
          <li className="misc">
            <div className="star"></div>
            <p>other interests</p></li>
       </ul>
       </div>
    </div>
    </>
  );
}

export default App;
