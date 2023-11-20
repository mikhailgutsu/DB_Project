import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import pickImage from "./assets/first.jpg";

function First() {
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

    return(
        <div style={containerStyle}>

        </div>
    )
}
export default First;
