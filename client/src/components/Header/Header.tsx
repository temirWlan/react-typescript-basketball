import React from 'react';

import Navbar from '../Navbar';
import Burger from '../Burger';
import Slider from '../Slider/';
import { Button } from '../../common/styled';

import styles from './Header.module.scss';
import logo from '../../assets/img/logo.png';


const Header: React.FC = () => {
  return (
    <header>
    	<div className={styles.wrapper}>
    		<div className={styles.row}>
	    		<div className={`${styles.inner} container`}>
	    			<div className="image-block">
	    				<img src={logo} alt="logo" />
	    			</div>
	    			<Navbar />
	    			<div className={`${styles.burgerMenu} column`}>
	    				<Burger />
	    				<a href="#">еще</a>
	    			</div>
	    		</div>
    		</div>
    		<div className={styles.row}>
    			<div className={`${styles.inner} container`}>
	    			<div className={styles.btns}>
	    				<Button className={`${styles.btn} pink-btn`}>
	    					Сегодня
	    				</Button>
	    				<Button className={`${styles.btn} pink-btn`}>
	    					Завтра
	    				</Button>
	    				<Button className={`${styles.btn} pink-btn`}>
	    					date picker
	    				</Button>
						</div>
						<Slider />
	    		</div>
    		</div>
    	</div>	
    </header>
  )
}

export default Header;
