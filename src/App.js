import './App.scss';
import codewars from "./images/codewars.png";
import twitter from "./images/twitter.png";
import codepen from "./images/codepen.png";
import linkedin from "./images/codepen.png";
import downarrow from "./images/downarrow.png";
import downarrowactive from "./images/downarrowactive.png";
import pomodoro from "./images/pomodoro.png";
import calculator from "./images/calculator.png";
import quotes from "./images/quotes.png";
import drum from "./images/drum.png";

function App() {


  const handleContactArrow = () => {
    const contactArrow = document.getElementById("contact-arrow");

    if (contactArrow.className === "active") {
      contactArrow.src = downarrow;
      contactArrow.classList.remove("active");
    } else {
      contactArrow.classList.add("active");
      contactArrow.src = downarrowactive;
    }
  }

  return (
    <main id="app-container">
      <section id="sidebar">
        <nav>
          <a href="#projects"><p>Projects</p></a>
          <a href="#skills"><p>Skills</p></a>
          <a href="#about"><p>About</p></a>
        </nav>
        <div id="social-links">
          <a href="https://www.codewars.com/users/Godnoken/completed_solutions" target="_blank" rel="noreferrer"><img src={codewars} alt="codewars link" /></a>
          <a href="https://codepen.io/Godnoken/pens/public" target="_blank" rel="noreferrer"><img src={codepen} alt="codepen link" /></a>
          <a href="https://twitter.com/SebOjefors" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter link" /></a>
          <a href=""><img src={linkedin} alt="linkedin link" /></a>
        </div>
        <div id="lets-talk">Let's talk.</div>
        <div id="contact-container">
          <img id="contact-arrow" onClick={handleContactArrow} src={downarrow} alt="arrow that shows contact form when clicked" />
        </div>
      </section>
      <section id="hero">
        <h1>Sebastian Öjefors</h1>
        <div id="hero-text">
          <h2>Quality,</h2>
          <h2>UX focused,</h2>
          <h2>Minimalistic design.</h2>
        </div>
      </section>
      <section id="projects">
        <div className="card" id="pomodoro">
          <img src={pomodoro} alt="pomodoro app" />
          <p></p>
        </div>
        <div className="card" id="drum-machine">
          <img src={drum} alt="drum machine app" />
          <p></p>
        </div>
        <div className="card" id="calculator">
          <img src={calculator} alt="calculator app" />
          <p></p>
        </div>
        <div className="card" id="quotes">
          <img src={quotes} alt="quotes app" />
          <p></p>
        </div>
      </section>
      <section id="skills">
        <div id="skills-header-container">
          <h3><span className="red">Projects are built with</span><br />
            && <br />
            <span className="blue">I have experience with</span></h3>
        </div>
        <div id="skills-p-container">
          <p><span className="red">HTML</span> | <span className="red">CSS</span> | <span className="red">SASS</span> | <span className="red">JavaScript</span> <br />
          <span className="blue">jQuery</span> | <span className="red">React</span> | <span className="red">Redux</span> | <span className="blue">BootStrap</span> <br />
          <span className="blue">C</span> | <span className="blue">C#</span> | <span className="red">Git</span> | <span className="blue">Unity</span></p>
        </div>
      </section>
      <section id="about">
        <div id="about-text-container">
          <h4>Thank you for the visit.</h4>
          <p>I am a software engineer in the making, <br/>
  eager to prove my worth and excel with the right guidance.<br/><br/>

  Currently working through FreeCodeCamp and CS50 at HarvardX,
  while occasionally enjoying algorithms on CodeWars.<br/><br/>

  Interpersonal skills have been attained through good experience
  in different service-oriented jobs. You’d love to have a beer with me.<br/><br/>

  Since I really enjoy most aspects of coding and have a strong urge
  to learn a lot more, contact me on the right - I am confident I can
  make myself useful in a short amount of time.<br/><br/>

  And don’t worry, all of my designs won’t be black and <span>white</span>.</p>

        </div>
      </section>
    </main>
  );
}

export default App;
