import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Experience from './experience';
import Design from './design';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="portfolio/" element={<App/>}/>
      <Route path="portfolio/experience" element={<Experience/>}/>
      <Route path="portfolio/design" element={<Design/>}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();

