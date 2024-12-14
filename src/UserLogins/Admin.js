// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const Admin = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const [bookingCount, setBookingCount] = useState(0);
// //   const [lunchCount, setLunchCount] = useState(0);
// //   const [snackCount, setSnackCount] = useState(0);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:8080/api/employee/booking/all")
// //       .then((response) => {
// //         setBookings(response.data);
// //         calculateCounts(response.data);
// //       })
// //       .catch((error) => console.error("Error fetching bookings:", error));
// //     axios
// //       .get("http://localhost:8080/api/employee/booking/count")
// //       .then((response) => setBookingCount(response.data))
// //       .catch((error) => console.error("Error fetching booking count:", error));
// //   }, []);

// //   const calculateCounts = (bookings) => {
// //     let totalLunch = 0;
// //     let totalSnack = 0;

// //     bookings.forEach((booking) => {
// //       if (booking.lunch) totalLunch += 1;
// //       if (booking.snack) totalSnack += 1;
// //     });

// //     setLunchCount(totalLunch);
// //     setSnackCount(totalSnack);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-8">
// //       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
// //         Admin Dashboard
// //       </h1>

// //       <div className="mb-6 text-center">
// //         <span className="text-xl font-semibold text-gray-700">
// //           Total Bookings:{" "}
// //         </span>
// //         <span className="text-xl font-bold text-green-600">{bookingCount}</span>
// //       </div>

// //       <div className="mb-6 text-center">
// //         <span className="text-xl font-semibold text-gray-700">
// //           Total Lunches:{" "}
// //         </span>
// //         <span className="text-xl font-bold text-blue-600">{lunchCount}</span>
// //       </div>

// //       <div className="mb-6 text-center">
// //         <span className="text-xl font-semibold text-gray-700">
// //           Total Snacks:{" "}
// //         </span>
// //         <span className="text-xl font-bold text-orange-600">{snackCount}</span>
// //       </div>

// //       <div className="overflow-x-auto shadow-md sm:rounded-lg">
// //         <table className="min-w-full bg-white border border-gray-200">
// //           <thead className="bg-gray-200 text-gray-700">
// //             <tr>
// //               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 ID
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Date
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Snack
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Lunch
// //               </th>
// //               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
// //                 Employee ID
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody className="text-gray-600">
// //             {bookings.map((booking) => (
// //               <tr key={booking.id} className="border-t border-gray-200">
// //                 <td className="px-6 py-4 whitespace-nowrap">{booking.id}</td>
// //                 <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
// //                 <td className="px-6 py-4 whitespace-nowrap">
// //                   {booking.snack ? "Yes" : "No"}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap">
// //                   {booking.lunch ? "Yes" : "No"}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap">
// //                   {booking.employee.id}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Admin;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Admin = () => {
//   const [bookings, setBookings] = useState([]);
//   const [bookingCount, setBookingCount] = useState(0);
//   const [lunchCount, setLunchCount] = useState(0);
//   const [snackCount, setSnackCount] = useState(0);

//   useEffect(() => {
//     // Fetch all bookings
//     axios
//       .get("http://localhost:8080/api/employee/booking/all")
//       .then((response) => {
//         setBookings(response.data);
//         calculateCounts(response.data);
//       })
//       .catch((error) => console.error("Error fetching bookings:", error));

//     // Fetch booking count
//     axios
//       .get("http://localhost:8080/api/employee/booking/count")
//       .then((response) => setBookingCount(response.data))
//       .catch((error) => console.error("Error fetching booking count:", error));
//   }, []);

//   const calculateCounts = (bookings) => {
//     let totalLunch = 0;
//     let totalSnack = 0;

//     bookings.forEach((booking) => {
//       if (booking.lunch) totalLunch += 1;
//       if (booking.snack) totalSnack += 1;
//     });

//     setLunchCount(totalLunch);
//     setSnackCount(totalSnack);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//         Admin Dashboard
//       </h1>

//       <div className="mb-6 text-center">
//         <span className="text-xl font-semibold text-gray-700">
//           Total Bookings:{" "}
//         </span>
//         <span className="text-xl font-bold text-green-600">{bookingCount}</span>
//       </div>

//       <div className="mb-6 text-center">
//         <span className="text-xl font-semibold text-gray-700">
//           Total Lunches:{" "}
//         </span>
//         <span className="text-xl font-bold text-blue-600">{lunchCount}</span>
//       </div>

//       <div className="mb-6 text-center">
//         <span className="text-xl font-semibold text-gray-700">
//           Total Snacks:{" "}
//         </span>
//         <span className="text-xl font-bold text-orange-600">{snackCount}</span>
//       </div>

//       <div className="overflow-x-auto shadow-md sm:rounded-lg">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead className="bg-gray-200 text-gray-700">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 ID
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Date
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Snack Items
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Lunch Items
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Employee ID
//               </th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-600">
//             {bookings.length > 0 ? (
//               bookings.map((booking) => (
//                 <tr key={booking.id} className="border-t border-gray-200">
//                   <td className="px-6 py-4 whitespace-nowrap">{booking.id}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {booking.snack ? "Yes" : "No"}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {booking.lunch ? "Yes" : "No"}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {booking.employee ? booking.employee.id : "N/A"}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center px-6 py-4">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Admin;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { DatePicker, ConfigProvider } from "antd";
// import moment from "moment";

