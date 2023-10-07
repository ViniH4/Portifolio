import "../Styles/Contato.css"


function Contato() {
    return (
        <div>
            <form className="contato-form">
                <span>E-mail</span>
                <input />
                <span>Message</span>
                <input type="text" />

                <button> Enviar </button>
            </form>
        </div>
    )
}

export default Contato;