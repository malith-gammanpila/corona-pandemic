import React, { useEffect } from 'react';
import HomeContainer from '../Containers/HomeContainer';

const Home = () => {
	const { data, getStats } = HomeContainer.useContainer();

	useEffect(() => {
		getStats();
	}, []);

	return <p>{JSON.stringify(data || '')}</p>;
};

export default Home;
