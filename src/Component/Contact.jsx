import React from 'react'
import contactPic from '../Assests/Images/contactPic.png'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Contact = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <section className='contact_section'>
                <div className="container contact_wrapper">
                    <div className="contact_inr_div">
                        <img src={contactPic} alt="contactPic" />
                    </div>
                    <div className="contact_inr_div contact_form">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <h4 className='text-center mb-3'>Looking to discuss with us?</h4>
                            <Row className="mb-3">
                                <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustom01">
                                    {/* <Form.Label>Name</Form.Label> */}
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Name"
                                    // defaultValue="Mark"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                    {/* <Form.Label>Email</Form.Label> */}
                                    <InputGroup hasValidation>
                                        {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter the Email.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 mobile-row">
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    {/* <Form.Label>Mobile Number</Form.Label> */}
                                    <Form.Control type="text" placeholder="Mobile Number" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Mobile Number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom04">
                                    {/* <Form.Label>Brand Name</Form.Label> */}
                                    <Form.Control type="text" placeholder="Brand Name" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a Brand Name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom05">
                                    {/* <Form.Label>Message</Form.Label> */}
                                    <Form.Control type="text" placeholder="Message" />
                                </Form.Group>
                            </Row>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
