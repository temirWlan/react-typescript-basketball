import React from 'react';

import { IArticle } from '../../common/interfaces';
import styles from './Article.module.scss';


const Article: React.FC<IArticle> = ({ title, date, time, imgSrc }) => {
	return (
		<article className={styles.article}>
			<a className={styles.link} href="#">
				<div className={styles.row}>
					<div className={styles.text}>
						<h5 className={styles.title}>
							{title}
						</h5>
						<div className={`${styles.desc} desc-text`}>
							<span className={styles.date}>{date}</span>,&nbsp;
							<span className={styles.time}>{time}</span>
						</div>
					</div>
					<div className={`${styles.preview} image-block`}>
						<img src={imgSrc} alt="preview" />
					</div>
				</div>
			</a>
		</article>
	)
};

export default Article;