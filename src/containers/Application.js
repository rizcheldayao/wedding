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
      loading: true,
    }
    this.setNav = this.setNav.bind(this);
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

  componentDidMount() {
    setTimeout(function() { this.setState({loading: false}); }.bind(this), 500);
  }

  render () {
    const { navOptions, selectedNav, loading, imagesLoaded, totalImages } = this.state;
    return (
      <div className='layout'>
        <div style={!loading ? { display: 'none' } : { display: 'block' }}>
          <Loading />
        </div>
        <div style={!loading ? { display: 'block' } : { display: 'none' }}>
          <Header />
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
