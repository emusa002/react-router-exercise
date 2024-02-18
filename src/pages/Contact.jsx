import { Card, Button, Container } from 'react-bootstrap';

const Contact = () => {
    const contactItems = [
        {
            cardHeaderTitle: "General Inquiry",
            cardBodyText: "For general inquiries, please email us at:",
            button: {
                variant: "primary",
                text: "general@example.com"
            }
        },
        {
            cardHeaderTitle: "Feedback",
            cardBodyText: "We value your feedback! Please share your comments at:",
            button: {
                variant: "warning",
                text: "feedback@example.com"
            }
        },
        {
            cardHeaderTitle: "Support",
            cardBodyText: "Need assistance? Contact our support team at:",
            button: {
                variant: "secondary",
                text: "support@example.com"
            }
        },
    ]
    return (
        <Container>
            <Card className='my-3'>
                <Card.Header as="h5">Contact me</Card.Header>
                <Card.Body>
                    <Card.Text>
                        For questions or feedback, please choose the category below:
                    </Card.Text>
                </Card.Body>
            </Card>

            {contactItems.map((item, index) => (
                <Card key={index} className='my-3'>
                    <Card.Header>{item.cardHeaderTitle}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>{item.cardBodyText}</p>
                            <Button variant={item.button.variant} >{item.button.text}</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};

export default Contact;