import React, { Component } from 'react';
import Header from '../components/Header';
import Navigation from './Navigation';
import About from './About';
import Wedding from '../components/Wedding';
import Gallery from '../components/Gallery';
import Travel from '../components/Travel';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import '../styles/main.scss';

class Application extends Component {
  constructor (props) {
    super(props)
    const navOptions = ['About', 'Wedding', 'Gallery', 'Travel & Activities'];
    let url = '';
    if (typeof window !== 'undefined') {
      url = window.location.href;
    }
    let pathname = 'About';
    if (url.indexOf('#') !== -1) {
      const urlString = url.split('#');
      pathname = urlString[urlString.length - 1];
    }
    this.state = {
      selectedNav: pathname,
      navOptions: navOptions,
      imagesLoaded: 0,
      totalImages: 1,
    }
    this.setNav = this.setNav.bind(this);
    this.addImages = this.addImages.bind(this);
  }

  setNav (e) {
    const selectedOption = e.target.innerHTML;
    const firstWord = selectedOption.split(' ');
    this.setState({
      selectedNav: firstWord[0],
    });
    const element = document.getElementById(firstWord);
    if (element) element.scrollIntoView({behavior: 'smooth'});
  }

  addImages () {
    const { imagesLoaded } = this.state;
    this.setState({
      imagesLoaded: imagesLoaded + 1,
    })
  }

  render () {
    const { navOptions, selectedNav, imagesLoaded, totalImages } = this.state;
    return (
      <div className='layout'>
        <div style={imagesLoaded >= totalImages ? { display: 'none' } : { display: 'block' }}>
          <Loading />
        </div>
        <div style={imagesLoaded >= totalImages ? { display: 'block' } : { display: 'none' }}>
          <Header addImages={this.addImages} />
          <Navigation setNav={this.setNav} navOptions={navOptions} />
          {selectedNav === 'About' && <About />}
          {selectedNav === 'Wedding' && <Wedding />}
          {selectedNav === 'Gallery' && <Gallery />}
          {selectedNav === 'Travel' && <Travel />}
          {(selectedNav !== 'Gallery' && selectedNav !== 'Travel') && <Footer />}
        </div>

      </div>
    );
  }
}
export default Application;
