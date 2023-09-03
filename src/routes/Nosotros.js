import { Banner } from "../components/Banner"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Trayectoria } from "../components/Trayectoria"
import { Partners } from "../components/Partners"
import { Proceso } from "../components/Proceso"

import bannerNosotros from "../assets/bannerNosotros.jpg"

export function Nosotros (){
    return <>
        
        <Navbar/>
        <Banner
           cName="banner"
           image={bannerNosotros}
           title="¡Somos MetaGrowth, agencia partner de Google!"
        />

        <Trayectoria/>
        <Proceso/>
        <Partners/>

        <Footer/>
    </>
}