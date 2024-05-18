import { motion } from "framer-motion"
import { projects } from "../constants";
import { Projects } from "./projects";


export function Portfolio() {

  return (
    <div className="pt-[100px] flex flex-col  items-center">
      <header className="flex flex-col  justify-center">
        <h2 className="font-poppins font-bold text-[48px] text-text">Portfolios</h2>
        <p className="mx-auto font-poppins text-[18px] text-text">
          Let’s explore the world!
        </p>
      </header>
      <motion.form 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate transition={{ type: "spring", stiffness: 100 }}
        className="grid grid-cols-3 max-sm:grid-cols-1 
        gap-[30px] min-md:w-[1539px] min-md:h-[660px] pt-[50px]"
      >
        {
          projects.map((project) => 
              <Projects key={project.id}
                title={project.title}
                baseImg={project.baseImg}
                url={project.url}
                description={project.description}
                site={project.site}
              />
          )
        }
      </motion.form>
    </div>
  )
}