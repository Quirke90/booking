import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Booking App</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/booking">Book an Appointment</Link>
                    </li>
                    <li>
                        <Link to="/admin">View Bookings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;