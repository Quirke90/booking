# Booking App

## Overview
This is a booking application that allows clients to schedule appointments and enables the admin to view these bookings. The app features a user-friendly interface for both clients and administrators.

## Features
- **Client Booking Form**: Clients can enter their name and appointment date to book an appointment.
- **Booking List**: Admins can view a list of all client bookings.
- **Google Forms Integration**: A separate page for admins to view bookings via a Google Form.

## Project Structure
```
booking-app
├── src
│   ├── components
│   │   ├── BookingForm.tsx
│   │   ├── BookingList.tsx
│   │   └── GoogleFormsView.tsx
│   ├── pages
│   │   ├── HomePage.tsx
│   │   ├── BookingPage.tsx
│   │   └── AdminPage.tsx
│   ├── App.tsx
│   └── types
│       └── index.ts
├── public
│   ├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd booking-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
This will launch the app in your default web browser.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.