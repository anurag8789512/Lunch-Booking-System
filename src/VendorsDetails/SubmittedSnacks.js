import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DatePicker, Alert, Empty, Spin } from "antd";

const SubmittedSnacks = () => {
  const [contents, setContents] = useState([]);
  const [filteredContents, setFilteredContents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContents = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/snacks");
        setContents(response.data);
        setFilteredContents(response.data);
      } catch (error) {
        console.error(
          "Error fetching snacks:",
          error.response || error.message
        );
        setError(
          "There was an error fetching the contents. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchContents();
  }, []);

  const handleFillMore = () => {
    navigate("/fill-snacks");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.format("YYYY-MM-DD");
      const filtered = contents.filter(
        (content) => content.date === formattedDate
      );
      setFilteredContents(filtered);
    } else {
      setFilteredContents(contents);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-8">
        Filled Snack Items
      </h2>
      {error && <Alert message={error} type="error" className="mb-8" />}
      <div className="flex justify-between items-center mb-8">
        <div className="flex-grow flex justify-center">
          <DatePicker
            onChange={handleDateChange}
            format="YYYY-MM-DD"
            className="custom-date-picker"
            style={{ marginRight: "16px" }}
          />
        </div>
        <div>
          <button
            onClick={handleFillMore}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Fill More Snacks
          </button>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Spin size="large" />
        </div>
      ) : filteredContents.length === 0 ? (
        <Empty description={<span>No contents for the selected date</span>} />
      ) : (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredContents.map((content, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-800 font-medium">
                      <strong>Date:</strong> {content.date}
                    </p>
                    {content.snacks && content.snacks.length > 0 ? (
                      content.snacks.map((snack, snackIndex) => (
                        <p
                          key={snackIndex}
                          className="text-gray-800 font-medium"
                        >
                          <strong>Snack {snackIndex + 1}:</strong> {snack}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-800 font-medium">
                        No snacks available
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmittedSnacks;
