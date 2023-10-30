import Clients from "./Componets/Clients"
import Header from "./Componets/Header"
import Hero from "./Componets/Hero"
import Services from "./Componets/Services"

function App() { 

  return (
    <div className="relative w-full  bg-white overflow-hidden">  

    <div className="relative pt-6 pb-16 sm:pb-24 font-Nunito">
   
    <Header />
    <Hero  />
    <Clients />
    <Services />
    </div>
    </div>
   
    
  )
}

export default App
