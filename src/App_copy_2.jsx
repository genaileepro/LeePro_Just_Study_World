import React, { useState } from 'react';

function App() {
    const [obj, setObj] = useState({
        name: 'daeseong',
        age: 2222,
    });
    return (
        <div>
            <div>{obj.name}</div>
            <button
                onClick={() => {
                    obj.name = 'LeePro';
                    const obj2 = { ...obj };
                    setObj(obj2);
                }}
            >
                변경!
            </button>
        </div>
    );
}

export default App;
