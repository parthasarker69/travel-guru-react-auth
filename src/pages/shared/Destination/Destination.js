import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Destination.css'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker'
import { AuthContext } from '../../../Context/AuthCnotext/AuthProvider';

const Destination = () => {
    const [From, onChangeFrom] = useState(new Date());
    const [To, onChangeTo] = useState(new Date());


    const { selectedCountry, countries } = useContext(AuthContext)


    return (
        <div className='destination'>
            <Container>
                <Row >
                    <Col md={6}>
                        <div className='country-details' >
                            <h1 className='country-title'>{selectedCountry.name}</h1>
                            <p className='fw-medium'>
                                {selectedCountry.details}
                            </p>
                        </div>
                    </Col>
                    <Col md={{ span: 4, offset: 1 }}>
                        <div className='form-details'>
                            <Form.Label htmlFor="inputPassword5">Origin</Form.Label>
                            <Form.Select className='form-selected' aria-label="Default select example">
                                <option>Select The Origin</option>
                                {
                                    countries.map(country => <option value="1">{country.name}</option>)
                                }
                            </Form.Select>
                            <Form.Label className='pt-2' htmlFor="inputPassword5">Destination</Form.Label>
                            <Form.Select className='form-selected' aria-label="Default select example">
                                <option>Select Your Destination</option>
                                {
                                    countries.map(country => <option value="1">{country.name}</option>)
                                }
                            </Form.Select>
                            <div className='d-flex mt-3 flex-column'>
                                <Form.Label htmlFor="inputPassword5">From</Form.Label>
                                <DatePicker onChange={onChangeFrom} value={From} />
                            </div>
                            <div className='d-flex mt-3 flex-column'>
                                <Form.Label htmlFor="inputPassword5">To</Form.Label>
                                <DatePicker onChange={onChangeTo} value={To} />
                            </div>
                            <Button className='w-100 mt-4' variant="warning">Start Booking</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;