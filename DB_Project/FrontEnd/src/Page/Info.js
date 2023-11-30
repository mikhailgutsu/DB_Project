import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import pickImage from "./assets/info.jpg";
function Info() {
    const [data, setData] = useState([]);
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

    const position = {
        position: 'absolute',
        top: '30px',
        left: '30px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const position1 = {
        position: 'absolute',
        top: '50px',
        left: '70px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8081/getdata4');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return(
        <div>
            <div style={containerStyle}>
                <h1 style={{...position, fontSize: '16px' }}>Information Table :</h1>
                <table style={{...position1, color: 'white', textAlign: 'center' }}>
                    <thead>
                    <tr>
                        <th style={{ fontSize: '14px' }}>Nr</th>
                        <th style={{ fontSize: '14px' }}>Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                        <tr key={item.Nr}>
                            <td style={{ fontSize: '12px' }}>{item.Nr}</td>
                            <td style={{ fontSize: '12px' }}>{item.Score}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Info;