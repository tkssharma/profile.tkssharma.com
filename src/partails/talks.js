import React, { Component } from 'react';
// import axios from 'axios';
class YouTube extends Component {
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
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Talks on Different Forums</h1>
            <h2 className="subtitle is-size-5-desktop">Here are a few recent Conf & Meetup groups i have attended. Want to see me as speaker <a href="mailto:tarun.softengg@gmail.com">Email me</a>.</h2>
            <div className="project-grid">
              <div className="columns is-multiline is-mobile">
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Tarun Sharma, <a href="https://twitter.com/hashtag/MEAN?src=hash&amp;ref_src=twsrc%5Etfw">#MEAN</a> &amp; <a href="https://twitter.com/hashtag/JS?src=hash&amp;ref_src=twsrc%5Etfw">#JS</a> developer, shares his thoughts about ES6 &amp; <a href="https://twitter.com/hashtag/babel?src=hash&amp;ref_src=twsrc%5Etfw">#babel</a> - Follow him on Twitter - <a href="https://twitter.com/tkssharma?ref_src=twsrc%5Etfw">@tkssharma</a> for more updates <a href="https://twitter.com/hashtag/FEConfIN?src=hash&amp;ref_src=twsrc%5Etfw">#FEConfIN</a> <a href="https://t.co/5iKsEQBFJc">pic.twitter.com/5iKsEQBFJc</a></p>&mdash; TO THE NEW (@TOTHENEW) <a href="https://twitter.com/TOTHENEW/status/832824339728855040?ref_src=twsrc%5Etfw">February 18, 2017</a></blockquote>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">My flash talk on Graphql <a href="https://twitter.com/ReactJS_News?ref_src=twsrc%5Etfw">@ReactJS_News</a>  <a href="https://twitter.com/reactjs?ref_src=twsrc%5Etfw">@reactjs</a> <a href="https://twitter.com/js_channel?ref_src=twsrc%5Etfw">@js_channel</a> <a href="https://t.co/pubJpYwVvT">pic.twitter.com/pubJpYwVvT</a></p>&mdash; Tarun Sharma (@tkssharma) <a href="https://twitter.com/tkssharma/status/754009965145251840?ref_src=twsrc%5Etfw">July 15, 2016</a></blockquote>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">My Talk on React Redux , Managing state using Redux for React apps  <a href="https://twitter.com/Srijan?ref_src=twsrc%5Etfw">@Srijan</a> <a href="https://twitter.com/reactjsdelhi?ref_src=twsrc%5Etfw">@reactjsdelhi</a> <a href="https://t.co/dAsMvY8W88">pic.twitter.com/dAsMvY8W88</a></p>&mdash; Tarun Sharma (@tkssharma) <a href="https://twitter.com/tkssharma/status/762536772140171264?ref_src=twsrc%5Etfw">August 8, 2016</a></blockquote>
                </div>

                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/ReactJS?src=hash&amp;ref_src=twsrc%5Etfw">#ReactJS</a> &amp; <a href="https://twitter.com/hashtag/Redux?src=hash&amp;ref_src=twsrc%5Etfw">#Redux</a> make one sweet pair! Join us at <a href="https://t.co/peCxkWkvXT">https://t.co/peCxkWkvXT</a> &amp; explore how they impact future <a href="https://twitter.com/hashtag/webapps?src=hash&amp;ref_src=twsrc%5Etfw">#webapps</a>. <a href="https://t.co/20hhTK3Nu6">pic.twitter.com/20hhTK3Nu6</a></p>&mdash; SRIJAN (@Srijan) <a href="https://twitter.com/Srijan/status/765563784631033856?ref_src=twsrc%5Etfw">August 16, 2016</a></blockquote>
                </div>

                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/tkssharma?ref_src=twsrc%5Etfw">@tkssharma</a> is presenting at <a href="https://twitter.com/hashtag/DrupalCampGoa?src=hash&amp;ref_src=twsrc%5Etfw">#DrupalCampGoa</a> today. Our resident JavaScript expert will be talking about &quot;Reusing Components between Angular, React, Vue, Ember, and Web-Components&quot;. Join him in the Beta room-3:30- 4:50. <a href="https://t.co/2k2VqF8kY1">https://t.co/2k2VqF8kY1</a> <a href="https://t.co/LP1VxYdyNO">pic.twitter.com/LP1VxYdyNO</a></p>&mdash; SRIJAN (@Srijan) <a href="https://twitter.com/Srijan/status/972406714875154432?ref_src=twsrc%5Etfw">March 10, 2018</a></blockquote>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/tkssharma?ref_src=twsrc%5Etfw">@tkssharma</a> is presenting at <a href="https://twitter.com/hashtag/DrupalCampGoa?src=hash&amp;ref_src=twsrc%5Etfw">#DrupalCampGoa</a> today. Our resident JavaScript expert will be talking about &quot;Reusing Components between Angular, React, Vue, Ember, and Web-Components&quot;. Join him in the Beta room-3:30- 4:50. <a href="https://t.co/2k2VqF8kY1">https://t.co/2k2VqF8kY1</a> <a href="https://t.co/LP1VxYdyNO">pic.twitter.com/LP1VxYdyNO</a></p>&mdash; SRIJAN (@Srijan) <a href="https://twitter.com/Srijan/status/972406714875154432?ref_src=twsrc%5Etfw">March 10, 2018</a></blockquote>
                </div>
                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I just published Learning Typescript in Depth  <a href="https://t.co/ZbHQrRaIBB">https://t.co/ZbHQrRaIBB</a></p>&mdash; Tarun Sharma (@tkssharma) <a href="https://twitter.com/tkssharma/status/1056612096945860613?ref_src=twsrc%5Etfw">October 28, 2018</a></blockquote>
                </div>

                <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                  <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I just published “Understanding @ViewChildren, <a href="https://twitter.com/viewchild?ref_src=twsrc%5Etfw">@ViewChild</a>, <a href="https://twitter.com/ContentChildren?ref_src=twsrc%5Etfw">@ContentChildren</a> and <a href="https://twitter.com/contentchild?ref_src=twsrc%5Etfw">@ContentChild</a>” <a href="https://t.co/fGZqfrwcvQ">https://t.co/fGZqfrwcvQ</a></p>&mdash; Tarun Sharma (@tkssharma) <a href="https://twitter.com/tkssharma/status/957834401995407361?ref_src=twsrc%5Etfw">January 29, 2018</a></blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default YouTube;


