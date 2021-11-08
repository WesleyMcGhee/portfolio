import React from "react";
import "./technologies.css";
export default function Technologies() {
  return (
    <section id="technologies">
      <h1 className="section-title">Technolgies</h1>
      <div className="tech-con">
        <div className="tech-holder">
          <h2 className="tech-disc">Tech Stack</h2>
          <hr />
          <ul className="tech-list">
            <li className="tech-item">PostgreSQL</li>
            <li className="tech-item">Express</li>
            <li className="tech-item">React</li>
            <li className="tech-item">Node</li>
          </ul>
        </div>
        <div className="tech-holder">
          <h2 className="tech-disc">Design</h2>
          <hr />
          <ul className="tech-list">
            <li className="tech-item">Figma</li>
            <li className="tech-item">HTML</li>
            <li className="tech-item">CSS</li>
          </ul>
        </div>
        <div className="tech-holder">
          <h2 className="tech-disc">Learning</h2>
          <hr />
          <ul className="tech-list">
            <li className="tech-item">C#</li>
            <li className="tech-item">.NET</li>
            <li className="tech-item">Angular</li>
            <li className="tech-item">AWS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
