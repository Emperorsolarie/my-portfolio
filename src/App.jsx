import './Home.css'
import "devicon/devicon.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';

function App() {

  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubmitting(true);
    setFormMessage("");

    const formData = new FormData(event.currentTarget);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send your message.");
      }

      setFormMessage("Message sent successfully!");
     form.reset();
    } catch (error) {
      setFormMessage(
        error.message === "Failed to fetch"
          ? "Unable to connect to the server. Please try again."
          : error.message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="hero">
      <nav className="navbar">
        <a href="/" className="logo">METIEKA SOLARIE</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      <section className="hero-content" id="home">
        {/**********************introduction********************************/}

        
        <div className="hero-layout">
          <div className="hero-text">
            <p className="eyebrow">SOFTWARE ENGINEER</p>

            <h1>
              Building digital
              <span> experiences that matter.</span>
            </h1>

            <p className="hero-description">
              I'm a frontend and full-stack developer passionate
              about creating modern, responsive web applications
              that solve real problems.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View Projects
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/Emperorsolarie"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="mailto:metiakasalarie@gmail.com"
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>

          </div>

          <div className="hero-image">
            <img src={`${import.meta.env.BASE_URL}images/profile%20pic.png`} alt="Metieka Solarie" />
          </div>
        </div>

      </section>


      {/********************************* ABOUT SECTION *********************************** */}
      
      
      <section className="about-section" id="about">
        <div className="about-top">
          <div className="about-intro">
            <p className="eyebrow">ABOUT ME</p>
            <h2>Get to know me</h2>

            <p>
              I'm a Software Engineering graduate with hands-on
              experience building web applications using JavaScript,
              React, Node.js, Express.js, and PostgreSQL. I enjoy
              creating responsive interfaces and working on features
              such as account authentication, meter and token
              validation, balance management, and recharge history.
              I am seeking a junior Frontend Developer or Full-Stack
              Developer role where I can contribute to useful products
              and continue developing my skills.
            </p>
          </div>

          <div className="about-portrait">
            <img src={`${import.meta.env.BASE_URL}images/profile%20pic.png`} alt="Metieka Solarie" />
          </div>
        </div>

        <div className="about-cards">
          <article className="info-card">
            <div className="info-card-heading">
              <span className="card-icon">🎓</span>
              <h3>Education</h3>
            </div>

            <h4>Bachelor's Degree in Software Engineering</h4>
            <p>IUGET, Douala, Cameroon</p>
            <p>Graduated in 2024</p>
          </article>

          <article className="info-card">
            <div className="info-card-heading">
              <span className="card-icon">💻</span>
              <h3>Professional Training</h3>
            </div>

            <h4>Full-Stack Development Training</h4>
            <p>Maxwell Technologies</p>
            <p>January 2026 – Present</p>
            <p>Practical training focused on full-stack web development.</p>
          </article>
        </div>
      </section>

      {/********************************** SKILLS PAGE************************************** */}

      <section className="skills-section" id="skills">

        <div className="skills-container">
          <p className="eyebrow">MY SKILLS</p>
          <h2>Technologies I Work With</h2>
          <p>
            Here are the tools and technologies I use to build web applications.
          </p>

          
          <div className="skills-grid">

            <article className="skill-card">
              <h3 className="skill-card-title"> 
                <i className="bi bi-display"></i> 
                Frontend
              </h3>
              <div className="skill-items">

                <div className="skill-item">
                  <i className="devicon-html5-plain colored"></i>
                  <span>HTML5</span>
                </div>

                <div className="skill-item">
                  <i className="devicon-css3-plain colored"></i>
                  <span>CSS</span>
                </div>

                <div className="skill-item">
                  <i className="devicon-javascript-plain colored"></i>
                  <span>JavaScript</span>
                </div>

                <div className="skill-item">
                  <i className="devicon-react-original colored"></i>
                  <span>React</span>
                </div>

                <div className="skill-item">
                  <i className="devicon-angularjs-plain colored"></i>
                  <span>Angular</span>
                </div>

                <div className="skill-item">
                  <i className="devicon-bootstrap-plain colored"></i>
                  <span>Bootstrap</span>
                </div>
              </div>
            </article>

            <article className="skill-card">
              <h3 className="skill-card-title"> 
                <i className="bi bi-gear"></i> 
                Backend
              </h3>
              <div className="skill-items">
                {/* We'll add technology icons here next */}

                <div className="skill-item">
                  <i className="devicon-nodejs-plain colored"></i>
                  <span>Node.js</span>
                </div>

                <div className="skill-item">
                  <i className="devicon-express-original"></i>
                  <span>Express.js</span>
                </div>

                <div className="skill-item">
                  <i className="bi bi-cloud-arrow-down"></i>
                  <span>REST APIs</span>
                </div>
              </div>
            </article>

            <article className="skill-card">
              <h3 className="skill-card-title" > 
                <i className="bi bi-database"></i>
                Database & Storage
              </h3>
              <div className="skill-items">
                {/* We'll add technology icons here next */}
                
                
                <div className="skill-item">
                  <i className="devicon-postgresql-plain colored"></i>
                  <span>PostgreSQL</span>
                </div>

                <div className="skill-item">
                  <i className="bi bi-database-check"></i>
                  <span>localStorage</span>
                </div>
              
              </div>
            </article>

            <article className="skill-card">
              <h3 className="skill-card-title"> 
                <i className="bi bi-tools"></i> 
                Tools
              </h3>
              <div className="skill-items">
                {/* We'll add technology icons here next */}

                <div className="skill-item">
                  <i className="devicon-git-plain colored"></i>
                  <span>Git</span>
                </div>

                <div className="skill-item">
                  <i className="devicon-github-original"></i>
                  <span>GitHub</span>
                </div>

                <div className="skill-item">
                  <i className="devicon-npm-original-wordmark colored"></i>
                  <span>npm</span>
                </div>

                <div className="skill-item">
                  <i className="devicon-vitejs-plain colored"></i>
                  <span>Vite</span>
                </div>

                <div className="skill-item">
                  <i className="devicon-vscode-plain colored"></i>
                  <span>VS Code</span>
                </div>

                <div className="skill-item">
                  <i className="bi bi-robot"></i>
                  <span>AI</span>
                </div>

              </div>
            </article>

          </div>

        </div>

      </section>

      {/********************************** PROJECTS ************************************ */}

      <section className="projects-section" id="projects">
        <div className="projects-container">
          <p className="eyebrow">MY WORK</p>
          <h2>Featured Projects</h2>
          <p>
            Here are some of the projects I have built while developing
            my frontend and full-stack development skills.
          </p>

          <div className="projects-grid">

            <article className="project-card">

              <div className="project-preview smartprepaid-preview">
                <i className="bi bi-lightning-charge-fill"></i>
                <h4>SmartPrepaid</h4>
                <p>Electricity Management Dashboard</p>
              </div>

              <div className="project-content">
                <p className="project-number">01 / FEATURED PROJECT</p>

                <h3>SmartPrepaid</h3>

                <p className="project-description">
                  A prepaid electricity management dashboard prototype
                  featuring account authentication, meter validation,
                  token redemption, balance management, and recharge history.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>PostgreSQL</span>
                </div>

                <a
                  href="https://github.com/Emperorsolarie/smart-prepaid"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-preview weather-preview">
                <i className="bi bi-cloud-sun-fill"></i>
                <h4>Weather App</h4>
                <p>Weather Forecast & Location Search</p>
              </div>

              <div className="project-content">
                <p className="project-number">02 / WEB APPLICATION</p>

                <h3>Weather App</h3>

                <p className="project-description">
                  A weather application built with React that allows users
                  to search for locations and view weather information
                  using the Open-Meteo API.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Vite</span>
                  <span>Open-Meteo API</span>
                </div>

                <a
                  href="https://github.com/Emperorsolarie/weather-app"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </article>


            <article className="project-card">
              <div className="project-preview todo-preview">
                <i className="bi bi-check2-square"></i>
                <h4>Todo App</h4>
                <p>Task Management & Productivity</p>
              </div>

              <div className="project-content">
                <p className="project-number">03 / WEB APPLICATION</p>

                <h3>Todo App</h3>

                <p className="project-description">
                  A task management application that allows users to
                  create, edit, complete, and delete tasks, with local
                  storage to preserve tasks across page refreshes.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                  <span>localStorage</span>
                </div>

                <a
                  href="https://github.com/Emperorsolarie"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View GitHub Profile <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </article>


            
            <article className="project-card">
              <div className="project-preview movie-preview">
                <i className="bi bi-film"></i>
                <h4>Movie App</h4>
                <p>Movie Discovery & Exploration</p>
              </div>

              <div className="project-content">
                <p className="project-number">04 / WEB APPLICATION</p>

                <h3>Movie App</h3>

                <p className="project-description">
                  A movie-focused React application built to practise
                  frontend development, explore movie information, and
                  create an engaging browsing experience.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                </div>

                <a
                  href="https://github.com/Emperorsolarie"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View GitHub Profile <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </article>


          </div>
          
        </div>
      </section>


      {/********************************** CONTACT FORM************************************ */}

      
     
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-layout">

            {/* Left column */}
            <div className="contact-info">
              <p className="eyebrow">GET IN TOUCH</p>

              <h2>Let's Work Together</h2>

              <p className="contact-description">
                I'm open to junior frontend and full-stack development
                opportunities. If you have a project or an opportunity
                to discuss, feel free to reach out.
              </p>

              <div className="contact-details">
                <a href="mailto:metiakasalarie@gmail.com">
                  <i className="bi bi-envelope-fill"></i>
                  metiakasalarie@gmail.com
                </a>

                <a href="tel:+237653474408">
                  <i className="bi bi-telephone-fill"></i>
                  +237 653 474 408
                </a>

                <span className="contact-location">
                  <i className="bi bi-geo-alt-fill"></i>
                  Cameroon
                </span>

                <a
                  href="https://github.com/Emperorsolarie"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                  GitHub Profile
                </a>
              </div>

              <div className="contact-socials">
                <a
                  href="https://github.com/Emperorsolarie"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="mailto:metiakasalarie@gmail.com"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
            </div>

            {/* Right column */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </label>

              <label>
                Your Email
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </label>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="5"
                  required
                />
              </label>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <i className="bi bi-send-fill"></i>
              </button>
            </form>

            {formMessage && (
              <p className="form-message" role="status" aria-live="polite">
                {formMessage}
              </p>
            )}

          </div>
        </div>
      </section>

    </main>
    </>
  )
}

export default App
