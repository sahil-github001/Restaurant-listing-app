import React, { useEffect } from 'react'
import { useState } from 'react'
import Restcard from './Restcard';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restlist() {
    const [AllRestaurants, setAllRestaurants] = useState([]);

    //function to get call Api to get data from restaurant.json
    const getRestaurants = async () => {
        await fetch('./restaurants.json')
            .then((data) => {
                data.json()
                    .then((result) => {
                        // console.log(result)
                        setAllRestaurants(result.restaurants);
                    })
            })
    }
    // console.log(AllRestaurants);

    useEffect(() => {
        getRestaurants();
    }, [])
    return (
            <Row className=''>
                {
                    AllRestaurants.map((item) => (
                        <Col className='text-center mt-3 d-flex justify-content-center' sm={12} md={6} lg={4} xl={3}
                            >
                            <Restcard  restaurant={item} />
                        </Col>
                    ))
                }
            </Row>
    )
}

export default Restlist