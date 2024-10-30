// index.js
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App/App';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(<App />);
