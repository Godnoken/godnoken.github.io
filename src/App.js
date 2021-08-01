import './App.scss';
import codewars from "./images/codewars.png";
import twitter from "./images/twitter.png";
import codepen from "./images/codepen.png";
import linkedin from "./images/codepen.png";
import downarrow from "./images/downarrow.png";
import downarrowactive from "./images/downarrowactive.png";

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
         <a href="https://www.codewars.com/users/Godnoken/completed_solutions"  target="_blank" rel="noreferrer"><img src={codewars} alt="codewars link"/></a>
         <a href="https://codepen.io/Godnoken/pens/public" target="_blank" rel="noreferrer"><img src={codepen} alt="codepen link"/></a>
         <a href="https://twitter.com/SebOjefors" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter link"/></a>
         <a href=""><img src={linkedin}alt="linkedin link"/></a>
       </div>
      <div id="lets-talk">Let's talk.</div>
      <div id="contact-container">
        <img id="contact-arrow" onClick={handleContactArrow} src={downarrow} alt="arrow that shows contact form when clicked"/>
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
      <div className="card">
        <img src="" alt=""/>
        <p></p>
      </div>
      <div className="card">
        <img src="" alt=""/>
        <p></p>
      </div>
      <div className="card">
        <img src="" alt=""/>
        <p></p>
      </div>
      <div className="card">
        <img src="" alt=""/>
        <p></p>
      </div>
    </section>
    <section id="skills">
      <h3></h3>
      <h3></h3>
    </section>
    <section id="about">
      <h4></h4>
      <p></p>
    </section>
  </main>
  );
}

export default App;
