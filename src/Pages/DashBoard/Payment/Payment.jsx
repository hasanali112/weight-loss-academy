import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import { useLocation } from 'react-router-dom';

const stripePromise=  loadStripe(import.meta.env.VITE_stripe_pk)

const Payment = () => {
    const location = useLocation()
    const enrollItem = location.state;
    console.log(enrollItem)
    
    return (
        <div className='w-1/2'>
            <h1 className='text-center'>Payment</h1>
            <Elements stripe={stripePromise}>
               <CheckOutForm  enrollItem={enrollItem}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;
