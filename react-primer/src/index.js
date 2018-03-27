import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const { Provider, Consumer } = React.createContext(0);
export { Consumer };

let value = 0;

setInterval(
  () =>
    ReactDOM.render(
      <Provider value={value++}>
        <App start={12} />
      </Provider>,
      document.getElementById('root')
    ),
  1000
);
