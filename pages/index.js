import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import Socials from '../components/Socials';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-screen relative'>
      {/* Particles Container */}
      <ParticlesContainer />

      {/* Centered Content */}
      <div className="flex items-center justify-center h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative z-10">
        <div className="text-center">
          {/* Socials */}
          <motion.div 
            variants={fadeIn('down', 0.1)} 
            initial="hidden" 
            animate="show"
            exit="hidden"
            className="mb-10 flex justify-center z-20"
          >
            <Socials />
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={fadeIn('down', 0.2)} 
            initial="hidden" 
            animate="show"
            exit="hidden"
            className="mb-10"
          >
            <Image 
              src="/logo-swarnim.svg" 
              alt="logo" 
              width={700}  // Adjust width as needed
              height={100} // Adjust height as needed
              priority={true}
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeIn('down', 0.3)} 
            initial="hidden" 
            animate="show"
            exit="hidden"
            className="text-2xl md:text-3xl lg:text-4xl font-bold mx-auto mb-10"
          >
            AI DEVELOPER
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Home;
