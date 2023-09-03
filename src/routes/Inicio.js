import { Banner } from "../components/Banner"
import { Navbar } from "../components/Navbar"
import { Pilares } from "../components/Pilares"
import { Casos } from "../components/Casos"
import { Footer } from "../components/Footer"

import bannerInicio from "../assets/bannerInicio.jpg"

export function Inicio (){
    return <>
        <Navbar/>
        <Banner
            cName="banner"
            image={bannerInicio}
            title="Agencia de Marketing Digital especialista en Growth Performance"
        />
        <Pilares/>
        <div className="growth">
            <img alt="Growth" src="https://mercodigital.com.ar/images/about/growth.png"></img>
        </div>
        <Casos/>
        <Footer/>
    </>
}