import { FooterItems } from "./FooterItems"

import "./FooterStyles.css"
import FooterLogo from "../assets/logo-footer.svg"

export function Footer(){
    return <footer><div className="footer-content">
            <img alt="Logo" src={FooterLogo}></img>
            <ul>
                {FooterItems.map(function(item){
                    return <li key={item.id}>
                        <a href={item.url}>
                            <i className={item.icon}></i>{item.title}
                        </a>
                    </li>
                })}
            </ul>
        </div>
        <p>© 2023. copyright 2023 MetaGrowth.</p>
    </footer>
}