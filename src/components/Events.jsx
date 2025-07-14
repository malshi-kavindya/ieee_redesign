import React, { useState } from "react";
import { FaClock, FaMapMarkerAlt, FaEllipsisV } from "react-icons/fa";
import dayjs from "dayjs";

// Sample Event Data
const allEvents = [
    {
    date: "2025-05-14",
    title: "Content Strategy Workshop",
    user: "Emma Roberts",
    time: "09:00 AM - 11:00 AM",
    location: "Online",
    avatar: "https://i.pravatar.cc/30?img=1",
  },,
  {
    date: "2025-07-14",
    title: "Content Strategy Workshop",
    user: "Emma Roberts",
    time: "09:00 AM - 11:00 AM",
    location: "Online",
    avatar: "https://i.pravatar.cc/30?img=1",
  },
  {
    date: "2025-07-14",
    title: "UX Design Review",
    user: "Lucian Eurel",
    time: "3:00 PM - 4:30 PM",
    location: "Design Studio, Room 203",
    avatar: "https://i.pravatar.cc/30?img=2",
  },
  {
    date: "2025-07-15",
    title: "New Campaign Kickoff Meeting",
    user: "Misha Stam",
    time: "09:00 AM - 11:00 AM",
    location: "Client HQ",
    avatar: "https://i.pravatar.cc/30?img=3",
  },
  {
    date: "2025-09-14",
    title: "Content Strategy Workshop",
    user: "Emma Roberts",
    time: "09:00 AM - 11:00 AM",
    location: "Online",
    avatar: "https://i.pravatar.cc/30?img=1",
  },
  {
    date: "2025-07-16",
    title: "Content Strategy Workshop",
    user: "Emma Roberts",
    time: "09:00 AM - 11:00 AM",
    location: "Online",
    avatar: "https://i.pravatar.cc/30?img=1",
  },
  {
    date: "2025-07-17",
    title: "Content Strategy Workshop",
    user: "Emma Roberts",
    time: "09:00 AM - 11:00 AM",
    location: "Online",
    avatar: "https://i.pravatar.cc/30?img=1",
  },
  {
    date: "2025-07-18",
    title: "Content Strategy Workshop",
    user: "Emma Roberts",
    time: "09:00 AM - 11:00 AM",
    location: "Online",
    avatar: "https://i.pravatar.cc/30?img=1",
  },
  {
    date: "2025-08-14",
    title: "Content Strategy Workshop",
    user: "Emma Roberts",
    time: "09:00 AM - 11:00 AM",
    location: "Online",
    avatar: "https://i.pravatar.cc/30?img=1",
  },
];

const views = ["Day", "Month", "Year"];

export default function FunctionalEventCalendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [view, setView] = useState("Day");

  const todayStr = currentDate.format("YYYY-MM-DD");

  const filteredEvents = allEvents.filter((ev) =>
    view === "Day"
      ? ev.date === todayStr
      : view === "Month"
      ? dayjs(ev.date).format("YYYY-MM") === currentDate.format("YYYY-MM")
      : view === "Year"
      ? dayjs(ev.date).format("YYYY") === currentDate.format("YYYY")
      : false
  );

  const handlePrev = () => {
    setCurrentDate((prev) =>
      view === "Day"
        ? prev.subtract(1, "day")
        : view === "Month"
        ? prev.subtract(1, "month")
        : prev.subtract(1, "year")
    );
  };

  const handleNext = () => {
    setCurrentDate((prev) =>
      view === "Day"
        ? prev.add(1, "day")
        : view === "Month"
        ? prev.add(1, "month")
        : prev.add(1, "year")
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl text-[#0a88d1] font-bold">Upcoming Events and Activities</h2>
          <p className="text-gray-500 text-sm">Stay on top of your schedule with our detailed events.</p>
        </div>
        <div className="flex gap-2 items-center">
          <button onClick={handlePrev} className="px-2 py-1 rounded border">←</button>
          <button onClick={handleNext} className="px-2 py-1 rounded border">→</button>
          <button onClick={() => setCurrentDate(dayjs())} className="px-3 py-1 rounded border font-semibold">
            Today
          </button>
          <select
            className="border rounded px-2 py-1"
            value={view}
            onChange={(e) => setView(e.target.value)}
          >
            {views.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <span className="font-medium text-gray-600">
          {view === "Day"
            ? currentDate.format("dddd, MMM D, YYYY")
            : view === "Month"
            ? currentDate.format("MMMM YYYY")
            : currentDate.format("YYYY")}
        </span>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="flex flex-col gap-4">
          {filteredEvents.map((item, idx) => (
            <div
              key={idx}
              className="border rounded-md p-4 flex justify-between items-start shadow-sm hover:shadow-md transition"
            >
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <div className="flex items-center text-sm text-gray-600 gap-2 mb-1 flex-wrap">
                  <img
                    src={item.avatar}
                    alt={item.user}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{item.user}</span>
                  <FaClock className="ml-4" />
                  <span>{item.time}</span>
                  <FaMapMarkerAlt className="ml-4" />
                  <span>{item.location}</span>
                </div>
              </div>
              <FaEllipsisV className="text-gray-400 cursor-pointer" />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-sm italic">No events today.</div>
      )}
    </div>
  );
}
