import React from 'react';
import Header from '../../../pages/shared/Header/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { Link } from 'react-router-dom';



const Login = () => {
    return (
        <div>
            <div className='bg-black'>
                <Header></Header>
            </div>

            <div className='login-container mx-auto mt-5'>
                <Form className=''>
                    <p className='login-title'>Login</p>
                    <div className='input-fields'>
                        <Form.Group className=" mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" className='border-bottom' placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='border-bottom' type="password" placeholder="Password" />
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                        <Link className='text-warning fs-4 fw-bold'>Forgot Password</Link>
                    </Form.Group>
                    <Button className='w-100 fw-bold fs-5 b rounded-0 btn-warning mt-4 ' variant="primary" type="submit">
                        Login
                    </Button>
                    <div className='d-flex justify-content-center mt-4 fs-5'>
                        <p className='align-center'>Don't have you an account? <Link to='/register'>Creat now</Link></p>
                    </div>
                </Form>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
                <p className='fw-semibold fs-5'>or</p>
                <div>
                    <div className='login-with-1'>
                        <p className='m-0'>Continue with Facebook</p>
                    </div>
                </div>
                <div>
                    <div className='login-with-2'>
                        <p className='m-0'>Continue with Google </p></div>
                </div>

            </div>
        </div>

    );
};

export default Login;