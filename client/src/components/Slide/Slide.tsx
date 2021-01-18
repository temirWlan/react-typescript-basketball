import React, { useState } from 'react';

import styles from './Slide.module.scss';

interface IProps {
  imgSrc: string;
  alt: string;
}

const Slide: React.FC<IProps> = ({ imgSrc, alt }) => {
  return (
    <div className={styles.slide}>
      <img src={imgSrc} alt={alt} />
    </div>
  )
};

export default Slide;
