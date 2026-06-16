import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";
import EventCalendar from "../components/EventCalendar";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/events");

        const data = await res.json();
        console.log("API RESPONSE:", data);

        // ✅ Handles all backend response formats safely
        const eventsArray =
          Array.isArray(data)
            ? data
            : Array.isArray(data.events)
            ? data.events
            : [];

        setEvents(eventsArray);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setEvents([]);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
    <Navbar />
    <div className="event-page">

      {/* HERO */}
      <motion.div
        className="event-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>Our Events</h1>

        <button onClick={() => setShowCalendar(!showCalendar)}>
          {showCalendar ? "Hide Calendar" : "View Calendar"}
        </button>
      </motion.div>

      {/* CALENDAR VIEW */}
      {showCalendar && <EventCalendar events={events} />}

      {/* GRID */}
      <div className="event-grid">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event._id || event.id}
              event={event}
              onClick={setSelectedEvent}
            />
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>

      {/* MODAL */}
      <EventModal
        isOpen={!!selectedEvent}
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
    <Footer />
    </>
  );
};

export default Events;