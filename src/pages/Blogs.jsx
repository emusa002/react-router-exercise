import { Card, Accordion, Container } from 'react-bootstrap';

const Blogs = () => {
    const accordionItems = [
        {
            accordionTitle: "Accordion Item #1",
            cardHeaderTitle: "CardHeader #1",
            cardBodyText: "Here's some content for the second blog article...."
        },
        {
            accordionTitle: "Accordion Item #2",
            cardHeaderTitle: "CardHeader #2",
            cardBodyText: "Here's some content for the second blog article...."
        },
        {
            accordionTitle: "Accordion Item #3",
            cardHeaderTitle: "CardHeader #3",
            cardBodyText: "Here's some content for the second blog article...."
        },
    ]
    return (
        <Container>
            <Card className='my-3'>
                <Card.Header as="h5">Blogs</Card.Header>
                <Card.Body>
                    <Card.Title>Blog Articles</Card.Title>
                    <Card.Text>
                        Find the latest articles and blog posts here.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Accordion defaultActiveKey="0">
                {accordionItems.map((item, index) =>
                (

                    <Accordion.Item key={index} eventKey={`${index}`}>
                        <Accordion.Header>{item.accordionTitle}</Accordion.Header>
                        <Accordion.Body>
                            <Card className='mt-3'>
                                <Card.Header>{item.cardHeaderTitle}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {item.cardBodyText}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>

                ))}
            </Accordion>
        </Container>
    )
};

export default Blogs;