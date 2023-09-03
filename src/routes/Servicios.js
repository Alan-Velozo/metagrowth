import { Banner } from "../components/Banner"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { ListaServicios } from "../components/ListaServicios"

import bannerServicios from "../assets/bannerServicios.jpg"


export function Servicios (){
    return <>
        <Navbar/>
        <Banner
             cName="banner"
             image={bannerServicios}
             title="¡Conocé nuestros servicios!"
        />
        <ListaServicios/>
        <Footer/>
    </>
}