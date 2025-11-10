import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import sum from '@/test'
import router from './router' 
import { Provider } from 'react-redux'
import store from './store'

// 导入定制文件
import './theme.css'

const Result = sum(1,3)
console.log(Result);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);