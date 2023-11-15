import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import pickImage from "./assets/pickhotel.jpg";

function Welcome()
{
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
        top: '565px',
        left: '990px',
    };

    return (
        <div style={containerStyle}>
            <Link to="/Welcome" className='btn btn-default border bg-light text-decoration-none' style={buttonStyle}> Next </Link>
        </div>
    );
}
export default Welcome;