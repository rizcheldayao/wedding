import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Countdown from '../containers/Countdown';
import Data from '../data/data.json';
import EngagementPic from '../images/header.jpg';

class Header extends Component {
  constructor (props) {
    super(props);
    this.addImages = this.addImages.bind(this);
    this.state = {
      image: null,
    }
  }

  componentWillMount () {
    const img = new Image();
    img.src = EngagementPic;
    this.setState({ image: img });
  }

  addImages () {
    this.props.addImages();
  }

  render () {
    return (
      <div className='header'>
        <img alt='Header image' src={this.state.image.src} onLoad={this.addImages}/>
        <div className='header-details'>
          <h1>{Data.headerTitle}</h1>
          <Countdown />
          <h1>{Data.headerDate}</h1>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  addImages: PropTypes.func,
};

export default Header;
