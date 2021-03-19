import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DestinationForm = ({ setPickFrom, setPickTo }) => {
    const formSubmit = (e) => {
        setPickFrom(e.target.pickFrom.value);
        setPickTo(e.target.pickTo.value);
        e.preventDefault();
    }
    return (
        <>
            <Form onSubmit={formSubmit}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Pick From</Form.Label>
                    <Form.Control type="address" name="pickFrom" placeholder="From" required />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Pick To</Form.Label>
                    <Form.Control type="address" name="pickTo" placeholder="To" required />
                </Form.Group>
                <Form.Group controlId="date" bsSize="large">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>

        </>
    );
};

export default DestinationForm;