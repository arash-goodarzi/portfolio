import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Framework = ({ title, delay }) => {
  const projectTitle = title.split(" ").join("-");
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
      <div className="flex justify-center align-middle xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base font-semibold mx-3 my-1">
        {/* <img
          src={`assets/frameworkImages/${projectTitle}.png`}
          alt={projectTitle}
          className="h-16 px-5  w-48"
        /> */}
        {projectTitle}
      </div>
    </motion.div>
  );
};

const Frameworks = () => {
  return (
    <section id="frameworks" className="pt-28 pb-48 flex flex-col gap-4 items-center justify-center">
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
        <div className="mb-8">
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

      <div className="flex flex-col justify-center font-playfair">
        {/* FRONTEND */}
        <div className="text-yellow flex flex-col-reverse md:flex-row w-full md:justify-between items-end justify-center my-10 border rounded border-y-8 border-blue">
          <div className="w-1/2 flex justify-end">
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
              <div className="flex xl:gap-28 lg:gap-20 md:gap-16 sm:gap-4 gap-1">
                <Framework title="React" delay={0.2} />
                <Framework title="Redux" delay={0.4} />
                <Framework title="Nextjs" delay={0.6} />
                <Framework title="JavaScript" delay={0.8} />
                <Framework title="Tailwind" delay={1} />
              </div>
            </motion.div>
          </div>
          {/* <div className="w-1/2 flex justify-start">
            <motion.div
              className="flex mt-5 justify-center md:justify-start md:items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="">
                <p className="font-playfair font-semibold xl:text-3xl lg:text-2xl text-lg">
                  <span className="text-teal-300 text-center">Front-End</span>
                </p>
              </div>
            </motion.div>
          </div> */}
        </div>

        {/* BACKEND */}
        <div className="text-red flex flex-col-reverse md:flex-row w-full md:justify-between items-end justify-center my-10 border rounded border-y-8 border-blue">
          <div className="w-1/2 flex justify-end">
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
              <div className="flex xl:gap-28 lg:gap-20 md:gap-16 sm:gap-4 gap-1">
                <Framework title="Springboot" delay={0.2} />
                <Framework title="Fastapi" delay={0.4} />
                <Framework title="Java" delay={0.6} />
                <Framework title="Python" delay={0.8} />
                <Framework title="Node" delay={1} />
              </div>
            </motion.div>
          </div>
          {/* <div className="w-1/2 flex justify-start">
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
                <p className="font-playfair font-semibold xl:text-3xl lg:text-2xl text-lg">
                  <span className="text-teal-300 text-center">Back-End</span>
                </p>
              </div>
            </motion.div>
          </div> */}

        </div>

        {/* DATABASE */}
        <div className="text-yellow flex flex-col-reverse md:flex-row w-full md:justify-between items-end justify-center my-10 border rounded border-y-8 border-blue">
          <div className="w-1/2 flex justify-end">
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
              <div className="flex xl:gap-28 lg:gap-20 md:gap-16 sm:gap-4 gap-1">
                <Framework title="Mysql" delay={0.2} />
                <Framework title="Mongodb" delay={0.4} />
                <Framework title="Oracle" delay={0.6} />
                <Framework title="Prisma" delay={0.8} />
                <Framework title="Redis" delay={1} />
                {/* <Framework title="motion" delay={0.8} /> */}
              </div>
            </motion.div>
          </div>
          {/* <div className="w-1/2 flex justify-start">
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
                <p className="font-playfair font-semibold xl:text-3xl lg:text-2xl text-lg">
                  <span className="text-teal-300 text-center">Database</span>
                </p>
              </div>
            </motion.div>
          </div> */}

        </div>

        {/* Data Engineering */}
        <div className="text-red flex flex-col-reverse md:flex-row w-full md:justify-between items-end justify-center my-10 border rounded border-y-8 border-blue">
          <div className="w-1/2 flex justify-end">  
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
              <div className="flex xl:gap-28 lg:gap-20 md:gap-16 sm:gap-4 gap-1">
              <Framework title="Spark" delay={0.2} />
                <Framework title="Splunk" delay={0.4} />
                <Framework title="Kafka" delay={0.6} />
                <Framework title="Scala" delay={0.8} />
                <Framework title="Pandas" delay={1} />
                {/* <Framework title="motion" delay={0.8} /> */}
              </div>
            </motion.div>
          </div>
          {/* <div className="w-1/2 flex justify-start">  
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
                <p className="font-playfair font-semibold xl:text-3xl lg:text-2xl text-lg">
                  <span className="text-teal-300 text-center">Data Engineering</span>
                </p>
              </div>
            </motion.div>
          </div> */}

        </div>
      </div>

    </section>
  );
};

export default Frameworks;
