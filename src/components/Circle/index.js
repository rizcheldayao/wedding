import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Circle extends Component {
  render () {
    const { value, label } = this.props;
    return (
      <div className='circle'>
        <p><span className='val'>{`${value}`}</span><br /> {`${label}`}</p>
      </div>
    );
  }
}

Circle.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string
};

export default Circle;
