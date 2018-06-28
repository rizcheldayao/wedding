import React, { Component } from "react";
import Helmet from 'react-helmet';
import Loading from '../components/Loading';
import Navigation from '../containers/Navigation';
import Header from '../components/Header';
import '../styles/main.scss';

class App extends Component {
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
        <Helmet
            title={'Wood Wedding'}
            meta={[
              { name: 'description', content: 'Wood wedding website' },
              { name: 'keywords', content: 'wood, wedding, oliver wood, rizchel dayao' },
            ]}
        />
        <div style={!loading ? { display: 'none' } : { display: 'block' }}>
          <Loading />
        </div>
        <div style={!loading ? { display: 'block' } : { display: 'none' }}>
          <Header />
          <Navigation navOptions={navOptions}/>
          {this.props.children()}
        </div>
      </div>
    );
  }
}

export default App;
