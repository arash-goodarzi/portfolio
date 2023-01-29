import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Framework = ({ title, delay }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div
      className="md:w-2/5 mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: delay, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex justify-center align-middle">
        <img
          src={`../assets/frameworkImages/${projectTitle}.png`}
          alt={projectTitle}
          className="h-16 px-5  w-48"
        />
      </div>
    </motion.div>
  );
};

const Frameworks = () => {
  return (
    <section id="frameworks" className="pt-28 pb-48">
      {/* HEADING 1 */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">Languages </span>
            <span className="text-yellow">Frameworks </span>
            <span className="text-blue">Libraries </span>
          </p>
          <div style={{ marginTop: "5px" }}>
            <LineGradient />
          </div>
        </div>
      </motion.div>

      {/* FRONTEND */}
      <motion.div
        className="flex mt-5 justify-center md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-3xl">
            <span className="text-teal-300">Web Developer</span>
          </p>
          <div>Front-End</div>
        </div>
      </motion.div>
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex">
          <Framework title="react" delay={0.2} />
          <Framework title="motion" delay={0.4} />
          <Framework title="nextjs" delay={0.6} />
          <Framework title="materialui" delay={0.8} />
          <Framework title="tailwind" delay={1} />
        </div>
      </motion.div>
      {/* BACKEND */}
      <motion.div
        className="flex mt-5 justify-center md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-3xl">
            <span className="text-teal-300">Web Developer</span>
          </p>
          <div>Back-End</div>
        </div>
      </motion.div>
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex">
          <Framework title="springboot" delay={0.2} />
          <Framework title="fastapi" delay={0.4} />
          <Framework title="java" delay={0.6} />
          <Framework title="python" delay={0.8} />
        </div>
      </motion.div>
      {/* DATABASE */}
      <motion.div
        className="flex mt-5 justify-center md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-3xl">
            <span className="text-teal-300">Web Developer</span>
          </p>
          <div>Database</div>
        </div>
      </motion.div>
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex">
          <Framework title="mysql" delay={0.2} />
          <Framework title="mongodb" delay={0.4} />
          <Framework title="oracle" delay={0.6} />
          {/* <Framework title="motion" delay={0.8} /> */}
        </div>
      </motion.div>
      {/* BigData */}
      <motion.div
        className="flex mt-5 justify-center md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-3xl">
            <span className="text-teal-300">Data Engineering</span>
          </p>
          <div>Bigdata</div>
        </div>
      </motion.div>
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex">
          <Framework title="spark" delay={0.2} />
          <Framework title="splunk" delay={0.4} />
          <Framework title="kafka" delay={0.6} />
          <Framework title="scala" delay={0.8} />
        </div>
      </motion.div>
    </section>
  );
};

export default Frameworks;
