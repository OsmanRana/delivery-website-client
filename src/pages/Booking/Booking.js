import React from "react";
import useSingleService from "../../hooks/useSingleService";

const Booking = () => {
  const { service } = useSingleService();
  const { name, description, image, slogan } = service;
  return (
    <div>
      <h1>This is booking</h1>
      {description}
      {name}
    </div>
  );
};

export default Booking;
