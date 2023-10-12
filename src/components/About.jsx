import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../contants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className={'xs:w-[250px] w-full'}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="shadow-card w-full green-pink-gradient p-[1px] rounded-[20px]"
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="flex flex-col justify-evenly items-center min-h-[250px] bg-tertiary rounded-[20px] py-5 px-12"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1)}
        className="text-secondary text-[17px] max-w-3xl leading-[30px] mt-4"
      >
        I am a professional software engineer with experience in JavaScript,
        React, React Native, Node.js, MongoDB & Three.js. I am a quick learner
        and collaborative closely with clients to create efficient, scalable and
        user-friendly solutions that solves real-world problems. Let's work
        together to bring your ideas to life!
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
