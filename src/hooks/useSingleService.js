import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleService = () => {
  const [service, setService] = useState([]);
  const { serviceId } = useParams();
  useEffect(() => {
    fetch(`https://obscure-hamlet-47725.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return { service };
};
export default useSingleService;
