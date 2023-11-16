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

    const buttonStyle1 = {
        position: 'absolute',
        top: '565px',
        left: '990px',
    };
    const buttonStyle2 = {
        position: 'absolute',
        top: '500px',
        left: '990px',
    };
    const buttonStyle3 = {
        position: 'absolute',
        top: '160px',
        left: '710px',
    };

    return (
        <div style={containerStyle}>
            <Link to="/Welcome" className='btn btn-default border bg-light text-decoration-none' style={buttonStyle1}>  Lavel 1  </Link>
            <Link to="/Welcome" className='btn btn-default border bg-light text-decoration-none' style={buttonStyle2}>  Lavel 2  </Link>
            <Link to="/Welcome" className='btn btn-default   text-decoration-none' style={buttonStyle3}> Lavel 3 </Link>
        </div>
    );
}
export default Welcome;