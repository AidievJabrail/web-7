import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

// Получаем точку вмонтирования нашего приложения
const root = ReactDOM.createRoot(document.getElementById('root'));

// Вызываем метод вмонтирования приложения
root.render(
    <App/>
);
