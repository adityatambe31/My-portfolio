import { AWARDS } from "../constants/index.js";
import { motion } from "framer-motion";


const Awards = () => {
  return (
    <div className="border-b border-neutral-900 pb-3">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1 }} className="my-20 text-center text-4xl"
      >
        Honors <span className="text-neutral-500">& Awards
        </span>      
        </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {AWARDS.map((award, index) => (
          <motion.a
            key={award.id}
            href={award.file}
            download
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(45deg, #81689D, #1F2544)",
              color: "white",
              boxShadow: "0 10px 20px black",
            }}
            transition={{ duration: 0.3 }}
            className="block p-4 bg-grey rounded-lg shadow-lg text-center transform hover:-translate-y-2"
          >
            <motion.h3
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="text-xl font-m text-white-600 "
            >
              {award.title}
            </motion.h3>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Awards;
