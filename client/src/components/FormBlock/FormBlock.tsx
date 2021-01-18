import React from 'react';

import Form from '../Form';

import styles from './FormBlock.module.css';


const FormBlock: React.FC = () => {
	return (
		<div className={styles.formBlock}>
      <div className={styles.text}>
        <h2 className={styles.title}>
          Оформить подписку
        </h2>
        <h4 className={styles.subtitle}>
          на бесплатные прогнозы
        </h4>
      </div>
      <Form />
    </div>
	)
};

export default FormBlock;