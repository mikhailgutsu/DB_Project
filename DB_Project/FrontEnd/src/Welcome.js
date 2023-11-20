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
        top: '385px',
        left: '695px',
    };
    const buttonStyle2 = {
        position: 'absolute',
        top: '270px',
        left: '695px',
    };
    const buttonStyle3 = {
        position: 'absolute',
        top: '155px',
        left: '695px',
    };

    return (
        <div style={containerStyle}>
            <Link to="/Welcome" className='btn btn-default text-decoration-none' style={{...buttonStyle1, fontSize: '24px', fontWeight: 'bold', color: 'black'}}> Level 1 </Link>
            <Link to="/Welcome" className='btn btn-default text-decoration-none' style={{...buttonStyle2, fontSize: '24px', fontWeight: 'bold', color: 'black'}}> Level 2 </Link>
            <Link to="/Welcome" className='btn btn-default text-decoration-none' style={{...buttonStyle3, fontSize: '24px', fontWeight: 'bold', color: 'black'}}> Level 3 </Link>
        </div>
    );

}
export default Welcome;