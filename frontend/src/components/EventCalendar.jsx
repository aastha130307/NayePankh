import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const EventCalendar = ({ events }) => {
  const [value, setValue] = useState(new Date());

  const eventDates = events.map((e) =>
    new Date(e.date).toDateString()
  );

  return (
    <div className="calendar-wrapper">
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={({ date }) =>
          eventDates.includes(date.toDateString())
            ? "highlight-event"
            : null
        }
      />
    </div>
  );
};

export default EventCalendar;