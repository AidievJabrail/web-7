
import React, { useState } from 'react';

const Hello = () => {
    const [answer, setAnswer] = useState('');

    const printHello = async () => {
        try {
            const resp = await fetch('http://localhost:8082/get');
            if (resp.ok == false) {
                throw new Error('Нет соединения');
            }
            const data = await resp.text();
            setAnswer(data);
        } catch (error) {
            setAnswer('Нет соединения с сервером');
        }
    };

    return (
        <div>
            <h2>Микросервис Hello</h2>
            <p>Ответ: {answer}</p>
            <button onClick={printHello}>Вывод</button>
            
        </div>
    );
};

export default Hello;
    