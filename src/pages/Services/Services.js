import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceDetail from "./SeviceDetail/ServiceDetail";
const services = [
  {
    id: 1,
    name: "Person 2 Person Delivery (P2P)",
    slogan:
      "Moving life and Emotions through Individual Delivery Services from eCourier",
    description:
      "In a generation where everything happens in an instant, delivery services also need to level up their game. Whether you need to send your father’s reading glasses or surprise your mom with a handwoven shawl, we’ll make sure everything moves with flexibility, speed, and accuracy.With our presence across the nation, we bring your essentials at the speed of light, making your life hassle-free. We are there to bring respite to an anxious wife waiting at the door or a mother waiting for a sweet surprise. Don’t worry, for we are here to deliver the memories of a lifetime.",
    image:
      "https://images.pexels.com/photos/6868618/pexels-photo-6868618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    name: "Merchant Delivery Service",
    slogan:
      "Moving entrepreneurship and emotions through Merchant Delivery Services from eCourier",
    description:
      "We understand the hustle you go through while building your business, we empathise with the nervousness of your very first-order. We see the hope in your eyes when we bring you the deliveries, and feel the warmth of your smile when you receive a good review. Because everything that matters to you, matters a great deal to us. Being an all-in-one logistics platform, we offer you the flexibility to deliver things wherever and whenever you require. Be it the raw materials for every month or finished products for your potential customers. We move things for you; the things that have the power to move you.",
    image:
      "https://images.pexels.com/photos/6348105/pexels-photo-6348105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 3,
    name: "Air Parcel",
    slogan:
      "Moving emotions with Speed through Air Parcel Services from eCourier",
    description:
      "When things cant wait to be sent the next day of the coming week, and you desperately want to send or receive something that very day, we hear you. We understand the anticipation for those documents from your potential employer, or the joy your child feels when his birthday gift comes well in advance. Every parcel that we carry comes bundled with real-time tracking so you know where it is headed. Our dedicated team works 24*7 to ensure fastest delivery and minimize cancelation ratio so that we, as a business partner, can ensure your parcel always reaches its destination in record time. And, it matters a great degree because while moving things that are so close to you, we also intend to move a part of you.",
    image:
      "https://images.pexels.com/photos/327430/pexels-photo-327430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 4,
    name: "Corporate & SME Delivery",
    slogan:
      "Moving Businesses and emotions through Corporate Delivery Services from eCourier",
    description:
      "A business is built on promises. When you promise a potential customer swift delivery, allow us to help you fulfil it. When you promise your partners scalability, we can help you with that as well. From providing a hassle-free end-to-end delivery to making sure we accelerate your company’s efficiency, we help your business a great deal with each delivery. Our delivery solutions can be customised for big and small corporations. Powered by advanced tracking systems, you can track your orders just like you track your company’s growth every quarter.",
    image:
      "https://images.pexels.com/photos/5025643/pexels-photo-5025643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 5,
    name: "Line Haul",
    slogan:
      "Moving emotions with Speed through Line Haul Services from eCourier",
    description:
      "When your business needs a little push and you need a mode of transport to reach your customers, we can be of help. No matter how big the shipment or how far the destination, we will help you reach there with our fleet of trucks. What’s more, if you need a team of dedicated drivers, we can provide you with that as well. All you need to do is call us with your requirements and sit back. We will make it happen for you. Trust us when we say we can move things for you, it will not be an over promise but just another plunge we are ready to take for you.",
    image:
      "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 6,
    name: "Warehouse",
    slogan:
      "Products, packages, Boxes, items, cartons, Inventory, shipments and emotions. Warehousing Services From eCourier",
    description:
      "Are you spending valuable time and money maintaining your own warehouse? We can help. Let eCourier reduce your operating expenses, saving your precious time to focus on your core business, by managing our warehouse for you.",
    image:
      "https://images.pexels.com/photos/6169643/pexels-photo-6169643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const Services = () => {
  return (
    <Container sx={{ flexGrow: 1, my: 16 }}>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        textAlign="left"
        fontWeight="bold"
        sx={{
          fontSize: { xs: 36 },
          textAlign: { xs: "center", md: "left" },
          my: 8,
          pl: 4,
          borderLeft: { xs: "none", md: 5 },
        }}
      >
        We provide services that <br />
        you can <span className="special">rely</span> on
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {services.map((service) => (
          <ServiceDetail key={service.id} service={service}></ServiceDetail>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
