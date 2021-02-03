import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "../../components/Footer.css";

export default function Products() {
  return (
    <h1 className="products">
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Designer & developer based out of Richmond
        </p>

        <div className="about-me__body">
          <p>
            I am currently studying to become a full stack web/ application
            developer through the University of Richmonds Full Stack Developer
            program. I have a bachelors degree in Political Science with a minor
            in Computer Science.
          </p>
          <p>
            Programming has become a great passion of mine since starting this
            journey and cannot wait to learn more!
          </p>
        </div>

        <img
          src="https://ca.slack-edge.com/T018K7Y3AJD-U019D89V0U8-23ea2a8d63d1-72"
          alt="Meet Baxter"
          className="about-me__img"
        />
      </section>
      {/* <Footer /> */}
    </h1>
  );
}
