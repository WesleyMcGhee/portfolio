import React from "react";
import Header from "../../components/header/Header";
import "./home.css";

export default function Home() {
  return (
    <section id="home">
      <Header />
      <div className="bannar-con">
        <div className="bannar">
          <div className="bannar-in-con">
            <h1 className="title">Wesley McGhee</h1>
            <p className="disc">Web Developer, Language Learner, Tech Nerd.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
