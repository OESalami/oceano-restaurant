import Img19 from '../assets/gallery/img19.jpg'
import Img3 from '../assets/gallery/img3.jpg'

const About = () => {
  return (
    <section className='about container mx-auto py-20 px-4'>
      {/* Heading */}
      <div className="flex justify-center items-center mb-12">
        <h2 className='font-bold text-4xl md:text-5xl text-gray-800 uppercase'>About Us</h2>
      </div>

      {/* Upcoming div elements below */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 mb-12">
        {/* Image Div */}
        <div className="w-full md:w-1/2 h-64 md:h-96">
          <img src={Img19} alt="Food Garage" className='w-full h-full object-cover rounded-lg shadow-lg'/>
        </div>

        {/* About Div */}
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>About Oceano Restaurant</h1>
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto eaque dicta aliquam deleniti praesentium iure quam excepturi? Non expedita error odio dolorem nisi harum ad voluptates est facere. Fugiat.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Div */}
        <div className="order-1 md:order-2 w-full md:w-1/2 h-64 md:h-96">
          <img src={Img3} alt="Food Garage" className='w-full h-full object-cover rounded-lg shadow-lg'/>
        </div>

        {/* About Div */}
        <div className="order-2 md:order-1 w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>About Oceano Restaurant</h1>
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque possimus, molestiae nostrum est cumque corrupti quisquam, reprehenderit esse deserunt non tempore, repellat blanditiis fugiat earum modi voluptates unde! Recusandae, officiis.</p>
        </div>
      </div>
    </section>
  )
}

export default About
