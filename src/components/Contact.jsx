import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EarthCanvas } from './canvas';
import { styles } from '../styles';
import SectionWrapper from '../hoc/SectionWrapper';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formDataRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_zg7ay2f',
        'template_4bb6fel',
        {
          from_name: formData.name,
          to_name: 'Nick',
          from_email: formData.email,
          to_email: 'nickbenz007@gmail.com',
          message: formData.message,
        },
        '0tBci_G7rhYZeGeOw'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you! I will get back to you as soon as possible.');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong!');
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch!</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>
        <form
          ref={formDataRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={'Your Name'}
              className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg focus:outline-dashed outline-1 outline-lime-500 border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={'Your Email'}
              className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg focus:outline-dashed outline-1 outline-lime-500 border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={'What would you like to say!'}
              className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg focus:outline-dashed outline-1 outline-lime-500 border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-[10px] hover:shadow-slate-300"
          >
            Submit
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
