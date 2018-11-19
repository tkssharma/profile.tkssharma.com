import React, { Component } from 'react';
import js from '../img/js.png';
import react from '../img/react.png';
import angular from '../img/angular.png';
import vue from '../img/vuejs.png';
import node from '../img/nodejs.png';
import native from '../img/native.png';
import electron from '../img/electron.png';
import web from '../img/web.png';

class Training extends Component {

  render() {
    return (
      <div>
        <section className="section projects is-medium is-white has-text-centered">
          <div className="container is-narrow">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Providing Training on all different technologies</h1>
            <h2 className="subtitle is-size-5-desktop">Here are a few recent Trainings. Want to see more? <a href="mailto:tarun.softengg@gmail.com">Email me</a>.</h2>
            <div className="g-ytsubscribe" data-channelid="UCS1NeZF0Or2E1RAV9hQJz3g" data-layout="default" data-count="default"></div>

            <div className="project-grid">
              <div className="columns is-multiline is-mobile">
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <figure className="image is-3by2"><img className="project-thumb" src={js} alt="" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">javascript Training All in One</h1>
                      <a className="button is-primary is-outlined is-rounded" href="" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span></a>
                    </figcaption>
                    <div className="overlay"></div>
                  </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <figure className="image is-3by2"><img className="project-thumb" src={react} alt="" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">React Redux Training</h1>
                      <a className="button is-primary is-outlined is-rounded" href="" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span></a>
                    </figcaption>
                    <div className="overlay"></div>
                  </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <figure className="image is-3by2"><img className="project-thumb" src={angular} alt="" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">Angular >= 5 Training</h1>
                      <a className="button is-primary is-outlined is-rounded" href="" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span></a>
                    </figcaption>
                    <div className="overlay"></div>
                  </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <figure className="image is-3by2"><img className="project-thumb" src={vue} alt="" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">Vue JS Training</h1>
                      <a className="button is-primary is-outlined is-rounded" href="" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span></a>
                    </figcaption>
                    <div className="overlay"></div>
                  </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <figure className="image is-3by2"><img className="project-thumb" src={node} alt="" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">Node JS Training</h1>
                      <a className="button is-primary is-outlined is-rounded" href="" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span></a>
                    </figcaption>
                    <div className="overlay"></div>
                  </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <figure className="image is-3by2"><img className="project-thumb" src={native} alt="" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">React Native Training</h1>
                      <a className="button is-primary is-outlined is-rounded" href="" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span></a>
                    </figcaption>
                    <div className="overlay"></div>
                  </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <figure className="image is-3by2"><img className="project-thumb" src={electron} alt="" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">Electron Training</h1>
                      <a className="button is-primary is-outlined is-rounded" href="" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span></a>
                    </figcaption>
                    <div className="overlay"></div>
                  </figure>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <figure className="image is-3by2"><img className="project-thumb" src={web} alt="" />
                    <figcaption>
                      <h1 className="title is-size-5 is-size-4-widescreen">Web Developer Training</h1>
                      <a className="button is-primary is-outlined is-rounded" href="" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span></a>
                    </figcaption>
                    <div className="overlay"></div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Training;