// const Admin = () => {
//   const [bookings, setBookings] = useState([]);
//   const [bookingCount, setBookingCount] = useState(0);
//   const [lunchCount, setLunchCount] = useState(0);
//   const [snackCount, setSnackCount] = useState(0);
//   const [lunchOnlyBookings, setLunchOnlyBookings] = useState([]);
//   const [snackOnlyBookings, setSnackOnlyBookings] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(moment().format('DD-MM-YYYY'));

//   useEffect(() => {
//     fetchBookings();
//     fetchLunchOnlyBookings(selectedDate);
//     fetchSnackOnlyBookings(selectedDate);
//   }, [selectedDate]);

//   const fetchBookings = () => {
//     axios
//       .get("http://localhost:8080/api/employee/booking/all")
//       .then((response) => {
//         setBookings(response.data);
//         calculateCounts(response.data);
//       })
//       .catch((error) => console.error("Error fetching bookings:", error));

//     axios
//       .get("http://localhost:8080/api/employee/booking/count")
//       .then((response) => setBookingCount(response.data))
//       .catch((error) => console.error("Error fetching booking count:", error));
//   };

//   const calculateCounts = (bookings) => {
//     let totalLunch = 0;
//     let totalSnack = 0;

//     bookings.forEach((booking) => {
//       if (booking.lunch) totalLunch += 1;
//       if (booking.snack) totalSnack += 1;
//     });

//     setLunchCount(totalLunch);
//     setSnackCount(totalSnack);
//   };

//   const fetchLunchOnlyBookings = (date) => {
//     axios
//       .get(`http://localhost:8080/api/employee/booking/lunch-only/${date}`)
//       .then((response) => setLunchOnlyBookings(response.data))
//       .catch((error) => console.error("Error fetching lunch-only bookings:", error));
//   };

//   const fetchSnackOnlyBookings = (date) => {
//     axios
//       .get(`http://localhost:8080/api/employee/booking/snack-only/${date}`)
//       .then((response) => setSnackOnlyBookings(response.data))
//       .catch((error) => console.error("Error fetching snack-only bookings:", error));
//   };

//   const handleDateChange = (date, dateString) => {
//     setSelectedDate(dateString);
//   };

//   return (
//       <div className="min-h-screen bg-gray-100 p-8">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Admin Dashboard
//         </h1>

//         <div className="mb-6 text-center">
//           <span className="text-xl font-semibold text-gray-700">
//             Total Bookings:{" "}
//           </span>
//           <span className="text-xl font-bold text-green-600">{bookingCount}</span>
//         </div>

//         <div className="mb-6 text-center">
//           <span className="text-xl font-semibold text-gray-700">
//             Total Lunches:{" "}
//           </span>
//           <span className="text-xl font-bold text-blue-600">{lunchCount}</span>
//         </div>

//         <div className="mb-6 text-center">
//           <span className="text-xl font-semibold text-gray-700">
//             Total Snacks:{" "}
//           </span>
//           <span className="text-xl font-bold text-orange-600">{snackCount}</span>
//         </div>

//         {/* Date Picker */}
//         <div className="mb-6 text-center">
//           <DatePicker
//             format="DD-MM-YYYY"
//             onChange={handleDateChange}
//           />
//         </div>

//         {/* Lunch Only Bookings */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Lunch Only Bookings</h2>
//           <div className="overflow-x-auto shadow-md sm:rounded-lg">
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead className="bg-gray-200 text-gray-700">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                     ID
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                     Date
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                     Employee ID
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-600">
//                 {lunchOnlyBookings.length > 0 ? (
//                   lunchOnlyBookings.map((booking) => (
//                     <tr key={booking.id} className="border-t border-gray-200">
//                       <td className="px-6 py-4 whitespace-nowrap">{booking.id}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {booking.employee ? booking.employee.id : "N/A"}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="3" className="text-center px-6 py-4">
//                       No Lunch Only Bookings
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Snack Only Bookings */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Snack Only Bookings</h2>
//           <div className="overflow-x-auto shadow-md sm:rounded-lg">
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead className="bg-gray-200 text-gray-700">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                     ID
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                     Date
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                     Employee ID
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-600">
//                 {snackOnlyBookings.length > 0 ? (
//                   snackOnlyBookings.map((booking) => (
//                     <tr key={booking.id} className="border-t border-gray-200">
//                       <td className="px-6 py-4 whitespace-nowrap">{booking.id}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {booking.employee ? booking.employee.id : "N/A"}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="3" className="text-center px-6 py-4">
//                       No Snack Only Bookings
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//   );
// };

