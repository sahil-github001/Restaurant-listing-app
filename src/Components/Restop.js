import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
function Restop({ operate }) {
    console.log(operate)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Opening Time
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Operation Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li">Monday : {operate.Monday}</ListGroup.Item>
                        <ListGroup.Item as="li">Tuesday : {operate.Tuesday}</ListGroup.Item>
                        <ListGroup.Item as="li">Wednesday : {operate.Wednesday}</ListGroup.Item>
                        <ListGroup.Item as="li">Thursday : {operate.Thursday}</ListGroup.Item>
                        <ListGroup.Item as="li">Friday : {operate.Friday}</ListGroup.Item>
                        <ListGroup.Item as="li">Saturday : {operate.Saturday}</ListGroup.Item>
                        <ListGroup.Item as="li">Sunday : {operate.Sunday}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Restop