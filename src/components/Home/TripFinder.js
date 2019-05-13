import React from 'react';
import '../../assets/scss/components/tripfinder.scss';

function TripFinder() {
  return (
    <div className="trip-finder">
      <div className="trip-finder-content">
        <div className="trip-finder-header">Bus trips just got smarter!</div>
        <div className="trip-finder-subheader">Your real-time bus booking in the Philippines</div>
        <div className="trip-finder-form">
          <div className="input-wrapper">
            <span><i class="fas fa-search"></i></span>
            <input className="full-width" placeholder="Search for trips"></input>
          </div>
          <div className="input-wrapper">
            <span><i class="fas fa-calendar-alt"></i></span>
            <input className="full-width" placeholder="Departure Date"></input>
          </div>
          <div className="flex">
          <div className="input-wrapper">
            <span><i class="fas fa-user-friends"></i></span>
            <input className="full-width" placeholder="Passengers"></input>
          </div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripFinder;