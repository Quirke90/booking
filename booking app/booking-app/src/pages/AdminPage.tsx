import React from 'react';
import BookingList from '../components/BookingList';

const AdminPage: React.FC = () => {
    return (
        <div>
            <h1>Admin Booking Management</h1>
            <BookingList />
        </div>
    );
};

export default AdminPage;