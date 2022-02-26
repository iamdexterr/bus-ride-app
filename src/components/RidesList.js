import React from "react";
import Ride from "./Ride";

const RidesList = ({ rides }) => {
  let content = rides.map((ride) => {
    return <Ride key={ride.id} rides={ride} />;
  });

  if (rides.length == 0) {
    content = <p className="message">There is no Rides present here</p>;
  }

  return <div className="rides">{content}</div>;
};

export default RidesList;
