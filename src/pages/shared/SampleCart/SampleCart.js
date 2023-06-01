import React, { useContext } from 'react';
import './SampleCart.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../../Context/AuthCnotext/AuthProvider';
import { Link } from 'react-router-dom';

const SampleCart = ({ country }) => {
    const { name, img } = country;
    const { selectedCountry, setSelectedCountry } = useContext(AuthContext)

    const handleBookingButton = (country) => {
        setSelectedCountry(country)
    }
    return (
        <div className='cart-container' style={{
            backgroundImage: `url(${img})`
        }}>
            <div className='cart-details' style={{ backgroundColor: 'rgba(0,0,0,0.35)', borderRadius: '20px' }}>
                <h1 className='pt-4'> {name}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>
                    <button onClick={() => handleBookingButton(country)} type="button" class="btn btn-warning">Details</button>
                </p>
                <p>
                    <Link to='/destination'>
                        <button onClick={() => handleBookingButton(country)} type="button" class="btn btn-warning">Book Hotel</button></Link>
                </p>

            </div>
        </div>
    );
};

export default SampleCart;