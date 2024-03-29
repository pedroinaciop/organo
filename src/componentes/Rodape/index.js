import './Rodape.css'

const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/images/fb.png" alt="ícone do Facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/images/tw.png" alt="ícone do Twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/images/ig.png" alt="ícone do Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        
        <img src="/images/logo.png" alt="Logo do Organo" />
        
        <section>
            <p>Desenvolvido por pedroinaciop</p>
        </section>
    </footer>
    )
}

export default Rodape;
