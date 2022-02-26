import React from 'react'

const Ride = ({rides}) => {

  return (
    <div className="ride" >
            <div className="imgBx">
                <img src={rides.map_url} alt="" />
            </div>
            <div className="user-details">
                    <div className="details">
                        <p>Ride Id : <span>{rides.id}</span></p>
                        <p>Origin Station : <span>{rides.origin_station_code}</span></p>
                        <p>station_path : <span>{JSON.stringify(rides.station_path)}</span></p>
                        <p>Date : <span>{rides.date}</span></p>
                        <p>Distance : <span>{rides.distance}</span></p>
                    </div>
                    <div className="location">
                        <div>{rides.state}</div>
                        <div>{rides.city}</div>
                    </div>
            </div>
        </div>
  )
}

export default Ride