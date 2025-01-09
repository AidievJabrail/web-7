import React, { useState } from 'react';

const Query = () => {
    const [name, setName] = useState('');
    const [greet, setGreet] = useState('');

    const printName = async () => {
        try {
            const resp = await fetch(`http://localhost:8083/api/user?name=${name}`);
            if (resp.ok == false) {
                throw new Error('Нет соединения');
            }
            const data = await resp.text();
            setGreet(data);
        } catch (error) {
            setGreet('Нет соединения с сервером');
        }
    };

    return (
        <div>
            <h2>Микросервис Query</h2>
            <input
                 type="text"
                placeholder="Введите имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Ответ: {greet}</p>
            <button onClick={printName}>Вывод</button>
        </div>
    );
};

export default Query;