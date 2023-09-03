import { Card } from "./Card"
import Publicidad1  from "../assets/publicidad1.jpg"
import Publicidad2  from "../assets/publicidad2.jpg"
import Publicidad3  from "../assets/publicidad3.jpg"
import Diseno1 from "../assets/diseno.jpg"
import Diseno2 from "../assets/diseno2.jpg"
import Diseno3 from "../assets/diseno3.jpg"
import Posicionamiento1 from "../assets/posicionamiento1.jpg"
import Posicionamiento2 from "../assets/posicionamiento2.jpg"
import Posicionamiento3 from "../assets/posicionamiento3.jpg"





import "./ListaServicios.css"

export function ListaServicios(){
    return <div className="servicios">
    
    <h2>Publicidad Online</h2>
    <div className="servicios-cards">
        
        <Card
            alt = "Google Ads"
            src = {Publicidad1}
            name = "Publicidad en Google Ads"
            text = "Somos parte del 3% de las agencias Partner Premier de Google. Rankeamos alto dentro del manejo de la herramienta publicitaria de Google Ads, alcanzando excelentes performances en las campañas publicitarias. Nuestras estrategias son 100% enfocadas en resultados. Somos Full Perfomance."
        />

        <Card
            alt = "Growth Performance"
            src = {Publicidad2}
            name = "Growth Performance"
            text = "Planificamos, diagramamos y ejecutamos estrategias de full performance enfocadas 100% en tus objetivos. Maximizamos recursos de tiempo y presupuesto, y realizamos reportes mensuales en tiempo real con Data Studio."
        />

        <Card
            alt = "Facebook / Instagram"
            src = {Publicidad3}
            name = "Publicidad en Facebook / Instagram"
            text = "Creamos campañas en Facebook ads enfocadas en performance con estrategias que permiten obtener mayor visibilidad e impacto en las audiencias logrando resultados realmente medibles."
        />

    </div>


    <h2>Diseño web</h2>
    <div className="servicios-cards">

        <Card
            alt = "Sitios web institucionales"
            src = {Diseno1}
            name = "Sitios web institucionales"
            text = "Un sitio web institucional representa la imagen y los valores de una organización. Sirven para informar sobre eventos, actividades, contacto y aranceles, entre otras cosas. En MetaGrowth elaboramos webs institucionales de gran calidad e impacto visual, que sean accesibles y fáciles de usar por un público masivo y de todas las edades."
        />

        <Card
            alt = "WordPress"
            src = {Diseno2}
            name = "WordPress"
            text = "Con WordPress podés elegir entre varios modelos de plantillas determinadas y adaptarlas para crear tu propio sitio web. Es más sencillo y económico que crear una página web desde cero, ideal para pymes o emprendedores."
        />

        <Card
            alt = "Landing Page"
            src = {Diseno3}
            name = "Landing Page"
            text = "Las Landing Pages son un formato web pensado para una comunicación directa, simple y promocional. A la hora de realizar campañas en medios online, estas sirven cómo “página de aterrizaje” a la que el usuario llega por medio de un anuncio en Google o Redes Sociales. Su finalidad es captar nuevos clientes y aumentar la base de datos."
        />
    </div>


    <h2>Posicionamiento Web</h2>
    <div className="servicios-cards">
        
        <Card
            alt = "SEO"
            src = {Posicionamiento1}
            name = "Posicionamiento SEO"
            text = "Optimizamos todos los factores internos y externos de tu sitio web para rankearla en el TOP TEN de Google. El Posicionamiento SEO incluye además la generación de contenidos y la mejora de navegación para la experiencia de usuario."
        />

        <Card
            alt = "Community Manager"
            src = {Posicionamiento2}
            name = "Servicio de Community Manager"
            text = "Contamos con un equipo creativo altamente entrenado para desarrollar bajadas creativas, acordes a la estrategia planteada para alcanzar los objetivos previamente consensuados con el responsable de tu marca."
        />

        <Card
            alt = "Posicionamiento en Google"
            src = {Posicionamiento3}
            name = "Posicionamiento en Google"
            text = "Un buen posicionamiento en google, hará de manera orgánica hará que tu página web aparezca entre los primeros resultados en búsquedas relacionadas con tu rubro. Hay varias herramientas que podemos usar para lograrlo."
        />

    </div>
</div> 
}