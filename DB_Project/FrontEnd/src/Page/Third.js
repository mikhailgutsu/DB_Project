import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import pickImage from "./assets/third.jpg";

function Third() {
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
            const response = await fetch('http://localhost:8081/getdata3');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div style={containerStyle}>
            <h1>Data from MySQL Table</h1>
            <table border="1" style={{ color: 'white', textAlign: 'center' }}>
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
    );
}
export default Third;
