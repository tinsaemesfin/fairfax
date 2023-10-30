
import web from '../assets/services/service1.svg'
import mobile from '../assets/services/mobile.svg'
import seo from '../assets/services/seo.svg'
import uiux from '../assets/services/uiux.svg'
import maintenance from '../assets/services/maintenace.svg'
import hosting from '../assets/services/hosting.svg'

interface Service {
  title: string;
  desc: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Web Dev',
    desc: 'Experience the fusion of creativity and technology with Our experts craft stunning and user-friendly websites that bring your vision to life.',
    icon: web,
  },
  {
    title: 'Mobile Dev',
    desc: 'Bring Your App Ideas to Life We transform your app concepts into reality.',
    icon: mobile,
  },
  {
    title: 'UI/UX DESIGN',
    desc: 'We specialize in crafting user-centric, captivating interfaces to enhance your digital presence.',
    icon: uiux,
  },
  {
    title: 'SEO',
    desc: 'We optimize your website to rank higher in search results, driving more organic traffic to your business.',
    icon: seo,
  },
  {
    title: 'Maintenance',
    desc: 'Our website maintenance team ensures your online presence remains up-to-date, secure, and free of glitches.',
    icon: maintenance,
  },
  {
    title: 'Hosting',
    desc: 'We provide a secure and reliable digital home for your website with top-notch server infrastructure and expert support.',
    icon: hosting,
  },
  
];

const Services:React.FC =()=> {
  return (
    <div className="max-w-[1440px] mx-auto mt-10 md:mt-28" id='services'>
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-primary-blue uppercase">Why choose us </h2>
              <p className="mt-2 text-3xl font-bold text-primary-blue tracking-tight sm:text-4xl">
              What We Offer
              </p>
              </div>
    <ul role="list" className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 mt-20">
      {services.map((service,index) => (
        <li key={index} className="col-span-1 bg-white rounded-lg  shadow-lg  hover:bg-gray-100 px-10 mx-10 md:mx-1">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div>
                <img className="object-cover" src={service.icon} alt="" />
                
            </div>
          
            <div className="flex-1 truncate">
              <div className="flex items-center justify-center space-x-3">
                <h1 className="text-primary-blue text-2xl font-bold truncate">{service.title}</h1>
                
              </div>
              
            </div>
            
          </div>
          <div>
            <div className="p-5">
                <p className="text-primary-blue">{service.desc}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
export default Services;