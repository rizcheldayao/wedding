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
          <button><a href="https://registry.theknot.com/rizchel-dayao-oliver-wood-april-2019-ca/23670959" target="_blank">View home fund and wedding registry</a></button>
        </div>
      </div>
    );
  }
}
export default Registry;
