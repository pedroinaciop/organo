import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="rodape">
            <div>
                <a href="facebook.com" target="_blank">
                    <img className="redes-sociais" src="/images/fb.png" alt="Ícone do facebook"/>
                </a>
                <a href="instagram.com" target="_blank">
                    <img className="redes-sociais" src="/images/tw.png" alt="Ícone do twitter"/>
                </a>
                <a href="instagram.com" target="_blank">
                    <img className="redes-sociais" src="/images/ig.png" alt="Ícone do instagram"/>
                </a>
            </div>
            <img src="/images/logo.png" alt="Logo do Organo"/>
            <p>Desenvolvido por pedroinaciop</p>
        </footer>
    ) 
}

export default Rodape;