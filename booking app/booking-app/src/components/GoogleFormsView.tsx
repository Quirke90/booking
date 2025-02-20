import React from 'react';

const GoogleFormsView: React.FC = () => {
    return (
        <div>
            <h1>View Client Bookings</h1>
            <p>Please click the button below to access the Google Form for viewing client bookings.</p>
            <a href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform" target="_blank" rel="noopener noreferrer">
                <button>Open Google Form</button>
            </a>
        </div>
    );
};

export default GoogleFormsView;