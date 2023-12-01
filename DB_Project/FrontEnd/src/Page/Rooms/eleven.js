import React, {useEffect, useState} from 'react';
import pickImage from "./assets/ab.jpg";

function Eleven()
{


    const containerStyle = {
        background: `url(${pickImage})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white', // Добавил белый цвет текста для читаемости на фоне изображения
    };

    return(
        <div>
            <div style={containerStyle}>

            </div>
        </div>
    );

}
export default Eleven;