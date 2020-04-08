import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Components/Home';
import HomeContainer from './Containers/HomeContainer';

function App() {
	return (
		<HomeContainer.Provider>
			<Home />
		</HomeContainer.Provider>
	);
}

export default App;
