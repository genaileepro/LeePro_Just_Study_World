import { useState } from 'react';
import './App.css';

function App() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    // ID 필드가 변경될 경우
    const onIdChageHandler = (event) => {
        setId(event.target.value);
    };
    // PW 필드가 변경될 경우
    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const clickHandler = function () {
        alert(
            `고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${password} 입니다.`
        );
        setId('');
        setPassword('');
    };

    return (
        <>
            <div>
                아이디 :{' '}
                <input type="text" value={id} onChange={onIdChageHandler} />
            </div>
            <div>
                비밀번호 :{' '}
                <input
                    type="password"
                    value={password}
                    onChange={onPasswordChangeHandler}
                />
            </div>
            <div>
                <button onClick={clickHandler}>로그인</button>
            </div>
        </>
    );
}

export default App;
