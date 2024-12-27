import React from "react";
import banner from "../../public/banner1.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4  flex med:flex-row my-10">
        <div className="w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Learning about Deen (Islamic way of life) is of immense importance
              for Muslims as it helps them live a purposeful and fulfilling life
              while aligning with the commands of Allah. Understanding Deen is
              not just about religious rituals but about embracing a holistic
              lifestyle that guides every aspect of life, ensuring harmony
              between worldly existence and the hereafter.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-secondary">Secondary</button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={banner}
            className="h-85 w-85 rounded-lg px-10 py-10"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