// export default Admin;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { DatePicker } from "antd";
import moment from "moment";

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingCount, setBookingCount] = useState(0);
  const [lunchCount, setLunchCount] = useState(0);
  const [snackCount, setSnackCount] = useState(0);
  const [lunchOnlyBookings, setLunchOnlyBookings] = useState([]);
  const [snackOnlyBookings, setSnackOnlyBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment().format('DD-MM-YYYY'));
  const [view, setView] = useState('overview'); // New state for view mode

  useEffect(() => {
    fetchBookings();
    fetchLunchOnlyBookings(selectedDate);
    fetchSnackOnlyBookings(selectedDate);
  }, [selectedDate]);

  const fetchBookings = () => {
    axios
      .get("http://localhost:8080/api/employee/booking/all")
      .then((response) => {
        setBookings(response.data);
        calculateCounts(response.data);
      })
      .catch((error) => console.error("Error fetching bookings:", error));

    axios
      .get("http://localhost:8080/api/employee/booking/count")
      .then((response) => setBookingCount(response.data))
      .catch((error) => console.error("Error fetching booking count:", error));
  };

  const calculateCounts = (bookings) => {
    let totalLunch = 0;
    let totalSnack = 0;

    bookings.forEach((booking) => {
      if (booking.lunch) totalLunch += 1;
      if (booking.snack) totalSnack += 1;
    });

    setLunchCount(totalLunch);
    setSnackCount(totalSnack);
  };

  const fetchLunchOnlyBookings = (date) => {
    axios
      .get(`http://localhost:8080/api/employee/booking/lunch-only/${date}`)
      .then((response) => setLunchOnlyBookings(response.data))
      .catch((error) => console.error("Error fetching lunch-only bookings:", error));
  };

  const fetchSnackOnlyBookings = (date) => {
    axios
      .get(`http://localhost:8080/api/employee/booking/snack-only/${date}`)
      .then((response) => setSnackOnlyBookings(response.data))
      .catch((error) => console.error("Error fetching snack-only bookings:", error));
  };

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  // Convert booking counts to an array
  const employeeBookingCounts = Object.entries(bookings.reduce((acc, booking) => {
    const empId = booking.employee ? booking.employee.id : "N/A";
    if (!acc[empId]) acc[empId] = 0;
    acc[empId]++;
    return acc;
  }, {}));

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Admin Dashboard
      </h1>

      <div className="mb-6 text-center">
        <span className="text-xl font-semibold text-gray-700">
          Total Bookings:{" "}
        </span>
        <span className="text-xl font-bold text-green-600">{bookingCount}</span>
      </div>

      <div className="mb-6 text-center">
        <span className="text-xl font-semibold text-gray-700">
          Total Lunches:{" "}
        </span>
        <span className="text-xl font-bold text-blue-600">{lunchCount}</span>
      </div>

      <div className="mb-6 text-center">
        <span className="text-xl font-semibold text-gray-700">
          Total Snacks:{" "}
        </span>
        <span className="text-xl font-bold text-orange-600">{snackCount}</span>
      </div>

      {/* Date Picker */}
      <div className="mb-6 text-center">
        <DatePicker
          format="DD-MM-YYYY"
          onChange={handleDateChange}
        />
      </div>

      {/* View Buttons */}
      <div className="mb-6 text-center">
        <button 
          onClick={() => handleViewChange('overview')}
          className={`px-4 py-2 mr-4 text-white ${view === 'overview' ? 'bg-blue-600' : 'bg-blue-400'} rounded`}
        >
          Overview
        </button>
        <button 
          onClick={() => handleViewChange('lunch')}
          className={`px-4 py-2 mr-4 text-white ${view === 'lunch' ? 'bg-green-600' : 'bg-green-400'} rounded`}
        >
          Lunch Only
        </button>
        <button 
          onClick={() => handleViewChange('snack')}
          className={`px-4 py-2 text-white ${view === 'snack' ? 'bg-orange-600' : 'bg-orange-400'} rounded`}
        >
          Snack Only
        </button>
      </div>

      {/* Data Display */}
      {view === 'overview' && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking Overview</h2>
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Employee ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Booking Count
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {employeeBookingCounts.length > 0 ? (
                  employeeBookingCounts.map(([empId, count]) => (
                    <tr key={empId} className="border-t border-gray-200">
                      <td className="px-6 py-4 whitespace-nowrap">{empId}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{count}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center px-6 py-4">
                      No Bookings Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {view === 'lunch' && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lunch Only Bookings</h2>
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Employee ID
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {lunchOnlyBookings.length > 0 ? (
                  lunchOnlyBookings.map((booking) => (
                    <tr key={booking.id} className="border-t border-gray-200">
                      <td className="px-6 py-4 whitespace-nowrap">{booking.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {booking.employee ? booking.employee.id : "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center px-6 py-4">
                      No Lunch Only Bookings
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {view === 'snack' && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Snack Only Bookings</h2>
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Employee ID
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {snackOnlyBookings.length > 0 ? (
                  snackOnlyBookings.map((booking) => (
                    <tr key={booking.id} className="border-t border-gray-200">
                      <td className="px-6 py-4 whitespace-nowrap">{booking.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {booking.employee ? booking.employee.id : "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center px-6 py-4">
                      No Snack Only Bookings
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
