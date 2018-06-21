import React, { Component } from 'react';
// import Amazon from '../images/amazon-logo.svg';
// import Target from '../images/target.svg';
import Data from '../data/data.json';

class Registry extends Component {
  render () {
    return (
      <div className='registry'>
        <h3>{Data.registryTitle}</h3>
        <p>Gift registry details coming soon!</p>
        {/* <p>{Data.registrySubtitle}</p>
        <p>{Data.thankYou}</p> */}
        {/* <div className='registry-stores'>
          <div className='registry-square'>
            <img className='registry-amazon' src={Amazon} alt='Amazon logo' />
          </div>
          <div className='registry-square'>
            <img className='registry-target' src={Target} alt='Target logo' />
          </div>
          <div className='registry-square'>
            <img className='registry-amazon' src={Amazon} alt='Amazon logo' />
          </div>
        </div> */}
      </div>
    );
  }
}
export default Registry;
