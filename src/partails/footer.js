import React from 'react';

import logo from '../img/mf-logo-white.svg'
const Footer = (props) => {
  return (
    <footer className="section is-primary is-small has-text-centered">
      <div className="container is-narrow">
        <div className="logo"><img src={logo} alt="Tarun Sharma | Designer, Front-end Developer &amp; Mentor" height="48" /></div>
        <div className="columns is-centered">
          <div className="column is-one-third">
            <h1 className="title is-size-4-touch">Living, learning, &amp; leveling up one day at a time.</h1>
            <div className="g-ytsubscribe" data-channelid="UCS1NeZF0Or2E1RAV9hQJz3g" data-layout="default" data-count="default"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;