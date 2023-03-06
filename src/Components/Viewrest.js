import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

import Restop from './Restop';
import RestReview from './RestReview';

function Viewrest() {
    const urlParams = useParams();
    console.log(urlParams.id);


    const [AllRestaurants, setAllRestaurants] = useState([]);

    //function to get call Api to get data from restaurant.json
    const getRestaurants = async () => {
        await fetch('/restaurants.json')
            .then((data) => {
                data.json()
                    .then((result) => {
                        setAllRestaurants(result.restaurants);
                    })
            })
    }

    useEffect(() => {
        getRestaurants();
    }, [])
    const viewRest = AllRestaurants.find((item) => item.id == urlParams.id)

    return (
        <div>
            {
                viewRest ? (
                    <Row className='m-3'>
                        <Col className='ms-4'sm={8} md={3} lg={4}>
                            <Image fluid src={viewRest.photograph} />
                        </Col>
                        <Col >
                            <ListGroup>
                                <ListGroup.Item><h1>{viewRest.name}</h1></ListGroup.Item>
                                <ListGroup.Item><h3>{viewRest.cuisine_type}</h3></ListGroup.Item>
                                <ListGroup.Item><h4>{viewRest.neighborhood}</h4></ListGroup.Item>
                                <ListGroup.Item><h5>{viewRest.address}</h5></ListGroup.Item>

                                <ListGroup.Item><Restop operate={viewRest.operating_hours}/></ListGroup.Item>
                                <RestReview  review ={viewRest.reviews}/>
                            </ListGroup>
                            
                        </Col>
                    </Row>
                ) : 'null'
            }
        </div>
    )
}

export default Viewrest 