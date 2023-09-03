import "./CasosStyles.css"

import { Card } from "./Card"

import Dwarves from "../assets/dwarves&sindri.png"
import Doflamingo from "../assets/doflamingo.png"
import Vyxen from "../assets/vyxen.png"


export function Casos(){
    return <div className="casos">
        <h2>Casos reales de éxito</h2>
        <p>Más de 75 marcas comprueban que trabajar con nosotros es potenciar sus ventas y ganar los primeros puestos del mercado para quedar entre los mejores.</p>

        <div className="casos-cards">
            <Card
                alt = "Doflamingo"
                src = {Doflamingo}
                name = "Doflamingo"
                text = "Campaña Google Ads, Campaña RRSS, e-Mail Marketing"
            />
        
            <Card
                alt = "Dwarves & Sindri"
                src = {Dwarves}
                name = "Dwarves & Sindri"
                text = "Campaña Google Ads, Campaña RRSS, e-Mail Marketing"
            />

            <Card
                alt = "Vyxen Style"
                src = {Vyxen}
                name = "Vyxen Style"
                text = "Landing Page, Campaña Google Ads"
            />
        </div>

    </div>
}