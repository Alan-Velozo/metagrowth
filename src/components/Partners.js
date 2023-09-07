import "./PartnersStyles.css"
import { PartnersData } from "./PartnersData"

import FastBanana from "../assets/fastBanana.png"
import Aven from "../assets/aven.png"
import Fakery from "../assets/fakery.png"
import FoxHub from "../assets/foxhub.png"




export function Partners(){
    return <div className="partners">
        <h2>Codo a codo con nuestros partners</h2>
        <p>Contamos con el apoyo de las más grandes plataformas de anuncios en todo internet.</p>

        <div className="partners-img">
            <PartnersData
                alt="Fast Banana"
                src={FastBanana}
            />

            <PartnersData
                alt="Aven"
                src={Aven}
            />

            <PartnersData
                alt="Fakery"
                src={Fakery}
            />

            <PartnersData
                alt="FoxHub"
                src={FoxHub} 
            />
        </div>
    </div>
}