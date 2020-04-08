import axios from 'axios';

const ApiHandler = axios.create({
	baseURL: 'https://hpb.health.gov.lk/api',
	headers: { 'Content-Type': 'application/json' },
});

export default ApiHandler;
