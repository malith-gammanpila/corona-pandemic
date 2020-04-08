import ApiHandler from './ApiHandler.api';

export const currentStatsApi = async data => {
	try {
		const resp = await ApiHandler.get('get-current-statistical');
		return resp;
	} catch (e) {
		console.log(e);
		throw e.response;
	}
};
