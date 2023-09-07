import "./BannerStyles.css";

export function Banner(props){
    return <div className={props.cName}>
        
        <img alt="Banner" src={props.image}/>
        
        <div className="banner-text">
            <h1>{props.title}</h1>
            <a href="https://github.com/Alan-Velozo" target="_blank">¡Empecemos!</a>
        </div>

    </div>
}