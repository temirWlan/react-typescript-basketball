import React from 'react';

import Header from '../components/Header';
import Page from '../components/Page';
import Footer from '../components/Footer';


const HomePage: React.FC = () => {
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