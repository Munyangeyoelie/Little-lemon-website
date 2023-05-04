import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const ConfirmedBooking = ({
  bookingData,
  setBookingData,
  availableTimes,
  setAvailableTimes,
}) => {
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("bookings"));

    if (items) {
      const itemString = JSON.stringify(bookingData);
      localStorage.setItem("bookings", itemString);
    } else {
      const itemString = JSON.stringify(bookingData);
      localStorage.setItem("bookings", itemString);
    }
  }, [bookingData]);

  return (
    <>
      <Header />
      <div className="booking-confirmed">
        <h1>Booking Confirmed!</h1>
        <h2>Date: {bookingData.date}</h2>
        <h2>Time: {bookingData.time}</h2>
        <h2>Number of Guests: {bookingData.guests}</h2>
        <h2>Occasion: {bookingData.occasion}</h2>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmedBooking;
