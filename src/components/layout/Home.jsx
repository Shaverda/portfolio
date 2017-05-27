import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TopHeader from "../presentation/TopHeader";
import BottomFooter from "../presentation/BottomFooter";

import MainTypewriter from '../containers/MainTypewriter';
import PortfolioGallery from '../containers/PortfolioGallery';
import AboutMe from '../containers/AboutMe';
import Portfolio from './Portfolio';

class Home extends Component {
  render() {
    return (
      <div>
        <TopHeader />
        <Switch>
          <Route exact path='/' component={MainTypewriter} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/about' component={AboutMe} />
        </Switch>
        <BottomFooter />
      </div>
    );
  }
}

export default Home;