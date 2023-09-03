import { Banner } from "../components/Banner"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

import bannerContacto from "../assets/bannerContacto.jpg"
import { Form } from "../components/Form"


export function Contacto (){
    return <>
        <Navbar/>
        <Banner
            cName="banner"
            image={bannerContacto}
            title="Contactanos"
        />
        <Form/>
        <Footer/>
    </>
}