import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleService = () => {
  const [service, setService] = useState([]);
  const [booking, setBooking] = useState([]);
  const { bookingId } = useParams();
  const { serviceId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${bookingId}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [bookingId]);
  return { service, booking };
};
export default useSingleService;
