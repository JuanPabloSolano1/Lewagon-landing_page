import React from 'react';
// import { useEffect } from 'react';

import './Video.css';

export class Video extends React.Component {
  render() {
    return (
      <div className="banner">
        <h1 className="banner-main-title">Programming Series in Amsterdam</h1>
        <p className="banner-title">Join our four week free Online Workshop</p>
        <video
          className="video"
          loop
          muted
          autoPlay
          src={
            'https://res.cloudinary.com/spread-the-love/video/upload/v1590660991/Amsterdam_test_gszi6y.mov'
          }
          preload={'auto'}
          type={'video/mp4'}
        ></video>
      </div>
    );
  }
}
