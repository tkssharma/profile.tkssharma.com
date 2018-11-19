import React from 'react';
import hero from './img/hero.png';

import avatar from './img/mf-avatar.svg';
import designer from './img/icon-designer.svg';
import frontend from './img/icon-frontend.svg';
import mentor from './img/icon-mentor.svg';
import Work from './partails/work';
import Projects from './partails/projects';

const Home = () => (
  <div>
    <section className="hero is-white has-text-centered">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Developer, Trainer, Publisher &amp; Mentor</h1>
              <h2 className="subtitle is-size-4-desktop">I design and code beautifully simple things, and I love what I do.</h2><img alt="" className="avatar" src={avatar}/>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container"><img className="is-bottom" src={hero} alt=""/></div>
      </div>
    </section>
    <section className="section is-medium is-primary has-text-centered is-long">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Hi, I’m Tarun. Nice to meet you.</h1>
            <h2 className="subtitle is-size-5-desktop"><p>I am Publisher, Trainer  Developer, working on Enterprise and open source Technologies JavaScript frameworks (React  Angular 2.x) and J2EE web frameworks, Spring, Spring MVC, Struts, Hibernate, Web service Jax-WS, Jax-RS and having experience of working Enterprise SOA architecture and different tools from IBM and Oracle.
              Currently working with JavaScript framework Angular Node js.</p>
              
             <p>I am passionate Javascript developer writing end to end application using javascript using React, Angular, Vue JS with Node JS </p></h2>
          </div>
        </div>
      </div>
    </section>
    <section className="section skills has-text-centered">
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <div className="column">
                <figure className="image"><img className="is-skill-icon" src={designer} alt=""/></figure>
                <h1 className="title is-size-4 is-spaced">developer</h1>
                <p>I write code in different technologies</p>
                <p className="list-title has-text-primary has-text-weight-normal">Things I enjoy designing:</p>
                <p>Enterprise Web, Mobile, Apps</p>
                <p className="list-title has-text-primary has-text-weight-normal">Design Tools:</p>
                <ul>
                  <li>Java</li>
                  <li>Node JS</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Typescript</li>
                  <li>ES6/ES7</li>
                  <li>webpack & toolings</li>
                  <li>REST api development using Java/Node JS</li>
                </ul>
              </div>
              <div className="column">
                <figure className="image"><img alt="" className="is-skill-icon" src={frontend}/></figure>
                <h1 className="title is-size-4 is-spaced">Front-end Developer</h1>
                <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <p className="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
                <p>HTML, Pug, Slim, CSS, Sass, Less</p>
                <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                <ul>
                  <li>VS Code</li>
                  <li>React/Angular/Vue JS</li>
                  <li>Redux/Vuex/RX Observables</li>
                  <li>Ionic</li>
                  <li>React Native</li>
                  <li>Bootstrap</li>
                  <li>Flexbox/SCSS</li>
                  <li>CSS Grid</li>
                  <li>Github/Gitlab/bitbucket</li>
                  <li>Electron</li>
                </ul>
              </div>
              <div className="column"> 
                <figure className="image"><img className="is-skill-icon" src={mentor} alt=""/></figure>
                <h1 className="title is-size-4 is-spaced">Mentor</h1>
                <p>I genuinely care about people, and love helping new designers work on their craft.</p>
                <p className="list-title has-text-primary has-text-weight-normal">Where I teach:</p>
                <p>Designlab’s UX Academy</p>
                <p className="list-title has-text-primary has-text-weight-normal">Mentor Stats:</p>
                <ul>
                  <li>7 years experience</li>
                  <li>30 short courses</li>
                  <li>5 bootcamps Organised</li>
                  <li>1500 YouTube Videos</li>
                  <li>100+ Medium Blogs</li>
                  <li>100+ Webinar Sessions Live</li>
                  <li>100+ students Trained</li>
                  <li>900+ mentor sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Work/>
    <Projects />
    <section className="section call-to-action is-primary has-text-centered">
      <div className="container is-narrow">
        <div className="box">
          <div className="columns level">
            <div className="column level-item">
              <h1 className="title">Start a project</h1>
            </div>
            <div className="column level-item">
              <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
            </div>
            <div className="column level-item"><a className="button is-primary is-outlined is-rounded is-medium" href="mailto:tarun.softengg@gmail.com">Let's do this</a></div>
          </div>
        </div>
      </div>
    </section>
</div>
);


export default Home;


