import React from 'react';

function Layout(props) {
    return (
        <>
            <header
                style={{
                    margin: '10px',
                    display: 'flex',
                    border: '1px, solid red',
                }}
            >
                항상 출력되는 머릿글 입니다.
            </header>
            {props.children}
        </>
    );
}

export default Layout;
