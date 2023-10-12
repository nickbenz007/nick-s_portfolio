import { motion } from 'framer-motion';
import { styles } from '../styles';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../contants';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className="xs:w-[320px] w-full bg-black-200 rounded-3xl p-10"
    >
      <p className="text-white text-[48px] font-bold">&quot;</p>
      <div className="mt-1">
        <p className="text-white text-[18px] tracking-wider">{testimonial}</p>
        <div className="flex items-center justify-between gap-1 mt-7">
          <div className="flex-1 flex flex-col">
            <p className="text-white text-[16px] font-medium">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="text-secondary text-[12px] mt-1">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What clients talk about</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} flex flex-wrap gap-7 -mt-20 pb-14`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
