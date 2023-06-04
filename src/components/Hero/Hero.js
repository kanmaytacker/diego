import React from 'react';
import LottieAnimation from '../Animation';
import HeroAnimation from '../../assets/LandingAnimation.json';
import Button from '../Button/Button';
import * as styles from './Hero.module.css';

const Hero = () => {
  return (
    <div>
      <div className={styles.textContainer}>
        <h1>Join competitions near you</h1>
        <p>Discover hidden gems and win prizes</p>
        <div>
          <Button level="primary" disabled>
            Coming soon.
          </Button>
        </div>
      </div>
      <div className={styles.hero}>
        <LottieAnimation lotti={HeroAnimation} />
      </div>
    </div>
  );
};

export default Hero;
