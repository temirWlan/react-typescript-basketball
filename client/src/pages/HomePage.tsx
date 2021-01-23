import React, { useEffect } from 'react';

import Header from '../components/Header';
import Page from '../components/Page';
import Footer from '../components/Footer';


const HomePage: React.FC = () => {
	const getData = async (url: string) => {
			const res = await fetch(url);

			if (!res.ok) {
				throw new Error(`Could not fetch data on ${url} address`);
			}

			return await res.json();
	};

	useEffect(() => {
		getData('https://desolate-hamlet-47440.herokuapp.com/api/cards')
			.then(res => console.log(res));
	});

	return (
		<div className="wrapper">
    	<div className="wrapper__content">
    		<Header />
    		<Page />
    	</div>
      <Footer />
    </div>
	)
};

export default HomePage;