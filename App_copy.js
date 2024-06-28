import logo from './logo.svg';
import 'App.css';

// 폴더는 소문자로 시작하는 카멜케이스로 시작합니다.
// ↓↓↓↓↓ 아래가 컴포넌트인데 컴포넌트의 이름은 대문자로 작성되어야함 오류배제
function App() {
    // 여기가 자바스크립트를 쓸 수 있는 영역
    // const x =1 ;
    // function name(params){}

    return (
        // HTML 문법과 유사하게 보이는 JSX 문법 => (JavaScript + XML[= HTML]) / 쟉스라고도 함
        // JavaScript 문법을 사용하려면 {}를 활용한다
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
