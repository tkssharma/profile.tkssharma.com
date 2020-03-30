import React from 'react';
import hero from './img/hero.png';

import avatar from './img/me.png';
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
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Developer 💻, Trainer 👨&zwj;🏫, Publisher 📕 &amp; Mentor 🗣</h1>
              <h2 className="subtitle is-size-4-desktop">I design and code beautifully simple things 🎉, and I love  what I do.</h2><img alt="" className="avatar" src={avatar}/>
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
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Hi, I’m Tarun.😎I help people to make better world by good apps</h1>
            <h2 className="subtitle is-size-5-desktop"><p>I am Publisher, Trainer  Developer, working on Enterprise and open source Technologies JavaScript frameworks (React  Angular 2.x), I work with client side and server side javascript programming which includes node js or any other frameworks
              Currently working with JavaScript framework React & Node js 🚀 with Graphql 🎉</p>
              
             <p>I am passionate Javascript developer writing end to end application using javascript using React, Angular 🅰️, Vue JS with Node JS </p></h2>
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
                <p className="list-title has-text-primary has-text-weight-normal">Things I enjoy code build and deploy:</p>
                <p>Enterprise Web, Mobile, Apps</p>
                <p className="list-title has-text-primary has-text-weight-normal">Code.Build.Deploy:</p>
                <ul>
                  <li>Java/Node JS for APIs</li>
                  <li>Node - Express and Hapi</li>
                  <li>React/Angular/Vue JS</li>
                  <li>ES6/ES7 with Typescript</li>
                  <li>GraphQL for APIs</li>
                  <li>All JS Frameworks at server & Client </li>
                  <li>code and deploy on Cloud platforms</li>
                  <li>AWS /Docker/ K8S</li>
                  <li>Building and deploying Microservices</li>
                </ul>
              </div>
              <div className="column">
                <figure className="image"><img alt="" className="is-skill-icon" src={frontend}/></figure>
                <h1 className="title is-size-4 is-spaced">Front-end Developer</h1>
                <p>I enjoy bringing ideas on browser.</p>
                <p className="list-title has-text-primary has-text-weight-normal">My Seetings with Browser:</p>
                <p>HTML, CSS, Sass, Responsive Designs</p>
                <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                <ul>
                  <li>VS Code</li>
                  <li>React/Angular/Vue JS</li>
                  <li>Redux/Vuex/RX Observables/ngrx</li>
                  <li>Ionic/React Native</li>
                  <li>Responsive Frameworks</li>
                  <li>Flexbox/CSS Grid</li>
                  <li>PWA</li>
                  <li>Responsive Layouts</li>
                  <li>Grid Library and Charts</li>
                </ul>
              </div>
              <div className="column"> 
                <figure className="image"><img className="is-skill-icon" src={mentor} alt=""/></figure>
                <h1 className="title is-size-4 is-spaced">Mentor</h1>
                <p>I genuinely love Teaching.</p>
                <p className="list-title has-text-primary has-text-weight-normal">Where I teach:</p>
                <p>YouTube or Webinars</p>
                <p className="list-title has-text-primary has-text-weight-normal">Mentor Stats:</p>
                <ul>
                  <li>7 years experience</li>
                  <li>30 ✨ short courses @tkssharma</li>
                  <li>5 ✨ bootcamps Organised</li>
                  <li>1500 📺 YouTube Videos</li>
                  <li>100+ 📚 Medium Blogs @tkssharma</li>
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
            <div className="column level-item"><a className="button is-primary is-outlined is-rounded is-medium" target="_blank" href="https://tinyletter.com/tkssharma">Subscribe</a></div>
          </div>
        </div>
      </div>
    </section>
</div>
);


export default Home;


