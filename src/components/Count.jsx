import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(''); 

    const fetchCount = async () => {
        try {
            const resp = await fetch('http://localhost:8081/count');
            const data = await resp.text();
            setCount(data);
        } catch (error) {
            setCount('Нет соединения с сервером');
        }
    };

    const incrementCount = async () => {
        try {
            const resp1 = await fetch('http://localhost:8081/count', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ count: inputValue }), 
            });
            if (resp1.ok == false) {    
                throw new Error('Нет соединения');
            }
            setInputValue(''); 
            
        } catch (error) {
            setCount('Введите число')
        }
    };

    return (
        <div>
            <h2>Микросервис Count</h2>
            
            <input 
                type="number" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Введите число" 
            />
            <button onClick={incrementCount}>Увеличить счётчик</button>
            <p>Ответ: {count}</p>
            <button onClick={fetchCount}>Вывести значение счетчика</button> 
        </div>
    );
};

export default Count;