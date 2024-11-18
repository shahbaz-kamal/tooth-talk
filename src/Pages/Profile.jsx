import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className="  bg-color-tertiary text-black flex flex-col items-center rounded-lg p-5 gap-6 max-w-fit mx-auto mb-8">
      <div className="rounded-full w-32 h-32">
        <img
          className="rounded-full w-full h-full object-cover"
          src={`${user.photoURL}`}
          alt=""
        />
      </div>
      <div>
        <h1>
          <span className="font-semibold">Email:</span>{" "}
          <span className="font-bold">{user.email}</span>
        </h1>
        <h1>
          <span className="font-semibold">Name:</span>{" "}
          <span className="font-bold">{user.displayName}</span>
        </h1>
      </div>
    </div>
  );
};

export default Profile;
