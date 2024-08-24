import { RiReactjsLine } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { SiCplusplus, SiGit, SiMongodb, SiTailwindcss, SiNodedotjs, SiJira } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 10 },
  animate: {
    y: [10, -10],
    transition: { duration: duration, ease: 'linear', repeat: Infinity, repeatType: "reverse" },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity: 1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Web <span className="text-neutral-500">Technologies</span></motion.h1>
      <motion.div whileInView={{opacity: 1, x:0 }} initial={{opacity:0, x:-100}} transition={{duration: 1.5}}className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiNodedotjs title="Node.js" className="text-7xl" style={{ color: "#339933" }} />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiMongodb title="MongoDB" className="text-7xl" style={{ color: "#47A248" }} />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiTailwindcss title="Tailwind CSS" className="text-7xl" style={{ color: "#06B6D4" }} />
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiGit title="Git" className="text-7xl" style={{ color: "#F05032" }} />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <AiOutlinePython title="Python" className="text-7xl" style={{ color: "#3776AB" }} />
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiCplusplus title="C++" className="text-7xl" style={{ color: "#00599C" }} />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiJira title="Jira" className="text-7xl" style={{ color: "#0052CC" }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
