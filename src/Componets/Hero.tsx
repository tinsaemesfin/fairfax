import Lottie from 'lottie-react'
import animationData from '../assets/hero-animation.json'

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col px-20 md:px-10 md:flex-row items-center justify-center gap-6 mt-5 md:mt-28 max-w-[1440px] mx-auto">
      <div className="px-4 lg:w-1/2  xl:pr-16">
        <h1 className="text-4xl tracking-tight font-bold text-primary-blue sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
          <span className="block ">Transforming Ideas into</span>
          <span className="block text-secondary-golden  mt-3 ">Seamless Experiences</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-primary-blue sm:text-xl md:mt-8 md:max-w-3xl font-normal">
          Tech agency, providing fresh, creative digital services to businesses who want to grow online. Focusing on results, we use our technical skill and industry insight to help you meet your digital goals.
        </p>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary-golden hover:bg-hover-secondary-golden md:py-4 md:text-lg md:px-10"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3  border-secondary-golden border-2 text-base font-medium rounded-md text-primary-blue bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              PORTFOLIO
            </a>
          </div>
        </div>
      </div>
      <div className='lg:w-1/2'>
        <Lottie animationData={animationData} />
      </div>
    </div>
  )
}

export default Hero