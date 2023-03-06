import React from 'react'
import Card from 'react-bootstrap/Card';
function Footer() {
    return (
        <Card className="text-center " bg='dark' text='white' >
            <Card.Header>Adderess</Card.Header>
            <Card.Body>
                <Card.Title>Ernakulam</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">Copyright restaurant</Card.Footer>
        </Card>
    )
}   

export default Footer