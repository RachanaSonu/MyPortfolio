import React from 'react';
import './portfolio.css';
import img1 from '../../assets/full1.png';
import real from '../../assets/real.png';
import dj from '../../assets/dj.png';

const data = [
  {
    id: 1,
    image: img1,
    title:
      'Developed WishfulTrade, a Django-based e-commerce platform with user-friendly features, including category-based product browsing, favorites, and a responsive shopping cart user interactions.',
    github: 'https://github.com/RachanaSonu/wishful_trade',
    demo: 'https://1771django.pythonanywhere.com/',
  },
  {
    id: 1,
    image: real,
    title:
      'This is a dynamic real estate website, skillfully crafted with React and JavaScript, providing a responsive and user-friendly platform for effortless immersive exploration of property listings.',
    github: 'https://github.com/RachanaSonu/react_real_estate',
    demo: 'https://rachanasonu.github.io/react_real_estate/',
  },
  {
    id: 1,
    image: dj,
    title:
      'This Django web application manages course information, user feedback, and an image gallery with basic CURD operations and Model-View-Controller, Responsive Design, Scalable Database. ',
    github: 'https://github.com/RachanaSonu/Django_webpage',
    demo: 'https://rachanap.pythonanywhere.com/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div
                className="portfolio__item-image"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  DEMO
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
