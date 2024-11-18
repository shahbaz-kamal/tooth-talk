import React from "react";
import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import FeedbackCard from "../components/FeedbackCard";

const Home = () => {
  const { servicesData, feedbackData } = useLoaderData();
  console.log(servicesData, feedbackData);
  return (
    <div className="container mx-auto px-2 md:px-0">
      <section className="mb-4 md:mb-6">
        <Banner></Banner>
      </section>
      {/* Services starts */}
      <section className="pb-4 md:pb-6">
        <SectionTitle sectionTitle={"Services"}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to={"/all-treatments"}
            className="bg-color-primary text-color-black rounded-md py-3 px-4 hover:bg-color-tertiary transition duration-300 mt-4 md:mt-6  inline-flex "
          >
            Show All
          </Link>
        </div>
      </section>

      {/* Feedback section starts */}

      <section className="pb-4 md:pb-6">
        <SectionTitle
          sectionTitle={"Feedback From Our Happy Clients"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedbackData.map((feedback) => (
            <FeedbackCard
              key={feedback.reviewId}
              feedback={feedback}
            ></FeedbackCard>
          ))}
        </div>

        {/* <button className="bg-color-primary text-color-black rounded-md py-3 px-4 hover:bg-color-tertiary transition duration-300 mt-4 md:mt-6 mx-auto block">
          Show All
        </button> */}
      </section>
    </div>
  );
};

export default Home;
