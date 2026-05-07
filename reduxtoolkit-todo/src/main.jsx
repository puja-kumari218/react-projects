import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import main App component
import './index.css';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { store } from './app/store'; // Import store
// Render the App component wrapped in the Redux Provider
ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}> {/* Provide the Redux store to the application */}
 <App /> {/* Render the main App component */}
 </Provider>,
);