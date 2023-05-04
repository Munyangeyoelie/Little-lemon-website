import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/booking.css";
const BookingForm = ({
  bookingData,
  setBookingData,
  availableTimes,
  setAvailableTimes,
  submitForm,
}) => {
  const [dateError, setDateError] = useState(null);
  const [timeError, setTimeError] = useState(null);
  const [guestsError, setGuestsError] = useState(null);
  const [occasionError, setOccasionError] = useState(null);
  const [isTouched, setIsTouched] = useState(false);
  const [validated, setValidated] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    validateForm();
  }, [
    dateError,
    timeError,
    guestsError,
    occasionError,
    isTouched,
    validateForm,
  ]);

  const handleBlur = () => {
    validateForm();
  };

  const handleChange = (e) => {
    // console.log("should update errors");

    switch (e.target.id) {
      case "res-date":
        setAvailableTimes({ type: "update_times" });
        setBookingData((prevState) => {
          return { ...prevState, date: e.target.value };
        });
        break;
      case "res-time":
        setBookingData((prevState) => {
          return { ...prevState, time: e.target.value };
        });
        break;
      case "guests":
        setBookingData((prevState) => {
          return { ...prevState, guests: e.target.value };
        });
        break;
      case "occasion":
        setBookingData((prevState) => {
          return { ...prevState, occasion: e.target.value };
        });
        break;
      default:
        break;
    }

    setIsTouched(true);
    validateForm();
  };
  function isValidDate(dateString) {
    const yyyymmdd = dateString.split("-");
    const dateObj = new Date(
      parseInt(yyyymmdd[0]),
      parseInt(yyyymmdd[1]) - 1,
      parseInt(yyyymmdd[2]) + 1
    );

    if (dateObj < new Date()) return false;
    return true;
  }

  function validateForm() {
    if (isTouched) {
      if (bookingData.guests < 1) {
        setGuestsError("Has to be at least 1 guest");
      } else if (bookingData.guests > 10) {
        setGuestsError("Cannot seat more then 10");
      } else {
        setGuestsError(null);
      }

      if (bookingData.date === "") {
        setDateError("Must select a date");
      } else {
        setDateError(null);
      }
      if (!isValidDate(bookingData.date)) {
        setDateError(`Sorry! Reservations not available for this date!`);
      } else {
        setDateError(null);
      }
      if (bookingData.time === "") {
        setTimeError("Must select a time");
      } else {
        setTimeError(null);
      }

      if (bookingData.occasion === "") {
        setOccasionError("Must select an occasion");
      } else {
        setOccasionError(null);
      }

      if (
        dateError === null &&
        timeError === null &&
        guestsError === null &&
        occasionError === null &&
        isTouched
      ) {
        setValidated(true);
      } else {
        setValidated(false);
      }
    }
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitForm() === true) {
      console.log("success");
      navigate("/confirmation");
    } else {
      alert("Error");
    }
  };

  const [items, setItems] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("bookings"));
    if (items) {
      setItems(items);
    }
  }, []);

  // const AvailableTimes = () => {
  //   const items = JSON.parse(localStorage.getItem("bookings"));

  //   if (items.date !== bookingData.date) {
  //     return availableTimes.times.map((time) => {
  //       return <option key={time}>{time}</option>;
  //     });
  //   } else {
  //     return availableTimes.times.map((time) => {
  //       if (items.time !== time) return <option key={time}>{time}</option>;
  //     });
  //   }
  // };
  const AvailableTimes = () => {
    const items = JSON.parse(localStorage.getItem("bookings"));

    console.log(bookingData, items);
    if (bookingData && bookingData.date && items.date !== bookingData.date) {
      return availableTimes.times.map((time) => {
        return <option key={time}>{time}</option>;
      });
    } else {
      return availableTimes.times.map((time) => {
        if (items && items.time !== time)
          return <option key={time}>{time}</option>;
      });
    }
  };

  return (
    <>
      <h1>Book Table Now</h1>
      <div className="booking-wrapper">
        <form
          data-testid="booking-form"
          className="booking"
          onSubmit={handleSubmit}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
            data-testid="date"
            id="res-date"
            required
            value={bookingData.date}
            onBlur={handleBlur}
            onChange={handleChange}
            type="date"
          />
          <span className="error">{dateError}</span>
          <label htmlFor="res-time">Choose time</label>
          <div data-testid="res-time">
            <select
              data-testid="time"
              id="res-time"
              required
              value={bookingData.time}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option></option>
              <AvailableTimes />
            </select>
          </div>
          <span className="error">{timeError}</span>
          <label htmlFor="guests">Guests</label>
          <input
            data-testid="guests"
            required
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={bookingData.guests}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <span className="error">{guestsError}</span>

          <label htmlFor="occasion">Occasion</label>
          <div data-testid="res-occasion">
            <select
              data-testid="occasion"
              id="occasion"
              required
              value={bookingData.occasion}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option></option>
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <span className="error">{occasionError}</span>
          <button
            onclick="handleCommand(event)"
            data-testid="submit"
            id="submitButton"
            required
            disabled={!validated}
            type="submit"
          >
            {isLoading ? "Loading..." : "Make Your Reservation"}
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
