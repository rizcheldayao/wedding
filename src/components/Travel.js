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
            <p>Once you arrive at the airport, you have multiple options to travel to wine country! Depending on the airport, you can take a shuttle or even a ferry to Napa. The website link below has more information about transporation services and options. Another option for transportation is to rent a car or order a ride sharing service like Uber or Lyft. </p>
            <a href='https://www.visitnapavalley.com/plan/transportation/' target="_blank"><button>Visit transportation website</button></a>
          </article>
          <article className="travel-column">
            <img src={Hotel} />
            <p>We have reserved a block of rooms at the DoubleTree by Hilton Hotel & Spa Napa Valley. The rate is $153.00 per night (not including tax). The hotel is about 19 miles away from the venue. You can book your room through the website link below. If you'd like to stay somewhere closer to the venue, the bride and groom will be staying at <a href="https://www.marriott.com/hotels/travel/sfols-the-lodge-at-sonoma-renaissance-resort-and-spa/" target="_blank">The Lodge at Sonoma Renaissance Resort & Spa</a>. You are more than welcome to stay at other hotels or Airbnbs in Napa or Sonoma, as well!</p>
            <a href='http://group.doubletree.com/DayaoWoodWedding' target="_blank"><button>Visit DoubleTree website</button></a>
          </article>
        </section>
        <section className="travel-activities">
          <h3>Things to do</h3>
          <div className="travel-cards">
            <div className="travel-card">
              <p>- San Francisco -</p>
              <p>Some popular attractions in San Francisco include the Golden Gate Bridge, Fisherman's Wharf, Alcatraz Island, Lombard Street, Pier 39, Golden Gate Park, Chinatown, and more! There's also some really good restaurants in SF. Click below to view more.</p>
              <button><a href="https://www.thecrazytourist.com/top-25-things-to-do-in-san-francisco/" target="_blank">View San Francisco Activities</a></button>
            </div>
            <div className="travel-card">
              <p>- Napa Valley/Sonoma -</p>
              <p>There are many wineries and activities to do in the Napa and Sonoma area. Some of my favorite wineries are Castello di Amorosa, V Sattui, Beringer Vineyards, and Domaine Carneros. Click below to view more.</p>
              <button><a href="https://www.visitnapavalley.com/things-to-do/" target="_blank">View Napa Valley/Sonoma Activities</a></button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Travel;
