import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({ restaurant }) {
    console.log(restaurant)
    return (
        <div>
            <Link to={`viewrest/${restaurant.id}`} style={{textDecoration:'none'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={restaurant.photograph} />
                    <Card.Body>
                        <Card.Title>{restaurant.name}</Card.Title>
                        <Card.Text>
                            {restaurant.neighborhood}
                        </Card.Text>
                        <Card.Text>{restaurant.address}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>

        </div>
    )
}

export default Restcard