import { useState } from 'react';
import { createContainer } from 'unstated-next';

import { currentStatsApi } from '../Api/Statistics.api';

const useHome = () => {
	const [data, setData] = useState();

	const getStats = async () => {
		let response = await currentStatsApi();
		setData(response);
	};

	return { data, setData, getStats };
};

const HomeContainer = createContainer(useHome);

export default HomeContainer;
