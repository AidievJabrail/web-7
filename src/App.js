import React from 'react';
import Hello from './components/Hello';
import Query from './components/Query';
import Count from './components/Count';
import './App.css'

const App = () => {
    return (
        <div>
            <h1>Микросервисы    </h1>
            <Hello />
            <Query />
            <Count />
        </div>
    );
};

export default App;