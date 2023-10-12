import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} inset-0 absolute top-[120px] mx-auto flex flex-row max-w-7xl items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#7cff5e]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi I'm <span className="text-[#7cff5e]">Nick</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            I develope 3D-Visual, user terfaces
            <br className="sm:block hidden" /> and Web / Mobile applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a
          href={'#about'}
          className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2"
        >
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            className="w-3 h-3 rounded-full bg-white mb-1"
          ></motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
