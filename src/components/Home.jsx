import Hero from '../assets/hero.jpg'
import HeroFood from '../assets/pizza-burgers.png'
import { FaArrowRight } from 'react-icons/fa'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div className="home w-full h-[100vh] bg-center bg-no-repeat p-6" style={{backgroundImage: `url(${Hero})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className='flex flex-col md:flex-row justify-center pt-4 items-center space-y-6 md:space-x-2'>
        {/* Hero text */}
        <div className='pl-3 justify-center items-center  text-center md:text-left'>
          <h1 className='shiny-text text-4xl md:text-6xl font-bold text-white uppercase mb-6'>Welcome to Oceano Restaurant</h1>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-semibold mb-5'>At Oceano, enjoy the ultimate drive-in dining experience! <br /> Savor delicious, freshly made meals from the comfort of your car—quick, <br /> convenient, and packed with flavor.</p>

          {/* Button */}
          <div className='flex justify-center md:justify-start'>
          <Link  to='reserve' smooth={true} duration={500}>
          <button className='flex items-center py-3 px-6 bg-yellow-400 text-xl md:text-2xl text-white font-semibold rounded-full hover:bg-yellow-600 mt-5'>Reserve <FaArrowRight className='w-6 h-6 ml-2' /></button>
          </Link>
          </div>
        </div>

        {/* Hero Food Image */}
        <div className='w-auto md:w-[40rem] md:h-[40rem]'>
          <img src={HeroFood} alt="Chinese food on the tongue" className='sm:w-[30rem] sm:h-[30rem] md:w-full md:h-full object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default Home
