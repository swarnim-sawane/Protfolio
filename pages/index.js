//next image
import Image from "next/image";

//component
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../variants';


const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      
      {/*text*/}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 
      to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
         h-full container mx-auto">
          {/*title*/}
          <motion.h1 
          variants={fadeIn('down',0.2)} 
          initial="hidden" 
          animate="show"
          exit="hidden"
          className="h1"
          >
            Unleashing Potential <br/> through{' '}
            <span className="text-accent">Digital Learning</span>
          </motion.h1>
          {/*subtitle*/}
          <motion.p 
          variants={fadeIn('down',0.3)} 
          initial="hidden" 
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >Diving into the world of coding and AI with insatiable curiosity, I'm on a journey to create digital innovations that inspire positive change. Driven by a genuine passion for technology and a love for continuous learning. Welcome to my world of exploration, where each line of code and AI endeavor carries the promise of a brighter, more connected future.
          </motion.p>
          
          
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div 
            variants={fadeIn('down',0.4)} 
            initial="hidden" 
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      
      {/*image*/}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
         xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

        {/* particles */}
          <ParticlesContainer />
        {/* Avatar img */}
        <motion.div 
          variants={fadeIn('up',0.2)} 
          initial="hidden" 
          animate="show"
          exit="hidden" 
          transition={{duration: 1, ease:"easeInOut"}}
          className="w-full h-full max-w-[360px] max-h-[535px] absolute -bottom-32  lg:bottom-0 lg:right-[13%]"> 
          <Avatar />
        </motion.div>
      </div>
    </div>

  );
};

export default Home;
