import React, { useEffect, useState } from "react";
import { dummyMyBookingsData } from "../assets/assets.js";
import Title from "../components/Title.jsx";

const MyBooking = () => {
  const [bookings, setBooking] = useState([]);

  const fetchMyBooking = async () => {
    setBooking(dummyMyBookingsData);
  };

  useEffect(() => {
    fetchMyBooking();
  }, []);
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
      <Title
        title={"My Booking"}
        subTitle="View and manage your all car booking"
        align="left"
      />
      <div>
        {bookings.map((booking, index) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-4 gap-6
          p-4 border border-borderColor rounded-lg mt-5 first:mt-12 "
          >
            {/* car image + info */}
            <div className="md:col-span-1">
              <div className="rounded-md overflow-x-hidden mb-3">
                <img
                  src={booking.car.image}
                  alt="car_image"
                  className="w-full h-auto
                aspect-video object-cover"
                />
              </div>
              <p className="text-lg font-medium mt-2">
                {booking.car.brand} {booking.car.model}
              </p>
              <p className="text-gray-500">
                {booking.car.year} . {booking.car.category} . {booking.car.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
