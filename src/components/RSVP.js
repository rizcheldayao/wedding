import React, { Component } from 'react';
import Data from '../data/data.json';
import Mail from '../images/mail.svg';

class RSVP extends Component {
  render () {
    return (
      <div className='rsvp'>
        <h3>{Data.rsvpTitle}</h3>
        <p>{Data.rsvpSubtitle}</p>
        <img src={Mail} alt='Mail Image' />
      </div>
    );
  }
}
export default RSVP;
