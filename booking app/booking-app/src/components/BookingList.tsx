import React, { useEffect, useState } from 'react';
import { Booking } from '../types';

const BookingList: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    
    useEffect(() => {
        // Fetch bookings from an API or a local source
        const fetchBookings = async () => {
            // Replace with your data fetching logic
            const response = await fetch('/api/bookings');
            const data = await response.json();
            setBookings(data);
        };

        fetchBookings();
    }, []);

    return (
        <div>
            <h2>Client Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        {booking.clientName} - {booking.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;