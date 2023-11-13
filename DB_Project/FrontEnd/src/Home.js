import React from 'react';
import pickImage from './assets/pick.jpg';

function Home() {
    const handleButtonClick = (buttonText) => {
        alert(`Вы нажали на кнопку: ${buttonText}`);
    };

    const containerStyle = {
        background: `url(${pickImage})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center', // Центрировать содержимое по горизонтали
        alignItems: 'center', // Центрировать содержимое по вертикали
        flexDirection: 'column', // Разместить элементы вертикально
    };

    const buttonStyle = {
        position: 'absolute',
        top: '100px',
        left: '50px',
    };

    const headingStyle = {
        fontSize: '36px', // Размер шрифта
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Home</h1>
            <button
                style={buttonStyle}
                onClick={() => handleButtonClick("Кнопка 1")}
            >
                Hotel
            </button>
        </div>
    );
}

export default Home;