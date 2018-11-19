import React, { Component } from 'react';
import blogData from '../data/blogData.js';
import BlogItem from './blogitem';

class Blogs extends Component {
  constructor(props){
    super(props)
    this.state = {data : blogData.items};
  }

  render() {
    return (
      <div>
      <section className="section projects is-medium is-white has-text-centered">
        <div className="container is-narrow">
          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Blogs Posted on Medium</h1>
          <h2 className="subtitle is-size-5-desktop">Here are a few recent Tuts. Want to see more? <a href="mailto:tarun.softengg@gmail.com">Email me</a>.</h2>
          <div className="g-ytsubscribe" data-channelid="UCS1NeZF0Or2E1RAV9hQJz3g" data-layout="default" data-count="default"></div>

          <div className="project-grid">
            <div className="columns is-multiline is-mobile">
              {this.state.data.map((object, i) => <BlogItem data={object} key={i} />)}
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}
export default Blogs;


