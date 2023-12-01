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
        left: '745px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle10 = {
        position: 'absolute',
        top: '240px',
        left: '808px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle11 = {
        position: 'absolute',
        top: '398px',
        left: '380px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle12 = {
        position: 'absolute',
        top: '398px',
        left: '485px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle13 = {
        position: 'absolute',
        top: '398px',
        left: '593px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle14 = {
        position: 'absolute',
        top: '398px',
        left: '703px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle15 = {
        position: 'absolute',
        top: '398px',
        left: '805px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle16 = {
        position: 'absolute',
        top: '550px',
        left: '368px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle17 = {
        position: 'absolute',
        top: '550px',
        left: '461px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle18 = {
        position: 'absolute',
        top: '550px',
        left: '552px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle19 = {
        position: 'absolute',
        top: '550px',
        left: '738px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle20 = {
        position: 'absolute',
        top: '550px',
        left: '810px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle21 = {
        position: 'absolute',
        top: '530px',
        left: '1081px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle22 = {
        position: 'absolute',
        top: '420px',
        left: '1081px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle23 = {
        position: 'absolute',
        top: '313px',
        left: '1081px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle24 = {
        position: 'absolute',
        top: '205px',
        left: '1081px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle25 = {
        position: 'absolute',
        top: '105px',
        left: '1081px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle26 = {
        position: 'absolute',
        top: '540px',
        left: '1233px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle27 = {
        position: 'absolute',
        top: '445px',
        left: '1233px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle28 = {
        position: 'absolute',
        top: '355px',
        left: '1233px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle29 = {
        position: 'absolute',
        top: '170px',
        left: '1233px',
        fontSize: '32px',
        color: 'white', // Задает белый цвет текста
        textShadow: '2px 2px 2px black', // Задает черную обводку (тень) текста
    };

    const buttonStyle30 = {
        position: 'absolute',
        top: '98px',
        left: '1233px',
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
            <Link to="/Page/Rooms/six" className='btn btn-default text-decoration-none' style={buttonStyle6}> 6 </Link>
            <Link to="/Page/Rooms/seven" className='btn btn-default text-decoration-none' style={buttonStyle7}> 7 </Link>
            <Link to="/Page/Rooms/eight" className='btn btn-default text-decoration-none' style={buttonStyle8}> 8 </Link>
            <Link to="/Page/Rooms/nine" className='btn btn-default text-decoration-none' style={buttonStyle9}> 9 </Link>
            <Link to="/Page/Rooms/ten" className='btn btn-default text-decoration-none' style={buttonStyle10}> 10 </Link>

            <Link to="/Page/Rooms/eleven" className='btn btn-default text-decoration-none' style={buttonStyle11}> 11 </Link>
            <Link to="/Page/Rooms/twelv" className='btn btn-default text-decoration-none' style={buttonStyle12}> 12 </Link>
            <Link to="/Page/Rooms/tritiin" className='btn btn-default text-decoration-none' style={buttonStyle13}> 13 </Link>
            <Link to="/Page/Rooms/fortiin" className='btn btn-default text-decoration-none' style={buttonStyle14}> 14 </Link>
            <Link to="/Page/Rooms/fiftiin" className='btn btn-default text-decoration-none' style={buttonStyle15}> 15 </Link>
            <Link to="/Page/Rooms/sixtiin" className='btn btn-default text-decoration-none' style={buttonStyle16}> 16 </Link>
            <Link to="/Page/Rooms/seventiin" className='btn btn-default text-decoration-none' style={buttonStyle17}> 17 </Link>
            <Link to="/Page/Rooms/eitiin" className='btn btn-default text-decoration-none' style={buttonStyle18}> 18 </Link>
            <Link to="/Page/Rooms/ninetiin" className='btn btn-default text-decoration-none' style={buttonStyle19}> 19 </Link>
            <Link to="/Page/Rooms/twenty" className='btn btn-default text-decoration-none' style={buttonStyle20}> 20 </Link>

            <Link to="/Page/Rooms/twentyone" className='btn btn-default text-decoration-none' style={buttonStyle21}> 21 </Link>
            <Link to="/Page/Rooms/twentytwo" className='btn btn-default text-decoration-none' style={buttonStyle22}> 22 </Link>
            <Link to="/Page/Rooms/twentythree" className='btn btn-default text-decoration-none' style={buttonStyle23}> 23 </Link>
            <Link to="/Page/Rooms/twentyfour" className='btn btn-default text-decoration-none' style={buttonStyle24}> 24 </Link>
            <Link to="/Page/Rooms/twentyfive" className='btn btn-default text-decoration-none' style={buttonStyle25}> 25 </Link>
            <Link to="/Page/Rooms/twentysix" className='btn btn-default text-decoration-none' style={buttonStyle26}> 26 </Link>
            <Link to="/Page/Rooms/twentyseven" className='btn btn-default text-decoration-none' style={buttonStyle27}> 27 </Link>
            <Link to="/Page/Rooms/twentyeight" className='btn btn-default text-decoration-none' style={buttonStyle28}> 28 </Link>
            <Link to="/Page/Rooms/twentynine" className='btn btn-default text-decoration-none' style={buttonStyle29}> 29 </Link>
            <Link to="/Page/Rooms/thirty" className='btn btn-default text-decoration-none' style={buttonStyle30}> 30 </Link>
        </div>
    );
}

export default Info;