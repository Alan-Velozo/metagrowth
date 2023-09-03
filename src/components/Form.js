import "./FormStyles.css"

export function Form(){
    return <div className="form-container">
        <h2>¿Quieres potenciar tu proyecto?</h2>
        <form>
            <input placeholder="Nombre" type="text" required></input>
            <input placeholder="Email" type="email" required></input>
            <input placeholder="Teléfono" type="number" required></input>
            <input placeholder="Empresa" type="text" required></input>
            <input placeholder="Sitio web" type="text" required></input>
            <textarea placeholder="Mensaje" rows="4" required></textarea>
            <button>Enviar</button>
        </form>
    </div>
}