import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Modal = ({ treatment }) => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const fName = e.target.fName.value;
    const lName = e.target.lName.value;
    const number = e.target.number.value;
    const date = e.target.date.value;
    const address = e.target.address.value;
    const info = { fName, lName, number, date, address, email: user?.email };
    let savedData = [];
    const localData = localStorage.getItem("appoinments");
    if (localData) {
      savedData = JSON.parse(localData);
    }
    savedData.push(info);
    localStorage.setItem("appoinments", JSON.stringify(savedData));
  };
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* <h3 className="font-bold text-lg">Hello!</h3> */}
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                name="fName"
                type="text"
                placeholder="Enter your First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                name="lName"
                type="text"
                placeholder="Enter your Last Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                value={user?.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                name="number"
                type="number"
                placeholder="Enter your Phone Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Appoinment Date</span>
              </label>
              <input
                name="date"
                type="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                name="address"
                type="text"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className=" bg-color-tertiary border-color-tertiary font-bold text-black rounded-md py-3 px-4 hover:bg-color-secondary hover:border-color-secondary transition duration-300">
                Make Appoinment
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn ">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
