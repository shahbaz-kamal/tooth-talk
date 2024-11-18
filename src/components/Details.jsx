import React from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal.JSX";

const Details = () => {
  const singleData = useLoaderData();
  const { cost, description, image, treatment, id } = singleData;
  return (
    <div
      className="hero min-h-screen rounded-md"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70 rounded-md"></div>
      <div className="hero-content text-neutral-content text-center rounded-md">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
          <p className="mb-5">{description}</p>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="bg-color-tertiary border-color-tertiary font-bold text-black rounded-md py-3 px-4 hover:bg-color-secondary hover:border-color-secondary transition duration-300"
          >
            Book Appoinment
          </button>
        </div>
      </div>
      <Modal treatment={treatment}></Modal>
    </div>
  );
};

export default Details;
