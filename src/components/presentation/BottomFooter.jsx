import React, { Component } from 'react';

class BottomFooter extends Component {
  render() {

    var icons = {
      height:"2.5rem",
      width:"2.5rem"
    }
    return (
<footer className="pv4 ph3 ph5-ns tc bt b--black-10">
  <a style={icons} className="link grow dim dib br-100 mr3" href="http://github.com/Shaverda" target="_blank">
    <img src="/images/github.svg" alt="github icon"/>
  </a>
  <a style={icons} className="link dim grow gray dib br-100 mr3 " href="https://www.linkedin.com/in/shelbyhaverda/" target="_blank">
    <img src="/images/linkedin.svg" alt="linkedin icon"/>
  </a>
  <a style={icons} className="link dim grow gray dib br-100 mr3 " href="https://stackoverflow.com/users/5687882/tumult" target="_blank">
    <img src="/images/stackoverflow.svg" alt="stack icon"/>
  </a>
</footer>
    );
  }
}

export default BottomFooter;