import React from 'react'
import { useState } from 'react'

export const Content = () => {
    const [name, setName] = useState('Can')
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Ali', 'Veli', 'Kırkdokuzelli']
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }
    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
    }

    const handleClick2 = () => {
        console.log(count)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>HandleClick</button>
            <button onClick={handleClick2}>HandleClick2</button>
        </main>
    )
}

export default Content