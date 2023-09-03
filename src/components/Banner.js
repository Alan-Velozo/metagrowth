import "./BannerStyles.css";

export function Banner(props){
    return <div className={props.cName}>
        
        <img alt="Banner" src={props.image}/>
        
        <div className="banner-text">
            <h1>{props.title}</h1>
            <a href="#">¡Empecemos!</a>
        </div>

    </div>
}