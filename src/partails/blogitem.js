

import React from 'react';
import chronicled1 from '../img/project-chronicled1.jpeg';


const startUpProjects = (props) => {
  if (props.data.title) {
    const url = props.data.thumbnail ? props.data.thumbnail : chronicled1
    return (
      <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
      <figure className="image is-3by2"><img className="project-thumb" src={url} alt="" />
        <figcaption>
          <h1 className="title is-size-5 is-size-4-widescreen">{props.data.title}</h1><a className="button is-primary is-outlined is-rounded" href={props.data.link} target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span></a>
        </figcaption>
        <div className="overlay"></div>
      </figure>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default startUpProjects;

