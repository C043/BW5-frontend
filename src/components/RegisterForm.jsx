import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";



const RegisterForm = () => {


    const [username, setUsername] = useState('');
    const [nome, setNome] = useState('');
    const [cognome, setCognome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fetchPost = async () => {
        try {
            const dataForm = {
                username,
                nome,
                cognome,
                email,
                password
            }

            const response = await fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataForm)
            });

            if (!response.ok) {
                throw new Error('errore nella richiesta');
            }

            const data = await response.json();
            console.log("risposta dal server: ", data);
            console.log("dati inviati: ", dataForm);
        } catch (error) {
            console.log("errore: ", error);
        }
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        fetchPost();
        console.log("HANDLE SUBMIT")
    }

    return (

        <Form className="mt-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    type="text"
                    name="nome"
                    placeholder="Enter name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cognome">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                    type="text"
                    name="cognome"
                    placeholder="Enter surname"
                    value={cognome}
                    onChange={(e) => setCognome(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign in!
            </Button>
        </Form>

    )
}
export default RegisterForm;