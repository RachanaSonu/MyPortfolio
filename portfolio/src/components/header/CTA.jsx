import React from 'react';
import CV from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btm-primary">
        Let's Talk
      </a>
      <a href="mailto:rachana.p1398@gmail.com" class="download-btn">
          Hire Me
        </a>
    </div>
  );
};

export default CTA;
