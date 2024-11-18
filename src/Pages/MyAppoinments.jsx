import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AppoinmentCard from "../components/AppoinmentCard";

const MyAppoinments = () => {
  const { user } = useContext(AuthContext);
  const [localSavedData, setLocalSavedData] = useState([]);
  useEffect(() => {
    const localData = localStorage.getItem("appoinments");

    let savedData = [];
    if (localData) {
      savedData = JSON.parse(localData);
    }
    const userData = savedData.filter((data) => data.email === user?.email);

    setLocalSavedData(userData);
    console.log(localSavedData);
  }, []);

  return (
    <>
      <h2 className="text-center font-semibold  text-2xl md:3xl lg:5xl mb-4 md:mb-6">
        Total Appoinments for user having Email:{" "}
        <span className="font-bold text-red-500">{user?.email}</span> is{" "}
        {localSavedData.length}
      </h2>
      <p className="font-semibold text-center mb-4">
        Below is the appoinment Cards
      </p>
      <div className="container mx-auto px-0 md:px-2 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {localSavedData.map((singleData, idx) => (
            <AppoinmentCard key={idx} singleData={singleData}></AppoinmentCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyAppoinments;
