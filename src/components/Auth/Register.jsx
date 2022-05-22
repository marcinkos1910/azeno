import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function submitForm(event) {
        event.preventDefault(); //prevent page reloading
        console.log(email, password, remeber)
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Register:</Card.Title>
                    <Form onSubmit={submitForm} className={"d-flex flex-column"}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmail}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  value={password} onChange={handlePassword}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
            </Card.Body>
        </Card>
    );
}

export default Register;
