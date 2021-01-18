import React, { useState } from 'react';

import Article from '../Article';

import { IArticle } from '../../common/interfaces';
import articleImg from '../../assets/img/article-images/1.jpeg';
import styles from './Articles.module.css';


const Articles: React.FC = () => {
	const [articles, setArticles] = useState<IArticle[]>([
		{
			id: Math.random().toString(),
			title: 'НБА. Одно очко Батлера, победы Оклахомы, Орлеана и Миннесоты', 
			date: '7 января 2017', 
			time: '22:15. WTA', 
			imgSrc: articleImg
		},
		{
			id: Math.random().toString(),
			title: 'НБА. Одно очко Батлера, победы Оклахомы, Орлеана и Миннесоты', 
			date: '7 января 2017', 
			time: '22:15. WTA', 
			imgSrc: articleImg
		}
	]);

	return (
		<div className={styles.articles}>
			{
				articles.map(article => <Article key={article.id} {...article} />)
			}
		</div>
	)
};

export default Articles;