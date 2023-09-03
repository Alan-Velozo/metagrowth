import "./TrayectoriaStyles.css"

export function Trayectoria(){
    return <>
    
    <div className="us">
        <p>Somos especialistas en Performance con más de 10 años en el mercado. Trabajamos con grandes clientes y pymes a nivel internacional, tal es asi que contamos con Parnters estratégicos en Paraguay, México, Miami y España.</p>

        <p>Como <strong>Agencia Partner premier de Google</strong> (solo hay 50 agencias con esta distinción en Argentina) contamos con especializaciones en Búsqueda, Display y Google Shopping. Esto no solo indica que nuestros ejecutivos rinden exámenes en Google y los aprueban sino que además nuestra cartera de clientes es estable y en crecimiento.</p>
    </div>
    
    <div className="trayectoria">
        <h2>Nuestra trayectoria</h2>
        <p>Realizamos una auditoría donde analizamos el mercado objetivo y hacemos un diagnóstico general de tu situación actual para que podamos comenzar con los primeros pasos:</p>
    </div>

    <div className="timeline">
        <ul>
            <li>
                <h3>2011</h3>
                <div className="timeline-2011">
                    <h4>Google Partners</h4>
                    <p>Naca la agencia junto a la certificación oficial de Google</p>
                </div>
            </li>
            <li>
                <h3>2015</h3>
                <div className="timeline-2015">
                    <h4>Silycon Valley</h4>
                    <p>El viaje junto a 10 agencias al primer encuentro de agencias LATAM Partners de Google</p>
                </div>
            </li>
            <li>
                <h3>2017</h3>
                <div className="timeline-2017">
                    <h4>Partners Premier de Google</h4>
                    <p>Logramos la insignia para brindársela a tu compañero</p>
                </div>
            </li>
            <li>
                <h3>2020</h3>
                <div className="timeline-2020">
                    <h4>Agency Acceleration Program</h4>
                    <p>Programa del que participan solo 10 agencias de TODA Argentina</p>
                </div>
            </li>
        </ul>
    </div>

    </>
}