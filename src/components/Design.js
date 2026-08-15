import calendar from '../assets/calendar.gif';
import egy from '../assets/egy-v-nz.png';
import worldwide from '../assets/global-latina-belt.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './Design.css';

function Design() {
    return (
        <div id="design-card" className="show-content">
        <p style={{justifySelf: 'center'}}>DESIGN</p>
        <Carousel>
            <Carousel.Item>
                <img className="d-block mx-auto" src={calendar} alt="cairo calendar" style={{ width: '335px', height: '450px' }} />
                <div className="carousel-caption">
                    <p>Cairo Calendar</p>
                    <p>Tools: Affinity</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block mx-auto"src={egy} alt="egy v nz" style={{ width: '335px', height: '450px' }} />
                <div className="carousel-caption">
                    <p>A poster dedicated to Egypt's first World Cup win</p>
                    <p>Tools: Affinity</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block mx-auto"src={worldwide} alt="worldwide-latin-belt" style={{ width: '335px', height: '450px' }} />
                <div className="carousel-caption">
                    <p>An event flyer inspired by a tweet describing the "worldwide latina belt"</p>
                    <p>Tools: Affinity</p>
                </div>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default Design;