import "./PilaresStyles.css"

import Pilares1 from "../assets/pilares1.jpg" 
import Pilares2 from "../assets/pilares2.jpg" 
import Pilares3 from "../assets/pilares3.jpg" 
import Pilares4 from "../assets/pilares4.jpg" 


export function Pilares(){
    return <div className="pilares">
        <h2>¿Sabes cuáles son los Pilares del Growth Marketing?</h2>
        <p>El proceso de trabajo de Growth está basado en 6 Pilares: <br/>
        ¿Estás listo para alcanzar los primeros resultados?</p>
    
        <div className="pilares1">
            <div className="pilares1-content">
                <p>Los 6 pilares fundamentales que componen el trabajo de Growth constituyen un enfoque integral para lograr resultados efectivos en el crecimiento de un proyecto. Cada uno de estos pilares desencadena una serie de acciones estratégicas que guían el proceso de desarrollo.</p>

                <p>El primero es el de <span>Análisis e Históricos</span>, donde se examinan datos históricos de diversas fuentes de medios, permitiendo entender el comportamiento de cada una a lo largo del tiempo. Le sigue <span>Establecer objetivos</span>, donde se definen metas basadas en factores como la relación, facturación y ROAS, para luego analizar cómo cada canal contribuye a alcanzar estos objetivos.</p>
            </div>
            <div className="image">
                <img alt="Gráficas, estadísticas y desarrollo de estrategias" src={Pilares1}></img>
                <img alt="Estadísticas" src={Pilares3}></img>
            </div>
        </div>

        <div className="pilares2">
            <div className="pilares2-content">
                <p>El tercer pilar es la <span>Proyección</span>, en la que se hace una estimación considerando inversiones en medios, fuentes de medios y metas de facturación. Esto ofrece una perspectiva sobre la viabilidad de los objetivos, siempre tomando en cuenta el historial del proyecto. <span>Planificación Vs Real</span> sigue, involucrando el seguimiento constante de KPIs, permitiendo evaluar el progreso y tomar medidas según estimaciones diarias y semanales.</p>

                <p>Se elaboran <span>Reportes</span> regulares para comparar la evolución de resultados en tiempo real, presentados a través de dashboards en Data Studio. Finalmente, <span>Corrección y reacción</span> implica la planificación de acciones correctivas en función de los eventos observados, con el objetivo de ajustar los KPIs y tomar decisiones que se alineen con el plan establecido.</p>
            </div>
            <div className="image">
                <img alt="Gráficas, estadísticas y desarrollo de estrategias" src={Pilares4}></img>
                <img alt="Estadísticas" src={Pilares2}></img>
            </div>
        </div>
    </div>
}