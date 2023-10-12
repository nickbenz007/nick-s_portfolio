import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../contants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} fixed flex w-full items-center top-0 z-20 py-1 bg-primary`}
    >
      <div className="flex w-full items-center justify-between max-w-7xl mx-auto">
        <Link
          to={'/'}
          className="flex items-center gap-2"
          onClick={() => {
            setActive(''), window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
          <p className="flex text-white text-[18px] font-bold cursor-pointer">
            Nick
            <span className="sm:block hidden">&nbsp;'s | Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? menu : close}
            alt="menu"
            className={'w-[28px] h-[28px] object-contain cursor-pointer'}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 z-10 min-w-[140px] rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  }  text-[16px] font-poppins font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title), setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
