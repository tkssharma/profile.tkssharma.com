
import React from 'react';
import avatar from '../img/pascal-avatar.png';
import logo from '../img/p_logo.png';
import logo1 from '../img/p_logo1.png';
import logo2 from '../img/p_logo2.png'

const startUpProjects = (props) => {
  return (
    <div>
      <section className="section is-medium is-primary has-text-centered is-long-ish">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Startup Projects</h1>
              <h2 className="subtitle is-size-5-desktop">I'm a bit of a digital product junky. Over the years, I've  developed few application of my own.</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section startups has-text-centered">
        <div className="container is-narrow">
          <div className="startup-grid">
            <div className="columns is-centered level">
              <div className="column level-item">
                <div className="box"><img className="logo" src={logo} alt="" />
                  <p>bla bla | scooty application for Vehicle Rental</p><a className="link has-text-primary" href="http://blascooty.herokuappcom">blascooty.herokuappcom</a>
                </div>
              </div>
              <div className="column level-item">
                <div className="box"><img className="logo" src={logo1} alt="" />
                  <p>Code fellows - Platform for developers to share Tech Videos</p><a className="link has-text-primary" href="http://hackio.herokuapp.com">http://hackio.herokuapp.com</a>
                </div>
              </div>
              <div className="column level-item">
                <div className="box"><img className="logo" src={logo2} alt="" />
                  <p>UBMAS- application for food Lovers all over the world</p><a className="link has-text-primary" href="http://foodix.herokuapp.com">http://foodix.herokuapp.com       </a>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title is-spaced">Interested in collaborating or investing?</h1>
              <h2 className="subtitle is-size-5-desktop">I’m always open to discussing product design work or partnership opportunities.</h2><a className="button is-primary is-outlined is-rounded is-medium" href="mailto:tarun.softengg@gmail.com">Start a conversation</a>
            </div>
          </div>
        </div>
      </section>
      <section className="section testimonials is-medium is-white has-text-centered">
        <div className="container is-narrow">
          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Testimonials</h1>
          <h2 className="subtitle is-size-5-desktop">People I've worked with have said some nice things...</h2>
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className="testimonials-carousel">
                <div className="testimonial-block"><img className="avatar" src={avatar} alt="" />
                  <p className="quote">Tarun, It was a real pleasure to work with and we look forward to working with him again. He’s the kind of developer you can trust with a project from start to finish.”</p>
                  <h1 className="title is-size-5">Shardul</h1>
                  <h2 className="subtitle is-size-6">UHG India</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 

export default startUpProjects;