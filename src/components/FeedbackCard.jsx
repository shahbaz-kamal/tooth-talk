import React from "react";
import ReactStars from "react-rating-stars-component";

const FeedbackCard = ({ feedback }) => {
  const { name, userImg, review, rating } = feedback;
  return (
    <div className="card  shadow-xl border border-color-primary">
      <figure className="p-5">
        <img
          className="h-40 w-full object-cover rounded-xl"
          src={userImg}
          alt="Shoes"
        />
      </figure>
      <div className="px-5 pb-5">
        <h2 className="card-title mb-2">{name}</h2>
        <p className="mb-4">{review}</p>
        <div className="flex items-end">
          {" "}
          <div className="flex items-center gap-2">
            <ReactStars
              count={5}
              value={rating} // Pass the dynamic rating here
              size={24}
              isHalf={true} // Enable half-star support
              activeColor="#FF8C47"
              edit={false} // Makes it read-only
            />
            <p className="font-medium text-base text-color-70">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
