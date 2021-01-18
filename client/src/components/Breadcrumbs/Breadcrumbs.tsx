import React, { useState } from 'react';

import styles from './Breadcrumbs.module.scss';


interface IBreadcrumb {
	id: string;
	label: string;
	path: string;
}

const Breadcrumbs: React.FC = () => {
	const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([
		{
			id: Math.random().toString(),
			label: 'Прогнозы на теннис',
			path: '#'
		},
		{
			id: Math.random().toString(),
			label: 'Чемнионат мира',
			path: '#'
		}
	]);
	return (
		<ul className={styles.breadcrumbs}>
			{
				breadcrumbs.map(({ id, label, path }) => {
					return (
						<li key={id} className={styles.breadcrumb}>
							<a href={path}>
								{label}
							</a>
						</li>
					)
				})
			}
		</ul>
	)
};

export default Breadcrumbs;