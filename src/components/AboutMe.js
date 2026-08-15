import pic from '../assets/pic.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import download from '../assets/download.svg'
import resume from '../assets/resume.pdf'
import './AboutMe.css'

function AboutMe(){
    return (
        <div id="front-card" className="show-content">
            <div className="top-text" id="typewriter">
            <p>Welcome to my Portfolio ☺︎</p>
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
            <p>Let's Keep in Touch!</p>
            <p style={{fontSize: '20px'}}>Feel free to reach out if you have any questions, share film/book recommendations or just want to connect!</p>
                <ul className="links" style={{justifyContent: 'center'}}>
                    <li> <a href="https://www.github.com/hannageb"><img alt="github logo" src={github}></img></a></li>
                    <li> <a href="https://www.linkedin.com/in/hannagebrel"><img alt="linkedin logo" src={linkedin}></img></a></li>
                    <li> <a href="mailto:gebrelhanna112@gmail.com"><img alt="mail icon" src={mail}></img></a></li>
                    <li> <a href={resume} download="Hanna-Gebrel-Resume"><img src={download} alt="download icon"/></a></li>
                </ul>
            </div>
        </div> 
    )
}

export default AboutMe;