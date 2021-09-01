import React from 'react';
import ReactDOM from 'react-dom';

//components:
import App from './App';

//redux:
import { Provider } from 'react-redux';

//store:
import { store } from './store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
