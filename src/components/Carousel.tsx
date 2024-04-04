import React, { useState } from "react";

interface IProps {
  images: string[];
}
const Carousel = (props: IProps) => {
  const [index, setIndex] = useState(0);
  const onNext = () => {
    if (index < props.images.length - 1) {
      setIndex(index + 1);
    }
  };

  const onBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <div>
        <img
          className="w-full  object-scale-down h-60 md:h-80 "
          src={process.env.PUBLIC_URL + "/" + props.images[index]}
        />
      </div>
      <div className="flex justify-end gap-x-3">
        <button
          disabled={index == 0}
          className="disabled:text-gray-500"
          onClick={onBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <button
          disabled={index >= props.images.length - 1}
          className="disabled:text-gray-500"
          onClick={onNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
