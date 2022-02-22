import React, { useEffect, useRef, useState } from "react";

const DealTheDay = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 3);

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  // component did mount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <section className="py-10 lg:px-16 mt-6">
      <div className="container bg-thrid mx-auto max-h-max flex md:px-16 sm:flex-row flex-col px-6 relative">
        <div className="sm:w-6/12 mt-16 md:mb-16 mb-8 sm:text-left text-center sm:space-y-8 space-y-6 z-10">
          <h1 className="capitalize font-bold text-4xl">deal of the day</h1>
          <p className="font-semibold bg-primary sm:bg-inherit bg-opacity-70">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been
          </p>
          <div
            className="flex sm:justify-start md:space-x-5 sm:space-x-3 space-x-2 font-semibold justify-center text-center capitalize
          "
          >
            <div className="w-20 space-y-1 shadow-xl py-1 bg-white">
              <h3 className="md:text-5xl sm:text-4xl text-3xl">{timerDays}</h3>
              <p>day</p>
            </div>
            <div className="w-20 space-y-1 shadow-xl py-1 bg-white">
              <h3 className="md:text-5xl sm:text-4xl text-3xl">{timerHours}</h3>
              <p>hours</p>
            </div>
            <div className="w-20 space-y-1 shadow-xl py-1 bg-white">
              <h3 className="md:text-5xl sm:text-4xl text-3xl">
                {timerMinutes}
              </h3>
              <p>minutes</p>
            </div>
            <div className="w-20 space-y-1 shadow-xl py-1 bg-white">
              <h3 className="md:text-5xl sm:text-4xl text-3xl">
                {timerSeconds}
              </h3>
              <p>seconds</p>
            </div>
          </div>
          <button className="bg-font text-white px-6 py-2 opacity-95">
            shop now
          </button>
        </div>
        <div className="sm:w-6/12 sm:flex sm:relative absolute z-0 bg-transparent opacity-70 sm:opacity-100 left-0 bottom-0">
          <img
            className="h-full object-cover"
            src="./images/ian-nonb-min.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default DealTheDay;
