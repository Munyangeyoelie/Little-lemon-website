import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import Home from "./components/Home";
import Hero from "./components/Hero";
import * as userEvent from "@testing-library/user-event";

const bookingData = {
  date: "",
  time: "",
  guests: "",
  occasion: "",
};

const availableTimes = {
  times: ["16:00", "17:30", "18:50", "19:00", "20:00", "21:00"],
};

test("Renders the BookingForm heading", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} bookingData={bookingData} />
    </Router>
  );
  const headingElement = screen.getByText("Book Table Now");
  expect(headingElement).toBeInTheDocument();
});

test("Check homepage for Render", () => {
  render(
    <Router>
      <Hero />
    </Router>
  );
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

test("check  Available Times", () => {
  expect(availableTimes.times[0]).toBe("16:00");
});

test("it should test Date", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} bookingData={bookingData} />
    </Router>
  );

  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});

test("check form inputs", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} bookingData={bookingData} />
    </Router>
  );

  const submit = screen.getByTestId("submit");
  expect(submit).toBeInTheDocument();

  const occasion = screen.getByTestId("occasion");
  expect(occasion).toBeInTheDocument();

  const guests = screen.getByTestId("guests");
  expect(guests).toBeInTheDocument();

  const time = screen.getByTestId("time");
  expect(time).toBeInTheDocument();
});

function setBookingData() {}

test("check for input change", async () => {
  const user = userEvent.default.setup();

  render(
    <Router>
      <BookingForm
        availableTimes={availableTimes}
        bookingData={bookingData}
        setBookingData={setBookingData}
      />
    </Router>
  );

  const occasion = screen.getByTestId("occasion");
  expect(occasion).toBeInTheDocument();

  const guests = screen.getByTestId("guests");
  expect(guests).toBeInTheDocument();

  const time = screen.getByTestId("time");
  expect(time).toBeInTheDocument();

  expect(screen.getByRole("option", { name: "Birthday" })).toBeInTheDocument();
  expect(
    screen.getByRole("option", { name: "Anniversary" })
  ).toBeInTheDocument();
});

test("Options feild test", async () => {
  render(
    <Router>
      <BookingForm
        availableTimes={availableTimes}
        bookingData={bookingData}
        setBookingData={setBookingData}
      />
    </Router>
  );

  const occasion = screen.getByTestId("occasion");
  expect(occasion).toBeInTheDocument();

  fireEvent.change(occasion[1], {
    target: {
      value: "Anniversary",
    },
  });

  expect(occasion[0].selected).toBe(true);
});

test("if submit is disabled", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} bookingData={bookingData} />
    </Router>
  );

  const submit = screen.getByTestId("submit");
  expect(submit).toBeInTheDocument();
  expect(submit.textContent).toBe("Make Your Reservation");

  expect(submit).toBeDisabled();
});
