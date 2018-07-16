import React, { Component } from 'react';
import Airplane from '../images/svg/airplane.svg';
import Car from '../images/svg/car.svg';
import Hotel from '../images/svg/hotel.svg';

class Travel extends Component {
  render () {
    return (
      <div className='travel' id='Travel'>
        <h1>Travel</h1>
        <h4>Plan some fun in Napa!</h4>
        <section className="travel-accommodations">
          <article className="travel-column">
            <img src={Airplane} />
            <p>There are several airports you can fly into! San Francisco International Airport is about 60 miles from Napa Valley. SFO would be a good option if you'd like to check out the city and bay area. Oakland International Airport is another (possibly cheaper and less crowded) option. If you're flying domestically, you can fly into a smaller, closer airport, Sonoma County airport. </p>
          </article>
          <article className="travel-column">
            <img src={Car} />
            <p>Once you arrive at the airport, you have multiple options to travel to wine country! Depending on the airport, you can take a shuttle or even a ferry to Napa. For more information or to book transporation services, go to this <a href='https://www.visitnapavalley.com/plan/transportation/' target="_blank">website</a>. Another option for transportation is to rent a car or order a ride sharing service like Uber or Lyft. </p>
          </article>
          <article className="travel-column">
            <img src={Hotel} />
            <p>We have reserved a block of rooms at the DoubleTree by Hilton Hotel & Spa Napa Valley. The rate is $153.00 per night (not including tax). You can go <a href='http://group.doubletree.com/DayaoWoodWedding' target="_blank">here</a> to reserve your room at this rate. The hotel is about 19 miles away from the venue. You're more than welcome to stay at other hotels in Napa or Sonoma, as well!</p>
          </article>
        </section>
        <h2>More coming soon!</h2>
      </div>
    );
  }
}
export default Travel;
