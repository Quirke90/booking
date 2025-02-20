import React, { useState } from 'react';

const BookingForm: React.FC = () => {
    const [clientName, setClientName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!clientName || !appointmentDate) {
            setError('Please fill in all fields.');
            return;
        }
        setError('');
        // Handle form submission logic here (e.g., send data to an API)
        console.log('Booking submitted:', { clientName, appointmentDate });
        // Reset form fields
        setClientName('');
        setAppointmentDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="clientName">Client Name:</label>
                <input
                    type="text"
                    id="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="appointmentDate">Appointment Date:</label>
                <input
                    type="date"
                    id="appointmentDate"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    required
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default BookingForm;