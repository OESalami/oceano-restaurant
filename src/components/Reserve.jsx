const Reserve = () => {
  return (
    <section id="reserve-section" className='reserve container mx-auto py-20 px-4'>
      {/* Title */}
      <div className="flex justify-center items-center mb-12">
        <h2 className='font-bold text-4xl md:text-5xl text-gray-800 uppercase'>Reservation</h2>
      </div>

      {/* Reservation Form */}
      <div className='flex flex-col items-center md:flex-row justify-center gap-6'>
        <div className='flex flex-col items-center md:items-center w-full md:w-1/2'>
          <h3 className='font-bold text-2xl text-gray-800'>Book a Table</h3>
          <form  action="https://api.web3forms.com/submit" method="POST" className='mt-4 w-full max-w-md'>
          <input type="hidden" name="access_key" value="a9ea7879-c34d-42ee-8699-3dd0216bbf46" />
            <div className='grid grid-cols-1 gap-4'>
              <input type="text" name='name' placeholder='Name' className='py-2 px-3 bg-gray-100 rounded-md w-full' required />
              <input type="email" name='email' placeholder='Email' className='py-2 px-3 bg-gray-100 rounded-md w-full' required />
              <input type="text" name='phone' placeholder='Phone' className='py-2 px-3 bg-gray-100 rounded-md w-full' required />
              <input type="date" name='date' placeholder='Date' className='py-2 px-3 bg-gray-100 rounded-md w-full' required />
              <input type="time" name='time' placeholder='Time' className='py-2 px-3 bg-gray-100 rounded-md w-full' required />
              <textarea name="message" id="" cols="30" rows="4" placeholder='Message' className='py-2 px-3 bg-gray-100 rounded-md w-full'  required></textarea>
              <button className='py-2 px-3 bg-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-600' type='submit'>Book Now</button>
            </div>
          </form>
        </div>

        {/* Opening Hours */}
        <div className='flex flex-col items-center w-full md:w-1/3 bg-gray-100 rounded-md px-6 py-6'>
          <h3 className='font-bold text-2xl text-gray-800'>Opening Hours</h3>
          <div className='mt-4 space-y-4 text-center'>
            <div>
              <p className='text-gray-800 font-semibold'>Monday - Friday</p>
              <p>9:00 am - 10:00 pm</p>
            </div>
            <div>
              <p className='text-gray-800 font-semibold'>Saturday - Sunday</p>
              <p>9:00 am - 11:00 pm</p>
            </div>
            <div>
              <p className='text-gray-800 font-semibold'>Holidays</p>
              <p>9:00 am - 12:00 pm</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Reserve;
