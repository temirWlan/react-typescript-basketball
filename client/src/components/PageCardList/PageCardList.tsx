import React, { useState } from 'react';

import PageCard from '../PageCard';

import { IBet } from '../../common/interfaces';
import eurobasket from '../../assets/img/card-images/eurobasket.png';
import styles from './PageCardList.module.css';


const PageCardList: React.FC = () => {
	const [cards, setCards] = useState<IBet[]>([
		{
			id: Math.random().toString(),
			title: 'Аль-Ахли - Аль-Джаиш',
			date: '10.01.2017',
			time: '17:15',
			description: 'Чемпионат Катара. Мужчины.',
			caption: 'Аль-Джаиш лидер:',
			imgSrc: eurobasket,
			alt: 'eurobasket',
			coefficient: 1.5
		},
		{
			id: Math.random().toString(),
			title: 'Аль-Ахли - Аль-Джаиш',
			date: '10.01.2017',
			time: '17:15',
			description: 'Чемпионат Катара. Мужчины.',
			caption: 'Аль-Джаиш лидер:',
			imgSrc: eurobasket,
			alt: 'eurobasket',
			coefficient: 1.5
		}
	]);
	return (
		<ul className={styles.cardList}>
			{
				cards.map(card => <PageCard key={card.id} {...card} />)
			}
		</ul>
	)
};

export default PageCardList;