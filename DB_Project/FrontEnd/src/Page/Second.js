import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import pickImage from "./assets/second.jpg";

function Second() {
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

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8081/getdata2');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const buttonStyle = {
        position: 'absolute',
        top: '390px',
        left: '1225px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle2 = {
        position: 'absolute',
        top: '390px',
        left: '180px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    return (
        <div>
            <div style={containerStyle}>
                <h1>Nr. 11-20 :</h1>
                <table style={{ color: 'white', textAlign: 'center' }}>
                    <thead>
                    <tr>
                        <th>Nr</th>
                        <th>Rooms</th>
                        <th>WC</th>
                        <th>State</th>
                        <th>WIFI</th>
                        <th>BED</th>
                        <th>TV</th>
                        <th>Balcony</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                        <tr key={item.Nr}>
                            <td>{item.Nr}</td>
                            <td>{item.Rooms}</td>
                            <td>{item.WC}</td>
                            <td>{item.State}</td>
                            <td>{item.WIFI}</td>
                            <td>{item.BED}</td>
                            <td>{item.TV}</td>
                            <td>{item.Balcony}</td>
                            <td>{item.Price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Link to="/Page/Third" className='btn btn-default text-decoration-none' style={buttonStyle}> Next </Link>
            <Link to="/Page/First" className='btn btn-default text-decoration-none' style={buttonStyle2}> Back </Link>
        </div>
    );
}
export default Second;
