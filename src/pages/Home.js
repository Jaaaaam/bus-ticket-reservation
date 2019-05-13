import React, {Fragment} from 'react';
import banner from '../assets/images/banner.jpg'
import TripFinder from '../components/TripFinder'

function Home() {
  return (
    <Fragment>
      <div
        className="banner-image"
        style={{
          height: '600px',
          background: `linear-gradient(194deg, rgba(242, 150, 35, 0.90), rgba(51, 51, 51, 0.70) 37%), url(${banner})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}>
        <TripFinder />
      </div>
    </Fragment>
  )
}

export default Home;