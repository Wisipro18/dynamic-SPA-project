import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "dynamic SPA";
  }, []);

  return (
  <div className="page">

    <div className="content-card">
      <h2>About Me</h2>

      <p>
        My name is Wisdom and I am passionate about technology,
        web development, and creating interactive digital experiences.
      </p>
    </div>

    <div className="content-card">
      <h3>My Learning Journey</h3>

      <div className="timeline">

        <div className="timeline-item">
          <h3>2022</h3>
          <p>Started learning and exploring web development fundamentals
             understanding how websites are structured and styled.</p>
        </div>

        <div className="timeline-item">
          <h3>2023</h3>
          <p>Began building small projects using HTML, CSS, and Javascript.
             Focused on improving my coding skill, learning how to turn ideas into functional web pages</p>
        </div>

        <div className="timeline-item">
          <h3>2024</h3>
          <p>Focused on building react applications and learning modern web development.
            Focused on improving UI designs and interactivity.
          </p>
        </div>

      </div>

    </div>

  </div>
);
};

export default About;