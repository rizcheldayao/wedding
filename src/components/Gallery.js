import React, { Component } from 'react';
import GalleryLib from 'react-grid-gallery';
import { IMAGES, ENGAGEMENT_PHOTOS } from '../data/gallery';

class Gallery extends Component {
  render () {
    return (
      <div className='gallery' id='Gallery'>
        <h1>Gallery</h1>
        <h4>Dating & Engagement</h4>
        <section className='gallery-images'>
          <GalleryLib images={IMAGES} />
          <GalleryLib images={ENGAGEMENT_PHOTOS} />
        </section>
      </div>
    );
  }
}

export default Gallery;
