import Carousel from 'react-bootstrap/Carousel';
import './WebDevelopment.css';

function WebDevelopment() {
    return (
      <div id="web-development-card" className="show-content">
        <p style={{ justifySelf: 'center', textDecoration: 'underline'}}>WEB DEVELOPMENT</p>
        <Carousel>
          <Carousel.Item>
            <iframe className="d-block mx-auto" src="https://hannageb.github.io/portfolio/" style={{width: '100%', height: '300px', border: '2px solid black'}} title="portfolio"></iframe>
            <div className="carousel-caption">
              <h1>Personal Portfolio</h1>
              <p><u>Description:</u> A personal portfolio website to showcase my front-end development, UX/UI design, and interactive projects</p>
              <p><u>Stack:</u> React, JavaScript, CSS, Figma, Bootstrap</p>
              <p><u>Role:</u> Designer & Developer [Solo]</p>
              <hr></hr>
              <h2><strong>Overview</strong></h2>
              <p>My portfolio is the first thing a recruiter, professor, or collaborator sees, so it had to do two jobs at once: show what I can build and show how I think about design. I built it as a React single-page app so that each project could be presented as its own case study without the site feeling like a pile of links.</p>
              <h2>The Problem</h2>
              <p>Code on GitHub rarely tells the story of a project. A repo shows what was built, not who it was for, why decisions were made, or what changed along the way. I wanted one place where visitors could understand my work quickly, whether they spend thirty seconds or five minutes.</p>
              <h2><strong>Process</strong></h2>
              <ul style={{textAlign: 'left', marginLeft: '20px'}}>
                <li><b>Structure:</b> Organized the site around my strongest projects and my dual focus on development and UX/UI design.</li>
                <li><b>Build:</b> Used React components so project cards, sections, and layouts stay consistent and easy to extend as I add new work.</li>
                <li><b>Design:</b> Designed using Figma to create a cohesive visual language and incorporated hand-drawn elements suchs as the tulips in the background</li>
              </ul>
              <h2><strong>Reflection</strong></h2>
              <p>Building my own site pushed me to treat myself as a client: make design decisions, keep iterating, and keep it maintainable. I hope to continue iterating on this so thank you for viewing version 1</p>
            </div>  
          </Carousel.Item>
          <Carousel.Item>
            <iframe className="d-block mx-auto" src="https://hannageb.github.io/starterhelpi/" style={{width: '100%', height: '300px', border: '2px solid black'}} title="career helpi"></iframe>
            <div className="carousel-caption">
              <h1>Career Helpi</h1>
              <p><strong>Description:</strong> A React app that takes users' answers from a basic or detailed questionaire and uses OpeanAI's GPT to generate possible career options</p>
              <p><strong>Stack:</strong> React, TypeScript, OpenAI, Agile, Wireframing</p>
              <p><u>Role:</u> Team Lead & Developer [Team of 3]</p>
              <hr></hr>
              <h2><strong>Overview</strong></h2>
              <p>Career Helpi is a web app that helps users explore career options based on their interests and skills. It uses OpenAI's API to generate personalized career suggestions and provides resources for further exploration.</p>
              <h2>The Problem</h2>
              <p>Career quizzes are usually rigid. They tally answers into fixed categories and give generic results. The project goal was to showcase various job fields and give personalized advice instead. Targeting high schoolers that are looking into college majors or college students looking for a change, this web app aims to provide a more dynamic and personalized career exploration experience.</p>
              <h2>Process</h2>
              <ul>
                <li><b>Research:</b> Conducted user research to understand the pain points of existing career exploration tools.</li>
                <li><b>Design:</b> Created wireframes using Balsamiq to iterate on the user interface and experience.</li>
                <li><b>Development:</b> Built the application using React and TypeScript, integrating the OpenAI API for career suggestions.</li>
              </ul>
              <h2>Solution</h2>
              <p>An interactive questionnaire that sends a user's answers to GPT and returns tailored career suggestions with detailed information and resources.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <iframe className="d-block mx-auto" src="https://hannageb.github.io/mia-egypt/" style={{width: '100%', height: '300px', border: '2px solid black'}} title="redesigning the MIA website"></iframe>
            <div className="carousel-caption">
              <h1>Museum of Islamic Art Redesign</h1>
              <p><strong>Description:</strong> A redesign of the Museum of Islamic Art's website to improve user experience and accessibility</p>
              <p><strong>Stack:</strong> React, TypeScript, Figma</p>
              <p><u>Role:</u> Designer & Developer [Solo]</p>
              <hr></hr>
              <h2><strong>Overview</strong></h2>
              <p>The Museum of Islamic Art in Cairo, Egypt is a cultural landmark that houses a vast collection of Islamic art and artifacts. However, its website was outdated and difficult to navigate, which hindered visitors' ability to access information about the museum's exhibits and events.</p>
              <h2>The Problem</h2>
              <p>The museum's website was not user-friendly and outdated in terms of UI. The website did not reflect the museum's rich history and cultural significance.</p>
              <h2>Process</h2>
              <ul>
                <li><b>Research:</b> Conducted user research to identify pain points and areas for improvement in the existing website.</li>
                <li><b>Design:</b> Created wireframes and prototypes using Figma to improve the website's layout, navigation, and visual design.</li>
                <li><b>Development:</b> Built the redesigned website using React and TypeScript, ensuring it was responsive and accessible across devices.</li>
              </ul>
              <h2>Solution</h2>
              <p>The redesigned website features a modern, intuitive interface that allows visitors to easily access information about the museum's exhibits, events, and hours of operation. It also includes accessibility features such as keyboard navigation and screen reader compatibility.</p>
              <h2>Reflection</h2>
              <p>This project allowed me to apply my skills in UX/UI design and front-end development to create a meaningful solution for a real-world problem. I learned the importance of user research and accessibility in web design, and I am proud to have contributed to improving the online presence of a cultural institution.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    )
}

export default WebDevelopment;