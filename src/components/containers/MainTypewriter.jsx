import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';

class MainTypewriter extends Component {
  render() {
    return (
      <article className="vh-50 dt w-100">
        <div className="dtc v-mid tc ph3 ph4-l">
          <TypeWriter typing={1} minDelay={49}  maxDelay={50}>
            <h1 className="f6 f2-m f-subheadline-l fw6 tc">Welcome To My <a className='link' href='/portfolio'><span className='gray hover-dark-pink grow dib'>Portfolio.</span></a></h1>
          </TypeWriter>
        </div>
      </article>
    );
  }
}

export default MainTypewriter;