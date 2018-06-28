import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  constructor (props) {
    super(props);
    const { navOptions } = this.props;
    const list = navOptions.map((option) => {
      const str = option.split(' ');
      return <li key={option}><NavLink exact={true} to={`/${str[0]}`}>{str[0]}</NavLink></li>
    });
    this.state = {
      list: list,
    }
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
  navOptions: PropTypes.array,
};

export default Navigation;
