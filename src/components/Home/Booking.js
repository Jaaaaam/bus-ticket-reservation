import React, { Fragment } from 'react';
import '../../assets/scss/components/bookings.scss';

function Booking() {
  return (
    <Fragment>
      <div className="bookings-header flex-center">How to Book</div>
      <div className="bookings">
        <div className="bookings-section">
          <div className="round-border orange-border flex-center center">
            <i class="fas fa-search-location"></i>
          </div>
          <div className="bookings-step">
            1. Choose your trip
          </div>
        </div>
        <div className="bookings-section">
          <div className="round-border orange-border flex-center center">
            <i class="fab fa-wpforms"></i>
          </div>
          <div className="bookings-step">
            2.  Fill up your details
          </div>
        </div>
        <div className="bookings-section">
          <div className="round-border orange-border flex-center center">
            <i class="fas fa-money-check-alt"></i>
          </div>
          <div className="bookings-step">
            3. Confirm your payment
          </div>
        </div>
      </div>
    </Fragment>
      )
}

export default Booking;