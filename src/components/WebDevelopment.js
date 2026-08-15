import Carousel from 'react-bootstrap/Carousel';
import './WebDevelopment.css';

function WebDevelopment() {
    return (
      <div id="web-development-card" className="show-content">
        <p style={{ justifySelf: 'center', textDecoration: 'underline'}}>WEB DEVELOPMENT</p>
        <Carousel>
          <Carousel.Item>
            <iframe className="d-block mx-auto" src="https://hannageb.github.io/portfolio/" style={{width: '100%', height: '300px', border: '3.5px solid black'}} title="portfolio"></iframe>
            <div className="carousel-caption">
              <p>This portfolio was created to showcase my skillset and previous/ongoing projects!</p>
              <p>Skills: React, JavaScript, CSS, Figma, Bootstrap</p>
            </div>  
          </Carousel.Item>
          <Carousel.Item>
            <iframe className="d-block mx-auto" src="https://hannageb.github.io/starterhelpi/" style={{width: '100%', height: '300px', border: '3.5px solid black'}} title="career helpi"></iframe>
            <div className="carousel-caption">
              <p>Created for an Intro to SWE course, this career helper takes users' answers from a basic or detailed questionaire and generates possible career options</p>
              <p>Skills: React, TypeScript, OpenAI, Agile, Wireframing</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <iframe className="d-block mx-auto" src="https://hannageb.github.io/mia-egypt/" style={{width: '100%', height: '300px', border: '3.5px solid black'}} title="redesigning the MIA website"></iframe>
            <div className="carousel-caption">
              <p>Redesigning the website for the Museum of Islamic Art in Cairo, Egypt</p>
              <p>Skills: React, TypeScript, Figma</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    )
}

export default WebDevelopment;