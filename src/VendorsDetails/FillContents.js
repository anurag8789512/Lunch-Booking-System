import React from "react";
import { useNavigate } from "react-router-dom";

const FillContents = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6 max-w-md">
      <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Fill Contents</h2>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/fill-lunch")}
          className="w-full bg-red-600 text-white px-4 py-2 rounded shadow-md hover:bg-red-700 transition-colors"
        >
          Fill Lunch
        </button>
        <button
          onClick={() => navigate("/fill-snacks")}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition-colors"
        >
          Fill Snack
        </button>
        <button
          onClick={() => navigate("/submitted-contents")}
          className="w-full bg-gray-600 text-white px-4 py-2 rounded shadow-md hover:bg-gray-700 transition-colors"
        >
          View Filled Lunches
        </button>
        <button
          onClick={() => navigate("/submitted-snacks")}
          className="w-full bg-gray-600 text-white px-4 py-2 rounded shadow-md hover:bg-gray-700 transition-colors"
        >
          View Filled Snacks
        </button>
      </div>
    </div>
  );
};

export default FillContents;
