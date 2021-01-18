import React from 'react';

import { IBet } from '../../common/interfaces';
import styles from './PageCard.module.scss';


const PageCard: React.FC<IBet> = (props) => {
	const { title, date, time, description, caption, imgSrc, alt, coefficient } = props;

	return (
		<li className={styles.card}>
			<div className={styles.wrapper}>
				<div className={styles.row}>
					<div className={`${styles.imageBlock} image-block`}>
						<img src={imgSrc} alt={alt} />
					</div>
					<div className={styles.content}>
						<div className={styles.inner}>
							<h4 className={styles.title}>
								{title}
							</h4>
							<div className={`${styles.text} desc-text`}>
								<span className="card__date">{date}</span>&nbsp;
								<span className="card__time">{time}</span>
								&nbsp;&nbsp;|&nbsp;&nbsp;
								<span className="card__description">{description}</span>
							</div>
							<div className={styles.desc}>
								<h6 className={styles.caption}>
									{caption}
								</h6>
								<button className="btn blue-btn">{coefficient}</button>
							</div>
						</div>
					</div>
					<div className={styles.column}>
						<h6 className={styles.caption}>
							{caption}
						</h6>
						<button className="btn pink-btn">Выбрать!</button>
					</div>
				</div>
			</div>	
		</li>
	)
};

PageCard.defaultProps = {
	title: 'Title',
	date: 'date',
	time: 'time',
	description: 'description',
	caption: 'caption',
	imgSrc: 'imgSrc',
	alt: 'alt',
	coefficient: 1
};

export default PageCard;