import React, { Component } from 'react';

class BottomFooter extends Component {
  render() {
    return (
<footer className="pv4 ph3 ph5-ns tc bt b--black-10">
  <a className="link grow dim dib h2 w2 br-100 mr3" href="http://github.com/Shaverda" target="_blank">
    <img src="/images/github.svg" alt="github icon"/>
  </a>
  <a className="link dim grow gray dib h2 w2 br-100 mr3 " href="https://stackoverflow.com/users/5687882/tumult" target="_blank">
    <img src="/images/stackoverflow.svg" alt="stack icon"/>
  </a>
  <a className="link dim grow gray dib br-100 h2 w2 mr3 " href="https://www.linkedin.com/in/shelbyhaverda/" target="_blank">
    <img src="/images/linkedin.svg" alt="linkedin icon"/>
  </a>
</footer>
    );
  }
}

export default BottomFooter;