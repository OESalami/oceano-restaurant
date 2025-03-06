import { Link } from 'react-scroll';
import { HiBars3BottomRight } from 'react-icons/hi2';
import SideMenu from '../Layout/SideMenu';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <header className='sticky bg-[#222224] text-white top-0 z-50'>
       <nav className="container h-20 mx-auto flex items-center justify-between py-4 px-6">
      {/* Left - Logo */}
      <div className='shiny-text'>
        <Link to="/" className='text-3xl font-bold uppercase cursor-pointer'>Oceano Restaurant</Link>
      </div>

      {/* Middle - Links */}
      <div className='text-xl font-bold items-center'>
        <div className='hidden md:flex space-x-4 justify-center items-center'>
        <Link to='home' smooth={true}  duration={500} className='cursor-pointer'>Home</Link>
        <Link to='about' smooth={true}  duration={500} className='cursor-pointer'>About Us</Link>
        <Link to='menu' smooth={true}  duration={500} className='cursor-pointer'>Menu</Link>
        <Link to='gallery' smooth={true}  duration={500} className='cursor-pointer'>Gallery</Link>
        <Link to='reserve' smooth={true} duration={500}>
        <button className='py-1 px-3 bg-yellow-400 text-white font-semibold rounded-full hover:bg-yellow-600'>Reserve</button>       
        </Link>
        </div>

        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className='flex md:hidden'>
          <HiBars3BottomRight className='h-7 w-7 text-white' />
        </button>
      </div>  

         {/* Side Menu */}
         <SideMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </nav>
    </header>
  )
}

export default Navbar;
