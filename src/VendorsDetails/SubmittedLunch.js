import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DatePicker, Alert, Empty, Spin } from "antd";

const SubmittedItems = () => {
  const [lunchContents, setLunchContents] = useState([]);
  const [snackContents, setSnackContents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContents = async () => {
      if (selectedDate) {
        setLoading(true);
        setLunchContents([]);
        setSnackContents([]);
        try {
          const formattedDate = selectedDate.format("DD-MM-YYYY");
          const mealResponse = await axios.get(
            `http://localhost:8080/api/meal/date/${formattedDate}`
          );
          setLunchContents(mealResponse.data.lunch || []);
          setSnackContents(mealResponse.data.snack || []);
        } catch (error) {
          console.error("Error fetching contents:", error);
          setError("Contents arent filled please make sure to fill the same");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchContents();
  }, [selectedDate]);

  const handleFillMoreMeals = () => {
    navigate("/fill-meals");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-8">
        Filled Lunch and Snack Items
      </h2>
      {error && <Alert message={error} type="error" className="mb-8" />}
      <div className="flex justify-between items-center mb-8">
        <div className="flex-grow flex justify-center">
          <DatePicker
            onChange={handleDateChange}
            format="DD-MM-YYYY"
            className="custom-date-picker"
            style={{ marginRight: "16px" }}
          />
        </div>
        <div>
          <button
            onClick={handleFillMoreMeals}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mr-2"
          >
            Fill More Meals
          </button>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Spin size="large" />
        </div>
      ) : (
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center text-green-600 mb-4">
              Lunch Items
            </h3>
            {lunchContents.length === 0 ? (
              <Empty
                description={<span>No lunch items for the selected date</span>}
              />
            ) : (
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {lunchContents.map((lunchItem, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <p className="text-gray-800 font-medium">
                            <strong>Lunch {index + 1}:</strong> {lunchItem}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-center text-red-600 mb-4">
              Snack Items
            </h3>
            {snackContents.length === 0 ? (
              <Empty
                description={<span>No snack items for the selected date</span>}
              />
            ) : (
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {snackContents.map((snack, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <p className="text-gray-800 font-medium">
                            <strong>Snack {index + 1}:</strong> {snack}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmittedItems;
