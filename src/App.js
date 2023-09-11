import "./styles.css";

import { Route, Routes } from "react-router-dom";

import { Inicio } from "./routes/Inicio";
import { Nosotros } from "./routes/Nosotros";
import { Servicios } from "./routes/Servicios";
import { Contacto } from "./routes/Contacto";

import {ScrollToTop} from "./Scroll";


export function App(){
    return <div className="app">
            
            <ScrollToTop/>
            
            <Routes>
                <Route path= "/"
                    element= {<Inicio/>}
                />

                <Route path= "/nosotros"
                    element= {<Nosotros/>}
                />

                <Route path= "/servicios"
                    element= {<Servicios/>}
                />

                <Route path= "/contacto"
                    element= {<Contacto/>}
                />  
            </Routes>
                    
    </div>
}