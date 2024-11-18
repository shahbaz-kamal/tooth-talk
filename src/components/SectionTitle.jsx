import React from "react";

const SectionTitle = ({ sectionTitle }) => {
  return (
    <div className="">
      <h1 className="text-2xl md:text-4xl font-bold text-center pb-4 md:pb-6">
        {sectionTitle}
      </h1>
    </div>
  );
};

export default SectionTitle;
