import c1 from '../assets/clients/580b57fcd9996e24bc43c1dc 1@2x.svg'
import c2 from '../assets/clients/Ethiopian_Airlines_Logo 1@2x.svg'
import c3 from '../assets/clients/Sheraton-Logo-1937 1@2x.svg'
import c4 from '../assets/clients/oilibya 1@2x.svg'
import c5 from '../assets/clients/pngegg 1.svg'
const  Clients:React.FC = ()=> {
    return (
      <div className="bg-[#E9E9E9] mt-20  mx-auto"id='clients'>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={c1} alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={c2} alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={c3} alt="StaticKit" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src={c4}
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src={c5}
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default Clients;