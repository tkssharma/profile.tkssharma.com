import React from 'react';
import './main.css';
import YouTube from './partails/youtube';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Talks from './partails/talks';
import Blogs from './partails/blogs';
import Training from './partails/Training';
import Footer from './partails/footer';
import Navbar from './partails/navBar';

const App = () => (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/youtube" component={YouTube} />
          <Route exact path="/talks" component={Talks} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/training" component={Training} />
          <Footer/>
        </div>
      </Router>
);
export default App;
