import React from 'react';

import Breadcrumbs from '../Breadcrumbs'; 
import PageCardList from '../PageCardList';
import FormBlock from '../FormBlock';
import Articles from '../Articles';

import styles from './Page.module.scss';


const Page: React.FC = () => {
	return (
		<main className={styles.page}>
			<div className={styles.wrapper}>
				<div className="container">
					<Breadcrumbs />
					<div className={styles.row}>
						<div className={styles.column}>
							<PageCardList />
              <button className={`${styles.btn} btn pink-btn`}>
                Показать еще ставки...
              </button>
						</div>
            <div className={styles.column}>
              <FormBlock />
              <Articles />
            </div>
					</div>
          <div className={styles.text}>
            <h4 className={styles.title}>
              Бесплатные прогнозы на баскетбол
            </h4>
            <div className={styles.description}>
              <p className={styles.paragraph}>
                Беттинг становится все более привлекательной сферой для постоянного или дополнительного заработка на территории России и стран СНГ. И это вполне естественно! Если 
                человек отлично владеет темой и умеет предсказывать исход будущей игры в любом виде спорта исходя из опыта, а не эмоций, то из него выйдет отличный гандикаппер.
              </p>
              <p className={styles.paragraph}>
                Баскетбол является одним из самых популярных командных видов спорта, так что многие игроки предпочитают делать ставки онлайн именно на игры НБА. Портал Kush v 
                Sporte является сообществом для игроков и прогнозистов, где каждый может почитать платные и бесплатные прогнозы на баскетбол, написать свой аналитический материал 
                и делиться выигрышными стратегиями ставок.
              </p>
            </div>
          </div>
				</div>
			</div>
		</main>
	)
};

export default Page;