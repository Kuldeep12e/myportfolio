import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Lilcon } from "./Lilcon";

const Details = ({ position, school, schoolLink, time, address }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <Lilcon reference = {ref}/>
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={schoolLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{school}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4px">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[6px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="BE-CSE"
            school="Chandigarh University"
            schoolLink="https://www.cuchd.in/"
            time="2021-2025"
            address="Mohali, Punjab"
          />
          <Details
            position="Intermediate"
            school="Uma Shankar Vidyapeeth"
            schoolLink=""
            time="2018-2019"
            address="Barhalganj Gorakhpur"
          />
           <Details
            position="Matriculation"
            school="Uma Shankar Vidyapeeth"
            schoolLink=""
            time="2016-2017"
            address="Barhalganj Gorakhpur"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
