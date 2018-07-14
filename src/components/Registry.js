import React, { Component } from 'react';
import Data from '../data/data.json';

class Registry extends Component {
  render () {
    return (
      <div className='registry'>
        <h3>{Data.registryTitle}</h3>
        <p>{Data.registrySubtitle}</p>
        <p>{Data.thankYou}</p>
        <div className='registry-stores'>
          <a href="https://www.target.com/gift-registry/gift/dayao-wood-wedding" target="_blank">Target</a>
          <a href="https://www.amazon.com/wedding/share/wood-wedding" target="_blank">Amazon</a>
          <a href="https://www.crateandbarrel.com/gift-registry/rizchel-dayao-and-oliver-wood/r5871264" target="_blank">Crate & Barrel</a>
        </div>
      </div>
    );
  }
}
export default Registry;
