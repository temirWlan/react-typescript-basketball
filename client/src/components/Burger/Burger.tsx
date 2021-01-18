import React from 'react';
import styled from 'styled-components';

import styles from './Burger.module.scss';

type Props = {
  type: boolean;
}

const Burger: React.FC = () => {
  return (
    <button className={`${styles.burger} btn`}>
    	<span />
    </button>
  )
}

export default Burger;

