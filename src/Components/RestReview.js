import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestReview({ review }) {
    console.log(review)
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button className='w-25  ms-2 my-3' variant='dark'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                View Comments
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    {
                        review.map((item) => (
                            <div className='border p-2'>
                                <h5>{item.name}</h5>
                                <p>{item.rating}</p>
                                <p>{item.comments}</p>
                            </div>
                        ))
                    }
                </div>
            </Collapse>
        </>
    )
}

export default RestReview