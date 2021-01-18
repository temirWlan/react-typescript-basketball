import React, { useState } from 'react';

import Slide from '../Slide';
import { Button } from '../../common/styled';

import eurobasket from '../../assets/img/icons/eurobasket.svg';
import fibaEuroCup from '../../assets/img/icons/fiba-euro-cup.svg';
import usa from '../../assets/img/icons/usa.svg';
import styles from './Slider.module.scss';

const Slider: React.FC = () => {
  const [items, setItems] = useState([
    {
      id: Math.random().toString(),
      imgSrc: eurobasket,
      alt: 'eurobasket'
    },
    {
      id: Math.random().toString(),
      imgSrc: fibaEuroCup,
      alt: 'fiba-euro-cup'
    },
    {
      id: Math.random().toString(),
      imgSrc: usa,
      alt: 'usa'
    },
  ]);

  return (
    <div className={styles.slider}>
      <div className={styles.contaner}>
        <div className={styles.wrapper}>
          {
            items.map(item => <Slide key={item.id} {...item} />)
          }
        </div>
        <div className={styles.btns}>
          <Button id={styles.prev} className={styles.btn}>
            <span className="arrow" />
          </Button>
          <Button id={styles.next} className={styles.btn}>
            <span className="arrow" />
          </Button>
        </div>
      </div>
    </div>
  )
};

export default Slider;
