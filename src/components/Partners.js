import "./PartnersStyles.css"
import { PartnersData } from "./PartnersData"

export function Partners(){
    return <div className="partners">
        <h2>Codo a codo con nuestros partners</h2>
        <p>Contamos con el apoyo de las más grandes plataformas de anuncios en todo internet.</p>

        <div className="partners-img">
            <PartnersData
                alt="Google Partner"
                src="https://mercodigital.com.ar/images/brand/brand-1.webp"
            />

            <PartnersData
                alt="Facebook Business Partner"
                src="https://mercodigital.com.ar/images/brand/brand-2.webp"
            />

            <PartnersData
                alt="Cámara Argentina de Comercio Electrónico"
                src="https://mercodigital.com.ar/images/brand/brand-3.webp"
            />

            <PartnersData
                alt="WhatsApp"
                src="https://mercodigital.com.ar/images/brand/brand-4.webp"     
            />
        </div>
    </div>
}