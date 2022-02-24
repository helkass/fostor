import React, { useEffect, useRef, useState } from "react";
import { DataFeedBack as data } from "./data/DataFeedBack";
import { motion } from "framer-motion";

const Feedback = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="lg:overflow-hidden">
      <div className="text-center space-y-6">
        <h1 className="font-bold text-3xl">what people say about us</h1>
        <p className="font-semibold">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <motion.div className="my-12 py-5 overflow-x-hidden w-10/12 mx-auto">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="w-80 h-96  flex gap-3"
          ref={carousel}
        >
          {data.map((d) => {
            return (
              <motion.div
                key={d.id}
                className="min-w-full min-h-full text-center bg-thrid font-semibold p-3"
              >
                <h2 className="font-bold mb-2 h-1/5">{d.title}</h2>
                <p className="h-2/5 leading-relaxed">{d.desc}</p>
                <motion.div className="mt-6">
                  <div className="rounded-full overflow-hidden border-second max-w-max border-2 max-h-max mx-auto">
                    <img src={d.avatar} className="h-14 object-cover" alt="" />
                  </div>
                  <p>{d.name}</p>
                  <p className="opacity-80">{d.job}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
