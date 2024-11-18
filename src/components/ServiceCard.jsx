import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { cost, description, image, treatment, id } = service;

  return (
    <div className="card  shadow-xl border border-color-primary">
      <figure className="p-5">
        <img
          className="h-40 w-full object-cover rounded-xl"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="px-5 pb-5">
        <h2 className="card-title mb-2">
          {treatment}
          <div className="badge badge-secondary bg-color-secondary border border-color-secondary py-3 text-black">
            ${cost}
          </div>
        </h2>
        <p className="mb-4">{description.slice(0, 150)}...</p>
        <div className="card-actions justify-end">
          <Link
            to={`/details/${id}`}
            className="badge badge-outline bg-color-primary border border-color-primary py-4 px-4 text-black hover:bg-color-tertiary transition duration-300 hover:cursor-pointer"
          >
            Checkout More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
