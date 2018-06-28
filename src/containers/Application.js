import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from './Navigation';
import About from './About';
import Wedding from '../components/Wedding';
import Gallery from '../components/Gallery';
import Travel from '../components/Travel';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import '../styles/main.scss';

class Application extends Component {
  constructor (props) {
    super(props)
    const navOptions = ['About', 'Wedding', 'Gallery', 'Travel & Activities'];
    this.state = {
      navOptions: navOptions,
      loading: true,
    }
  }

  componentDidMount() {
    setTimeout(function() { this.setState({loading: false}); }.bind(this), 500);
  }

  render () {
    const { navOptions, loading } = this.state;
    return (
      <div className='layout'>
        <div style={!loading ? { display: 'none' } : { display: 'block' }}>
          <Loading />
        </div>
        <div style={!loading ? { display: 'block' } : { display: 'none' }}>
          <Header />
          <Router>
            <div>
              <Navigation navOptions={navOptions}/>
              <Route exact={true} path="/" component={() =>(<div><About/><Footer/></div>)} />
              <Route path="/About" component={() =>(<div><About/><Footer/></div>)} />
              <Route path="/Wedding" component={() =>(<div><Wedding/><Footer/></div>)} />
              <Route path="/Gallery" component={Gallery} />
              <Route path="/Travel" component={Travel} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
export default Application;
