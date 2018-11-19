import React, { Component } from 'react';
// import axios from 'axios';
import YouTubeitem from './youTubeItem';
import data from '../data/appData';


class YouTube extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data.items }
  }
  /*
  componentWillMount() {
    axios.get('https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCS1NeZF0Or2E1RAV9hQJz3g&maxResults=50&key=CCCCCCCCCCCCCC').then(res => {
      console.log(res);
      this.setState({ data: res.data.items });
    });
  } */

  render() {
    return (
      <div>
      <section className="section projects is-medium is-white has-text-centered">
        <div className="container is-narrow">
          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Tutorials Posted on YouTube</h1>
          <h2 className="subtitle is-size-5-desktop">Here are a few recent Tuts. Want to see more? <a href="mailto:tarun.softengg@gmail.com">Email me</a>.</h2>
          <div className="g-ytsubscribe" data-channelid="UCS1NeZF0Or2E1RAV9hQJz3g" data-layout="default" data-count="default"></div>

          <div className="project-grid">
            <div className="columns is-multiline is-mobile">
              {this.state.data.map((object, i) => <YouTubeitem data={object} key={i} />)}
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}
export default YouTube;


