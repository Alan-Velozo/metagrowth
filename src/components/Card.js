export function Card(props){
    return <div className="card">
        <div className="card-img">
            <img alt={props.alt} src={props.src}></img>
        </div>
        <h3>{props.name}</h3>
        <p>{props.text}</p>
    </div>
}