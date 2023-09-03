import "./styles.css";

import { Route, Routes } from "react-router-dom";

import { Inicio } from "./routes/Inicio";
import { Nosotros } from "./routes/Nosotros";
import { Servicios } from "./routes/Servicios";
import { Contacto } from "./routes/Contacto";
import { Error } from "./routes/Error";


export function App(){
    return <>
    
        <div className="app">

            <Routes>
                <Route path= "/" errorElement= {<Error/>}
                    element= {<Inicio/>}
                />

                <Route path= "/nosotros" errorElement= {<Error/>}
                    element= {<Nosotros/>}
                />

                <Route path= "/servicios" errorElement= {<Error/>}
                    element= {<Servicios/>}
                />

                <Route path= "/contacto" errorElement= {<Error/>}
                    element= {<Contacto/>}
                />  
            </Routes>
                    
        </div>
        
    </>
}