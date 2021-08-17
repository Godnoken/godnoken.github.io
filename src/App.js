import "./App.scss";

import React from "react";

import codewars from "./images/codewars.png";
import twitter from "./images/twitter.png";
import codepen from "./images/codepen.png";
import linkedin from "./images/linkedin.png";
import downarrow from "./images/downarrow.png";
import downarrowactive from "./images/downarrowactive.png";
import pomodoro from "./images/pomodoro.png";
import calculator from "./images/calculator.png";
import quotes from "./images/quotes.png";
import drum from "./images/drum.png";
import downarrowround from "./images/downArrowRound.png";
import uparrowround from "./images/upArrowRound.png";

import emailjs from "emailjs-com";
import { gsap } from "gsap";

function App() {
  // Sends email from user to my email address and resets input fields
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_0w03a0b",
        "template_yja7krc",
        "#contact-form",
        "user_AGoFRucRZPXNbAoZ3aGIk"
      )
      .then(
        (result) => {
          console.log(result.text);
          emailSentAnimation();
        },
        (error) => {
          console.log(error.text);
        }
      );

    document.querySelector("textarea").value = "";
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
  };

  // Tells user when email sends successfully
  const emailSentAnimation = () => {
    document
      .getElementById("email-successful")
      .animate(
        [{ easing: "ease-in" }, { opacity: "100%" }, { easing: "ease-out" }],
        { duration: 5000 }
      );
    document.getElementById("email-successful").style.display = "block";
    setTimeout(
      () =>
        (document.getElementById("email-successful").style.display = "none"),
      5000
    );
  };

  // Animates arrow and contact form. Makes form visible & useable.
  const handleContactArrow = () => {
    const contactArrow = document.getElementById("contact-arrow");
    const contactForm = document.getElementById("contact-form");

    if (contactArrow.className === "active") {
      setTimeout(() => {
        contactForm.style.display = "none";
      }, 1000);
      contactForm.style.animation = "ContactFormInactive 1s forwards";
      contactArrow.style.animation = "ContactCloseAnimation 1s forwards";
      contactArrow.classList.remove("active");
      contactArrow.src = downarrow;
    } else {
      contactForm.style.display = "flex";
      contactForm.style.animation = "ContactFormActive 1s forwards";
      contactArrow.style.animation = "ContactOpenAnimation 1s forwards";
      contactArrow.classList.add("active");
      contactArrow.src = downarrowactive;
    }
  };

  return (
    <main id="app-container">
      <section id="sidebar">
        <nav>
          <a href="#hero">
            <p>Home</p>
          </a>
          <a href="#projects">
            <p>Projects</p>
          </a>
          <a href="#skills">
            <p>Skills</p>
          </a>
          <a href="#about">
            <p>About</p>
          </a>
        </nav>
        <div id="social-links">
          <a
            href="https://www.codewars.com/users/Godnoken/completed_solutions"
            target="_blank"
            rel="noreferrer"
          >
            <img src={codewars} alt="codewars link" />
          </a>
          <a
            href="https://codepen.io/Godnoken/pens/public"
            target="_blank"
            rel="noreferrer"
          >
            <img src={codepen} alt="codepen link" />
          </a>
          <a
            href="https://twitter.com/SebOjefors"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter link" />
          </a>
          <a href="_blank" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin link" />
          </a>
        </div>
        <div id="lets-talk">Let's talk.</div>
        <div id="contact-container">
          <p id="email-successful">Emailed! You'll hear from me soon.</p>
          <img
            id="contact-arrow"
            onClick={handleContactArrow}
            src={downarrow}
            alt="arrow that shows contact form when clicked"
          />
          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              id="name"
              className="input-fields"
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              id="email"
              className="input-fields"
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea placeholder="Message" name="message" required></textarea>
            <input id="submit" type="submit" value="Swoosh!" />
          </form>
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
        <div id="projects-container">
          <div className="card">
            <img src={pomodoro} alt="Pomodoro app"/>
            <p>Pomodoro</p>
          </div>
          <div className="card">
          <img src={drum} alt="Drum machine app"/>
            <p>Drum Machine</p>
          </div>
          <div className="card">
          <img src={quotes} alt="Quotes machine app"/>
            <p>Quotes Machine</p>
          </div>
          <div className="card">
          <img src={calculator} alt="Calculator app"/>
            <p>Calculator</p>
          </div>
        </div>
      </section>
      <section id="skills">
        <div id="skills-header-container">
          <h3>
            <span className="red">Projects are built with</span>
            <br />
            && <br />
            <span className="blue">I have experience with</span>
          </h3>
        </div>
        <div id="skills-paragraph-container">
          <p>
            <span className="red">HTML</span> | <span className="red">CSS</span>{" "}
            | <span className="red">SASS</span> |{" "}
            <span className="red">JavaScript</span> <br />
            <span className="blue">jQuery</span> |{" "}
            <span className="red">React</span> |{" "}
            <span className="red">Redux</span> |{" "}
            <span className="blue">BootStrap</span> <br />
            <span className="blue">C</span> | <span className="blue">C#</span> |{" "}
            <span className="red">Git</span> |{" "}
            <span className="blue">Unity</span>
          </p>
        </div>
      </section>
      <section id="about">
        <div id="about-text-container">
          <h4>Thank you for the visit.</h4>
          <p>
            I am a software engineer in the making, <br />
            eager to prove my worth and excel with the right guidance.
            <br />
            <br />
            Currently working through FreeCodeCamp and CS50 at HarvardX, while
            occasionally enjoying algorithms on CodeWars.
            <br />
            <br />
            Interpersonal skills have been attained through good experience in
            different service-oriented jobs. You’d love to have a beer with me.
            <br />
            <br />
            Since I really enjoy most aspects of coding and have a strong urge
            to learn a lot more, contact me on the right - I am confident I can
            make myself useful in a short amount of time.
            <br />
            <br />
            And don’t worry, all of my designs won’t be black and{" "}
            <span>white</span>.
          </p>
        </div>
        <a id="contact-me" href="#sidebar">Want to contact me?</a>
      </section>
    </main>
  );
}

export default App;
