import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Form, Alert } from 'react-bootstrap';


const Home = () => {
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowAlert(true);
    };

    return (
        <Container>

            {/* <Card style={{ width: '18rem' }}> */}
            <Card className='mt-3'>
                <Card.Header as="h5">Welcome</Card.Header>
                <Card.Body>
                    <Card.Title>Home Page</Card.Title>
                    <Card.Text>
                        This is the homepage of our Website. Explore other sections using the navigation above.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Form className='mt-3' onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Subscribe to our newsletter for updates.
                    </Form.Text>
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    Subscribe
                </Button>
            </Form>

            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Successfully subscribed with email: {email}
                </Alert>
            )}
        </Container>
    )
};

export default Home;