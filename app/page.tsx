import Image from 'next/image'

export default function Home() {
  return (
    <div className=' w-screen h-screen flex flex-row justify-center items-center'>
      <div className='w-5/6 xl:w-4/6 bg-custom-purple-200 flex flex-col-reverse justify-between items-center rounded-lg sm:flex-row'>
        <div className=' w-full h-1/2 sm:w-1/2 sm:h-full'>
          <div className=' flex flex-col justify-center items-center sm:justify-between text-center sm:text-start'>
            <div className='text-3xl sm:text-lg lg:text-3xl font-bold text-c-white-200 lg:my-5 lg:mx-10 sm:mx-3 sm:my-2 mx-5 my-10 '>
              <p>
                Get <span className=' text-custom-purple-100'>insights</span> that help your business grow. 
              </p>
            </div>
            <div className=' sm:text-sm md:text-base text-c-white-100 lg:my-5 lg:mx-10 sm:mx-3 sm:my-2 mx-5 mb-5'>
              Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
            </div>
            <div className=' flex  flex-col sm:flex-row justify-around w-full lg:my-5 lg:mx-10 sm:mx-3 sm:my-2 mx-5 mb-5'>
              <div className='flex flex-col mb-5 sm:my-0'>
                <div className='text-xl sm:text-sm lg:text-xl font-bold text-c-white-200'>
                  10k+
                </div>
                <div className='text-lg sm:text-sm lg:text-lg text-c-white-100'>
                  COMPANIES
                </div>
              </div>
              <div className='flex flex-col mb-5 sm:my-0'>
                <div className='text-xl sm:text-sm lg:text-xl font-bold text-c-white-200'>
                  314
                </div>
                <div className='txt-;g sm:text-sm lg:text-lg text-c-white-100'>
                  TEMPLATES
                </div>
              </div>
              <div className='flex flex-col mb-5 sm:my-0'>
                <div className='text-xl sm:text-sm lg:text-xl font-bold text-c-white-200'>
                  12M+
                </div>
                <div className= ' text-lg sm:text-sm lg:text-lg text-c-white-100'>
                  QUERIES
                </div>
              </div>
            </div>
          </div>
         </div> 
         <div className=' w-full h-1/2 sm:w-1/2 sm:h-full relative '>
          <div className=' bg-custom-purple-100 w-full h-full z-2 bg-opacity-50 absolute inset-0'></div>
          <Image
          src={"/images/image-header-desktop.jpg"}
          width={500}
          height={500}
          className=' rounded-r-lg object-contain w-full h-full'
          alt='p'
          />
         </div>
        
      </div>
    </div>
  )
    
}
