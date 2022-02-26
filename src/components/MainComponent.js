import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import RidesList from "./RidesList";


const MainComponent = () => {
  const [activeSection, setActiveSection] = useState("nearestRides");
  const [filteredRides, setFilteredRides] = useState([]);
  const rides = useSelector((state) => state.rides);
  const userStationCode = useSelector((state) => state.user.station_code);
  const filterData = useSelector((state) => state.filter);
  const sortedRides = [];

  const sectionChangeHadler = (sectionName) => {
    setActiveSection(sectionName);
  };

  for ( let i = userStationCode, j = userStationCode;i < 200, j > -100; i++, j-- ) {
    rides.forEach((ride) => {
      ride.station_path.forEach((ele) => {
        if (
          (ele == i || ele == j) &&
          !sortedRides.find((sortedRide) => sortedRide.id == ride.id)
        ) {
          sortedRides.push({
            ...ride,
            distance: Math.abs(userStationCode - i),
          });
        }
      });
    });
  }


  useEffect(() => {
    if (filterData.state == "state" && filterData.city == "city") {
      setFilteredRides([...sortedRides]);
      
    
    }
    if (filterData.state != "state") {
      setFilteredRides(
        sortedRides.filter((rides) => rides.state == filterData.state)
      );     
    }

    if(filterData.city!=='city'){

      setFilteredRides(sortedRides.filter(rides=> rides.city == filterData.city))
    }
    
  }, [filterData,sortedRides.length]);

  const d = new Date();
  const currentTime = d.getTime();


  const upcomingRides =  filteredRides.filter((ride) => {
    return new Date(ride.date).getTime() > currentTime;
  });

  const pastRides =filteredRides.filter((ride) => {
    return new Date(ride.date).getTime() < currentTime;
  });

  return (
    <section>
      <Navbar
        onSectionChange={sectionChangeHadler}
        rideInfo={{
          pastRides: pastRides.length,
          upcomingRides: upcomingRides.length,
        }}
      />

      {activeSection === "nearestRides" && <RidesList rides={filteredRides} />}
      {activeSection === "upcomingRides" && <RidesList rides={upcomingRides} />}
      {activeSection === "pastRides" && <RidesList rides={pastRides} />}
    </section>
  );
};

export default MainComponent;
