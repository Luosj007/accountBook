import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import sum from '@/test'
import { RouterProvider } from 'react-router-dom';
import router from './router' 

const Result = sum(1,3)
console.log(Result);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);