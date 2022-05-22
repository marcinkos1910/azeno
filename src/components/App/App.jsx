import { useEffect } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Header from '../Header/Header';
import useCookie from '../hooks/useCookies';
import Profile from '../Profile/Profile';
import Train from '../Train/Train';

import './App.scss';
import { navigate } from '@storybook/addon-links';

function App() {
    // const [cookie, setCookie] = useCookie('token_auth');

    // useEffect(() => {
    //     if (cookie === undefined) {
    //         navigate('/login');
    //     }
    // }, [])

    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Routes>
                            {/* {cookie ? 
                            <> */}
                            <Route path="/" element={<Link to="/profile">Profile</Link>} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/train" element={<Train />} />
                            {/* </> 
                            : 
                            <> */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            {/* </>} */}
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
