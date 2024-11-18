import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";

const AllTreatments = () => {
  const servicesData = useLoaderData();

  return (
    <div>
      {" "}
      <section className="pb-4 md:pb-6">
        <SectionTitle sectionTitle={"All treatments"}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>

        <div className=" justify-center hidden">
          <Link
            to={"/all-treatments"}
            className="bg-color-primary text-color-black rounded-md py-3 px-4 hover:bg-color-tertiary transition duration-300 mt-4 md:mt-6  inline-flex "
          >
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AllTreatments;
