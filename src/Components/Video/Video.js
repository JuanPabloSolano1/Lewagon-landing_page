import React from 'react';
// import { useEffect } from 'react';

import './Video.css';

export class Video extends React.Component {
  render() {
    return (
      <div className="banner">
        <h1 className="banner-main-title">
          Programming Series in Le Wagon Amsterdam
        </h1>
        <p className="banner-title">
          Four weeks, Four live lectures and all for free
        </p>
        <video
          className="video"
          loop
          muted
          playsInline
          autoPlay
          src={
            'https://res.cloudinary.com/spread-the-love/video/upload/v1590921104/Le_Wagon_final_s4ch0g.mov'
          }
          preload={'auto'}
          type={'video/mp4'}
        ></video>
      </div>
    );
  }
}
