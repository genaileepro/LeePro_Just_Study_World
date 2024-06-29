import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const PlusCount = () => {
        const plusCount = count + 1;
        setCount(plusCount);
    };
    return (
        <div>
            <div>{count}</div>
            <div>
                <button
                    onClick={() => {
                        const minusCount = count - 1;
                        setCount(minusCount);
                    }}
                >
                    -1
                </button>
                <button onClick={PlusCount}>+1</button>
            </div>
        </div>
    );
}

export default App;
