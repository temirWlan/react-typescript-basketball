import React from 'react';

import arrowLink from '../../assets/img/icons/arrow-link.svg';
import styles from './Footer.module.scss';


const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className="container">
					<div className={styles.row}>
						<div className={styles.text}>
							<p className={styles.paragraph}>
								© 2011-2016 «Всё про спорт.ру»
							</p>
							<p className={styles.paragraph}>
								Любое использование материалов приветствуется при гиперссылке
							</p>
						</div>
						<a className={`${styles.link} image-block`} href="#" target="_blank">
							<img src={arrowLink} alt="link" />
						</a>
					</div>
				</div>
			</div>
		</footer>	
	)
};

export default Footer;