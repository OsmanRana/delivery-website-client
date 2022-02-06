import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleService = () => {
  const [booking, setBooking] = useState([]);
  const { bookingId } = useParams();

  useEffect(() => {
    fetch(`https://infinite-headland-54248.herokuapp.com/${bookingId}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [bookingId]);
  return { booking };
};
export default useSingleService;
