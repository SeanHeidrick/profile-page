import React from "react";
import "./resume.scss";

export const Resume = () => <Content />;
const Content = () => {
  return (
    <>
      <main className="resume-app">
        <header className="resume-header">
          <div className="name">
            <h1>
              <span className="first"> Sean </span>Heidrick
            </h1>
            <p>
              <i>Software Engineer</i>
            </p>
          </div>
          <div className="info">
            <p>a: Kansas City, MO</p>
            <a href="tel:9132069358">p: (913)-206-6358</a>
            <a href="mailto:seanheidrick1@gmail.com">
              e: SeanHeidrick1@gmail.com
            </a>
            <a href="https://github.com/SeanHeidrick">
              w: Github.com/SeanHeidrick
            </a>
          </div>
        </header>
        <main className="resumeInfo">
          <section className="objective">
            <h2 className="section-title">Objective</h2>
            <p>
              Self-taught individual with leadership experience and a passion
              for learning looking to transition into a career in web
              development. Has two years of experience with JavaScript and is
              searching for a team to contribute to while growing technical
              skills in other languages and frameworks.
            </p>
          </section>

          <section className="skills">
            <h2 className="section-title">Skills</h2>
            <ul className="skills-list">
              <li>
                <h4>HTML5 - Web Development</h4>
                <hr className="html" />
              </li>
              <li>
                <h4>CSS-SASS</h4>
                <hr className="css" />
              </li>
              <li>
                <h4>JavaScript</h4>
                <hr className="javascript" />
              </li>
              <li>
                <h4>React - JSX</h4>
                <hr className="react" />
              </li>
            </ul>
          </section>

          <section className="coding-experience">
            <h2 className="section-title">Coding Experience</h2>
            <div>
              <h4 className="project-title">Website</h4>
              <p>
                Developing a consumer-facing website using React and
                React-Router. This affiliate website will assist musicians so
                they may find and purchase their dream guitar pedal; built using
                performant and reliable vanilla JS design patterns within a
                React environment.
              </p>
            </div>
            <div>
              <h4 className="project-title">Todo List</h4>
              <p>
                Built an accessible productivity application using React and
                React hooks for application state management. Users are able to
                add, edit, and remove items in their lists. Future features
                include custom theming and user sign-up to persist data.
              </p>
            </div>
            <div>
              <h4 className="project-title">Calculator</h4>
              <p>
                Created an accessible productivity application using HTML and
                vanilla javascript. Users are able to calculate using the user
                interface, or their native keyboard. Future features include
                various themes so users can customize their experience.
              </p>
            </div>
          </section>

          <section className="work-experience">
            <h2 className="section-title">Work Experience</h2>
            <div>
              <b className="job-title">
                <p>SH Paint</p>
                <p>Contractor</p>
                <p>03/01/2016</p>
              </b>
              <ul className="specs">
                <li>Owned and operated SH Painting.</li>
                <li>Created and maintained relationships with clients</li>
                <li>Ran day to day operations</li>
                <li>Delegated responsibilities to team</li>
              </ul>
            </div>
            <div>
              <b className="job-title">
                <p>EPure LLC</p>
                <p>Retail Manager</p>
                <p>04/01/2014</p>
              </b>
              <ul className="specs">
                <li>Daily operations supervision</li>
                <li>Implemented inventory management system</li>

                <li>
                  Increased revenue by 50% in <br />
                  first year
                </li>
              </ul>
            </div>
            <div>
              <b className="job-title">
                <p>Marten's Flatwork</p>
                <p>Team Lead</p>
                <p>07/01/2012</p>
              </b>
              <ul className="specs">
                <li>Client services operator</li>
                <li>Lead crew of 3</li>
                <li>Concrete finisher</li>
              </ul>
            </div>
          </section>

          <section className="education">
            <h2 className="section-title">Education</h2>

            <div>
              <p>Johnson County (JCCC)</p>
              <p>Bachelor's of Business Administration (60hrs)</p>
              <p>2006 - 2008</p>
            </div>
          </section>
        </main>
      </main>
    </>
  );
};
