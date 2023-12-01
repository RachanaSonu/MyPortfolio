import React from 'react';
import './header.css';
import 'boxicons';
// import CTA from './CTA';
import CV from '../../assets/Rachna.pdf';
//import ME from '../../assets/me-coverdone-half.png';
//import Headersocials from './Headersocials';
import { Typewriter } from 'react-simple-typewriter';
import ME1 from '../../assets/1.jpg'

const Header = () => {
  return (
    <header id="home">
      <div className="home-content">
        <h3>Hey, It's me.</h3>
        <h1>Rachana.P</h1>
        <h3>
            I am a{' '}
          {/* <span style={{ color: '#0ef', fontWeight: 'bold' }}> */}
          <span style={{ color: 'white', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                'Front-End Developer |',
                'Back-End Developer |',
                'Full Stack Developer |',
                'React.js Developer |',
                'Python Developer.',

                'Front-End Developer |',
                'Back-End Developer |',
                'Full Stack Developer |',
                'React.js Developer |',
                'Python Developer.',
                
                // 'FullStack Developer.',
                // 'React.js Developer.',
                
              ]}
              loop={5}
               cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <p>
        {/* As a Computer Science graduate, I've embarked on an exciting journey, starting from scratch in web development and front-end design. Now, with a beginner's mindset, I am immersing myself in a Python course, driven by my passion for continuous learning and the limitless possibilities of technology. */}
        As a Computer Science graduate, I began my journey in web development and front-end design. Recently completing a Python course, I've transitioned into a full-stack developer, fueled by a passion for continuous learning and a deep appreciation for the boundless possibilities of technology.
        </p>
        <div class="social-media">
          <a
            href="https://github.com/RachanaSonu"
            style={{ '--i': 1 }}
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rachana-p-sonu/"
            style={{ '--i': 4 }}
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          {/* <a
            href="https://www.intagram.com/anandhu_kk./"
            style={{ '--i': 3 }}
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a> */}

          {/* <a
            href="https://twitter.com/Gautam_033"
            style={{ '--i': 2 }}
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a> */}
        </div>
        <a href={CV} class="download-btn" download >
          My CV
        </a>
        <a href="#contact" class="download-btn move__contact" style={{margin:"20px"}}>
          Chat?
        </a>

        <a href="mailto:rachana.p1398@gmail.com" class="download-btn">
          Hire Me
        </a>


        {/* <div class="scroll__down">
          <a href="/">Scroll Down</a>
          <a href="/" class="down-arrow">
            <i class="bx bx-chevron-down"></i>
          </a>
        </div> */}
      </div>

      <div class="home-img">
        <img src={ME1} alt="" />
      </div>
    </header>
  );
};

export default Header;
