import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
  render () {
    const { name, img, title } = this.props;
    return (
      <div className='about-person'>
        <div className='about-circle'>
          <img src={img} alt='Wedding party image' />
        </div>
        <div className='about-role'>
          <h4>{title}</h4>
          <p>{name}</p>
        </div>
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
};

export default Person;
