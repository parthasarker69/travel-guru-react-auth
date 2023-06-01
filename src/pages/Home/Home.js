import React, { useContext } from 'react';
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

// import required modules
import SampleCart from '../shared/SampleCart/SampleCart';
import { AuthContext } from '../../Context/AuthCnotext/AuthProvider';

const Home = () => {
    const countries = useLoaderData()

    const { selectedCountry } = useContext(AuthContext)
    console.log(countries);
    return (
        <div>
            <div >
                <Container className='body-container'  >

                    <Col className='body-container'>
                        <div className='details d-flex flex-column align-items-center mt-md-2 pt-md-2'>
                            <h1>{selectedCountry.name}</h1>
                            <p>{selectedCountry.details}</p>

                        </div>
                    </Col>
                    <Col className='mt-md-2 pt-md-2'>
                        <Swiper
                            className='country-container mySwiper'
                            slidesPerView={4}
                            spaceBetween={40}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                "@0.00": {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                "@0.75": {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                "@1.00": {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                "@1.50": {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}

                        >
                            {
                                countries.map(country =>
                                    <SwiperSlide className='cart-container'>
                                        <SampleCart
                                            key={country.id}
                                            country={country}
                                        >
                                        </SampleCart>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </Col>

                </Container>
            </div>
        </div>
    );
};

export default Home;