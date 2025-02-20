import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage: React.FC = () => {
    return (
        <div>
            <h1>Book Your Appointment</h1>
            <BookingForm />
        </div>
    );
};

export default BookingPage;