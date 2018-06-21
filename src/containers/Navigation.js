import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navigation extends Component {
  constructor (props) {
    super(props);
    this.setNav = this.setNav.bind(this);
    const { navOptions } = this.props;
    const list = navOptions.map((option) => {
      const anchor = option.split(' ');
      return <li key={option} onClick={this.setNav}><a href={`#${anchor[0]}`}>{option}</a></li>
    });
    this.state = {
      list: list,
    }
  }

  setNav (option) {
    this.props.setNav(option);
  }

  render () {
    const { list } = this.state;
    return (
      <div className='navigation'>
        <nav className='navbar' role='navigation'>
          <ul>
            {list}
          </ul>
        </nav>
      </div>
    );
  }
}

Navigation.propTypes = {
  setNav: PropTypes.func,
  navOptions: PropTypes.array,
};

export default Navigation;
