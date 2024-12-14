import React, { useState, useEffect } from "react";
import axios from "axios";
import { format, startOfWeek, endOfWeek, parse, addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { DatePicker, Space } from "antd";

const Menu = () => {
  const [menu, setMenu] = useState({ lunch: [], snack: [] });
  const [selectedLunchDays, setSelectedLunchDays] = useState([]);
  const [selectedSnackDays, setSelectedSnackDays] = useState([]);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [selectedDate, setSelectedDate] = useState(null);
  const [weeklyData, setWeeklyData] = useState({});
  const [selectedLunchDaysState, setSelectedLunchDaysState] = useState({});
  const [selectedSnackDaysState, setSelectedSnackDaysState] = useState({});
  const navigate = useNavigate();

  function calculateTimeRemaining() {
    const now = new Date();
    const closingTime = new Date();
    closingTime.setHours(22, 0, 0, 0);
    if (now > closingTime) {
      closingTime.setDate(closingTime.getDate() + 1);
    }
    return closingTime - now;
  }

  useEffect(() => {
    const fetchMenu = async () => {
      if (selectedDate) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/meal/date/${selectedDate}`
          );
          const { lunch, snack } = response.data || {};
          setMenu({ lunch, snack });
        } catch (error) {
          console.error("Error fetching menu data:", error);
        }
      } else {
        setMenu({ lunch: [], snack: [] });
      }
    };
    fetchMenu();
  }, [selectedDate]);

  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        const today = new Date();
        const start = startOfWeek(today, { weekStartsOn: 0 });
        const end = endOfWeek(today, { weekStartsOn: 6 });
        const response = await axios.get(
          `http://localhost:8080/api/meal/between/${format(
            start,
            "dd-MM-yyyy"
          )}/${format(end, "dd-MM-yyyy")}`
        );
        const data = response.data;
        const weekData = {};
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

        days.forEach((day, index) => {
          const date = addDays(start, index);
          weekData[day] = {
            lunch: [],
            snack: [],
            date: format(date, "dd-MM-yyyy"),
          };
        });

        data.forEach((item) => {
          const itemDate = parse(item.date, "dd-MM-yyyy", new Date());
          const dayName = itemDate.toLocaleDateString("en-US", {
            weekday: "long",
          });
          if (days.includes(dayName)) {
            weekData[dayName] = {
              lunch: item.lunch || [],
              snack: item.snack || [],
              date: item.date,
            };
          }
        });

        setWeeklyData(weekData);

        // Initialize the state for tracking selected days
        const initialSelectedLunchDays = {};
        const initialSelectedSnackDays = {};
        days.forEach((day) => {
          initialSelectedLunchDays[day] = false;
          initialSelectedSnackDays[day] = false;
        });
        setSelectedLunchDaysState(initialSelectedLunchDays);
        setSelectedSnackDaysState(initialSelectedSnackDays);
      } catch (error) {
        console.error("Error fetching weekly data:", error);
      }
    };
    fetchWeeklyData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectDay = (day, type) => {
    if (type === "lunch") {
      setSelectedLunchDays((prev) =>
        prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
      );
      setSelectedLunchDaysState((prevState) => ({
        ...prevState,
        [day]: !prevState[day],
      }));
    } else {
      setSelectedSnackDays((prev) =>
        prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
      );
      setSelectedSnackDaysState((prevState) => ({
        ...prevState,
        [day]: !prevState[day],
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      const bookings = [];

      selectedLunchDays.forEach((day) => {
        const date = weeklyData[day]?.date;
        if (date) {
          bookings.push({
            date: date,
            lunch: true,
            snack: false,
          });
        }
      });

      selectedSnackDays.forEach((day) => {
        const date = weeklyData[day]?.date;
        if (date) {
          const existingBooking = bookings.find(
            (booking) => booking.date === date
          );
          if (existingBooking) {
            existingBooking.snack = true;
          } else {
            bookings.push({
              date: date,
              lunch: false,
              snack: true,
            });
          }
        }
      });

      if (bookings.length > 0) {
        const response = await axios.post(
          "http://localhost:8080/api/employee/booking/12345",
          bookings,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        alert(`Bookings for selected dates have been submitted.`);
      } else {
        alert("Please select at least one lunch or snack.");
      }
    } catch (error) {
      console.error("Error saving selection:", error.response || error);
      alert("An error occurred. Please try again.");
    }
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleSearch = (date, dateString) => {
    if (dateString) {
      setSelectedDate(dateString);
    } else {
      setSelectedDate(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Menu</h2>
      <div className="flex justify-between items-center mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isVegetarian}
            onChange={() => setIsVegetarian(!isVegetarian)}
            className="form-checkbox h-5 w-5 text-red-600"
          />
          <span className="ml-2 text-gray-700">Vegetarian</span>
        </label>
        <div className="text-gray-700">
          Time remaining: {formatTime(timeRemaining)}
        </div>
      </div>

      <div className="flex justify-center items-center mb-8 text-xl p-4">
        <Space direction="vertical">
          <DatePicker onChange={handleSearch} format="DD-MM-YYYY" />
        </Space>
      </div>

      {selectedDate ? (
        <>
          <h3 className="text-2xl font-bold text-red-600 mb-4">Lunch</h3>
          <div className="bg-white shadow-lg rounded-lg p-4 mb-10">
            {menu.lunch.length > 0 ? (
              menu.lunch.map((item, index) => (
                <p key={index} className="text-gray-700">
                  {item}
                </p>
              ))
            ) : (
              <p className="text-gray-700">No lunch available</p>
            )}
          </div>

          <h3 className="text-2xl font-bold text-red-600 mb-4">Snacks</h3>
          <div className="bg-white shadow-lg rounded-lg p-4 mb-10">
            {menu.snack.length > 0 ? (
              menu.snack.map((item, index) => (
                <p key={index} className="text-gray-700">
                  {item}
                </p>
              ))
            ) : (
              <p className="text-gray-700">No snacks available</p>
            )}
          </div>
        </>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-red-600 mb-4">Lunch</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
            {Object.keys(weeklyData).map((day, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                <h4 className="text-lg font-semibold text-red-600 mb-2">
                  {day}
                </h4>
                <p className="text-gray-700 mb-2">
                  Date: {weeklyData[day].date}
                </p>
                {weeklyData[day].lunch.length > 0 ? (
                  <>
                    {weeklyData[day].lunch.map((item, i) => (
                      <p key={i} className="text-gray-700">
                        {item}
                      </p>
                    ))}
                    <button
                      className={`py-1 px-2 mt-2 ${
                        selectedLunchDaysState[day]
                          ? "bg-red-600 text-white"
                          : "bg-gray-200 text-gray-700"
                      } rounded transition-colors`}
                      onClick={() => handleSelectDay(day, "lunch")}
                    >
                      {selectedLunchDaysState[day] ? "Deselect" : "Select"}
                    </button>
                  </>
                ) : (
                  <p className="text-gray-700">No lunch available</p>
                )}
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-red-600 mb-4">Snacks</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
            {Object.keys(weeklyData).map((day, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                <h4 className="text-lg font-semibold text-red-600 mb-2">
                  {day}
                </h4>
                <p className="text-gray-700 mb-2">
                  Date: {weeklyData[day].date}
                </p>
                {weeklyData[day].snack.length > 0 ? (
                  <>
                    {weeklyData[day].snack.map((item, i) => (
                      <p key={i} className="text-gray-700">
                        {item}
                      </p>
                    ))}
                    <button
                      className={`py-1 px-2 mt-2 ${
                        selectedSnackDaysState[day]
                          ? "bg-red-600 text-white"
                          : "bg-gray-200 text-gray-700"
                      } rounded transition-colors`}
                      onClick={() => handleSelectDay(day, "snack")}
                    >
                      {selectedSnackDaysState[day] ? "Deselect" : "Select"}
                    </button>
                  </>
                ) : (
                  <p className="text-gray-700">No snacks available</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      <div className="flex justify-center mt-4">
        <button
          className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Menu;
