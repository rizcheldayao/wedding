import React, { Component } from 'react';
import Circle from '../components/Circle';

class Countdown extends Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date('April 19, 2019 17:00:00').getTime(),
      currentTime: new Date().getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      times: [0, 0, 0, 0],
      list: null,
    }
    this.timeSet = this.timeSet.bind(this);
  }

  componentDidMount () {
    setInterval(this.timeSet, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timeSet);
  }

  timeSet () {
    this.setState({
      currentTime: new Date().getTime()
    });
    const timeDifference = this.state.date - this.state.currentTime;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      times: [days, hours, minutes, seconds],
    });
    const arrayOrder = ['days', 'hours', 'minutes', 'seconds'];
    const listView = this.state.times.map((time, index) => {
      return <Circle value={time} label={arrayOrder[index]} key={arrayOrder[index]} />
    });
    this.setState({
      list: listView,
    });
  }

  render () {
    const { list } = this.state;
    return (
      <div className='countdown'>
        {list}
      </div>
    );
  }
}
export default Countdown;
