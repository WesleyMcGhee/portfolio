import React from "react";
import "./about.css";
import HeadShot from "./graduation.PNG";

export default function About() {
  return (
    <section id="about">
      <h1 className="section-title">About</h1>
      <div className="about-out-con">
        <div className="about-con">
          <img src={HeadShot} alt="My headshot" className="headshot"></img>
          <p className="about-text">
            Wesley started programming in the eight grade, where he watched his
            friend code a guesing game in free basic. He downloaded got home
            that day and downloaded Code Blocks and started to learn C++. After
            learning some of the very basic, he started high school and took a
            Java development class. After learning object oriendted programming
            he started to mod minecraft. He did this off and on for a couple of
            years. After graduating he started to learn Web Development, and
            took on a bootcamp. In september 2020 he graduated Devmountain, and
            started to do freelance work, and continue to hone his skills.
          </p>
        </div>
      </div>
    </section>
  );
}
