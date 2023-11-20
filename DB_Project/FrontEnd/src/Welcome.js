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
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };
    const buttonStyle2 = {
        position: 'absolute',
        top: '270px',
        left: '695px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };
    const buttonStyle3 = {
        position: 'absolute',
        top: '155px',
        left: '695px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };
    const buttonStyle4 = {
        position: 'absolute',
        top: '495px',
        left: '700px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    return (
        <div style={containerStyle}>
            <Link to="/Page/First" className='btn btn-default text-decoration-none' style={{...buttonStyle1, fontSize: '24px', fontWeight: 'bold', color: 'white'}}> Level 1 </Link>
            <Link to="/Page/Second" className='btn btn-default text-decoration-none' style={{...buttonStyle2, fontSize: '24px', fontWeight: 'bold', color: 'white'}}> Level 2 </Link>
            <Link to="/Page/Third" className='btn btn-default text-decoration-none' style={{...buttonStyle3, fontSize: '24px', fontWeight: 'bold', color: 'white'}}> Level 3 </Link>
            <Link to="/Home" className='btn btn-default text-decoration-none' style={{...buttonStyle4, fontSize: '24px', fontWeight: 'bold', color: 'white'}}> Home </Link>

        </div>
    );

}
export default Welcome;