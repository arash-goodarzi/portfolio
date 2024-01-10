import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,deatil,nameOfProject }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="text-2xl font-playfair text-red">{nameOfProject}</p>
        <p className="mt-7">
          {deatil}
        </p>
      </div>
      <div className="flex justify-center items-center w-44 h-44">
        <img src={`assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </div>
      
      {/* <div className="h-36">
        <img src="../logo192.png" alt="react" className="h-16" />
      </div> */}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
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
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 text-justify">
          I have a variety of skills that you can see here and you can check out
          my codes in github.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[530px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" nameOfProject="Ecommerce website" deatil="
          Frontend:react,redux,Formik,materialUI
          Backend:strapi
          Payment:stripe" />
          <Project title="Project 2" nameOfProject="Dashboard with react" deatil=" " />

          {/* ROW 2 */}
          <Project title="Project 3" nameOfProject="Membership website" deatil="
          Frontend:react
          Backend: java spring
          Database: mysql" />
          <Project title="Project 4" nameOfProject="DataScience Project" deatil="
          Frontend: React
          Backend: Flask-Python " />
          <Project title="Project 5" nameOfProject="Portfolio website" deatil="" />

          {/* ROW 3 */}
          {/* <Project title="Project 6" deatil="Game website
           https://react-game-wordle.onrender.com" />
          
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[530px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
