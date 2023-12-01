import React from 'react';
import './about.css';
import ME from '../../assets/Me.jpg';
// import { FaAward } from 'react-icons/fa';
// import { FiUsers } from 'react-icons/fi';
// import { VscFolderLibrary } from 'react-icons/vsc';

// const observer=new IntersectionObserver((entries)=>{
//   entries.forEach((entry)=>{
//     console.log(entry)
//     if(entry.isIntersecting){
//       entry.target.classList.add('show');
//     }else{
//       entry.target.classList.remove('show');
//     }
//   })
// })

// const hiddenElements=document.querySelectorAll('.about__container a')
// hiddenElements.forEach((el)=>{observer.observe(el)})

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={ME}
              alt="me_image"
              // data-aos="fade-right"
              // data-aos-duration="1500"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article
              className="about__card"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {/* <FaAward className="about__icon" /> */}
              <h5>Open to Learn New Technologies and stay at the forefront of industry advancements.</h5>
              {/* <small>3+ years experience</small> */}
            </article>
            <article
              className="about__card"
              // data-aos="fade-down"
              // data-aos-duration="1000"
            >
              {/* <FiUsers className="about__icon" /> */}
              <h5>Dedicated FullStack developer with a passion for creating innovative, stunning websites, advancements for excellence.</h5>
            </article>

            <article
              className="about__card"
              // data-aos="fade-down"
              // data-aos-duration="1000"
            >
              {/* <VscFolderLibrary className="about__icon" /> */}
              <h5>I'm excited to relaunch my career and I look forward to contributing my skills to innovative projects.</h5>
              {/* <small>80+ Projects</small> */}
            </article>
          </div>
          <p>
          {/* As a Computer Science graduate with a relentless drive for growth, I've recently harnessed the power of web development, evolving into a beginner front-end developer. Embracing a two-year gap after my engineering journey, I am now passionately immersing myself in a Python course, forging a path towards technological innovation and excellence. */}
          {/* Navigating a two-year gap post-engineering, I transitioned into web development and recently achieved Full Stack Developer competency through a rigorous Python course. This transformative journey reflects my dedication to continuous learning and adaptability within the dynamic tech realm. */}
          As a Computer Science graduate with a passion for growth, I've ventured into web development, transitioning to a beginner front-end developer. After a two-year gap post-engineering, I passionately immersed myself in a Python course. Now, having successfully completed the course, I stand proud as a Full Stack Developer, forging a path towards technological innovation and excellence.

          </p>
          <a
            href="#contact"
            className="btn btn-primary"
            // data-aos="fade-left"
            // data-aos-duration="1000"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
