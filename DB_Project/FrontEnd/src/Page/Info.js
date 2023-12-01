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

    const buttonStyle = {
        position: 'absolute',
        top: '90px',
        left: '380px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle2 = {
        position: 'absolute',
        top: '90px',
        left: '490px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle3 = {
        position: 'absolute',
        top: '90px',
        left: '600px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle4 = {
        position: 'absolute',
        top: '90px',
        left: '710px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle5 = {
        position: 'absolute',
        top: '90px',
        left: '810px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle6 = {
        position: 'absolute',
        top: '240px',
        left: '375px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle7 = {
        position: 'absolute',
        top: '240px',
        left: '467px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle8 = {
        position: 'absolute',
        top: '240px',
        left: '559px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle9 = {
        position: 'absolute',
        top: '240px',
        left: '710px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle10 = {
        position: 'absolute',
        top: '240px',
        left: '810px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
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
            <Link to="/Page/Rooms/fst" className='btn btn-default text-decoration-none' style={buttonStyle}> 1 </Link>
            <Link to="/Page/Rooms/scnd" className='btn btn-default text-decoration-none' style={buttonStyle2}> 2 </Link>
            <Link to="/Page/Rooms/third" className='btn btn-default text-decoration-none' style={buttonStyle3}> 3 </Link>
            <Link to="/Page/Rooms/fr" className='btn btn-default text-decoration-none' style={buttonStyle4}> 4 </Link>
            <Link to="/Page/Rooms/five" className='btn btn-default text-decoration-none' style={buttonStyle5}> 5 </Link>
            <Link to="/Page/Rooms/fst" className='btn btn-default text-decoration-none' style={buttonStyle6}> 6 </Link>
            <Link to="/Page/Rooms/scnd" className='btn btn-default text-decoration-none' style={buttonStyle7}> 7 </Link>
            <Link to="/Page/Rooms/third" className='btn btn-default text-decoration-none' style={buttonStyle8}> 8 </Link>
            <Link to="/Page/Rooms/fr" className='btn btn-default text-decoration-none' style={buttonStyle9}> 9 </Link>
            <Link to="/Page/Rooms/five" className='btn btn-default text-decoration-none' style={buttonStyle10}> 10 </Link>
        </div>
    );
}

export default Info;