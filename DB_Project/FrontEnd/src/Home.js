import React from 'react';
import pickImage from './assets/pick.jpg';
import { Link, useNavigate } from 'react-router-dom'

function Home() {
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
        top: '500px',
        left: '720px',
    };

    const headingStyle = {
        fontSize: '80px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };
    const headingStyleTMP = {
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };
    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Hotel</h1>
            <h2 style={{...headingStyleTMP, color: 'white', fontWeight: 'bold'}}>Press "Next" to continue...</h2>
            <Link to="/Welcome" className='btn btn-default border bg-light text-decoration-none' style={buttonStyle}> Next </Link>
        </div>
    );
}

export default Home;