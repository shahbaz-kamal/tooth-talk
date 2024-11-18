import React from "react";

const AppoinmentCard = ({ singleData }) => {
  const { fName, lName, number, date, address } = singleData;
  return (
    <div className="card bg-color-tertiary text-black flex flex-col justify-center items-center">
      <div className="card-body">
        <h2>
          <span className="font-semibold">Patient Name:</span>{" "}
          <span className="font-bold"> {`${fName} ${lName}`}</span>
        </h2>
        <p>
          <span className="font-semibold">Phone Number:</span>{" "}
          <span className="font-bold"> {`0${number}`}</span>
        </p>
        <p>
          <span className="font-semibold">Appoinment Date:</span>{" "}
          <span className="font-bold"> {date}</span>
        </p>
        <p>
          <span className="font-semibold">Patient Address:</span>{" "}
          <span className="font-bold"> {address}</span>
        </p>
      </div>
    </div>
  );
};

export default AppoinmentCard;
