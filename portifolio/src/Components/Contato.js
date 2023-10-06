import "../Styles/Contato.css"


function Contato() {
    return (
        <div>
            <form className="contato-form">
                <input placeholder="Email"/>
                <input placeholder="Message"/>

                <button> Enviar </button>
            </form>
        </div>
    )
}

export default Contato;