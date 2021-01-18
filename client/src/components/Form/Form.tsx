import React from 'react';

import styles from './Form.module.scss';


const Form: React.FC = () => {
	return (
		<form className={styles.form}>
      <input className={styles.input} type="text" name="email" placeholder="Ваш e-mail..." />
      <button className={`${styles.btn} btn pink-btn`} type="submit">
        ок
      </button>
    </form>
	)
};

export default Form;