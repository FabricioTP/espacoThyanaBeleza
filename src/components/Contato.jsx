import "../index.css"
import contato from "../assets/img/contato.png";
import insta from "../assets/img/insta.png";
import whats from "../assets/img/whats.png";


function Contato() {
    return (
        <div id='Contato' className="bg-black text-center pt-40 pb-50 flex flex-col">
            <h1 className="text-6xl text-[#8A31CE] px-2 pb-15 text-shadow-[0_0px_4px_#FFF]">Agende já seu contato</h1>
            <img className="md:px-35 lg:px-60 xl:px-80 2xl:px-150" src={contato} alt="emoji de agendamento" />
            <div className="flex pt-20 justify-evenly">
                <a href="https://www.instagram.com/thyanafhair/">
                    <img className="wd-25 h-25 transition-transform duration-300 hover:scale-110" src={insta} alt="Contate-nos no Instagram" />
                </a>
                <a href="https://wa.me/553299918068?text=Olá,%20gostária%20de%20marcar%20um%20horario.">
                    <img className="wd-25 h-25 transition-transform duration-300 hover:scale-110" src={whats} alt="Contate-nos no Whatsapp" />
                </a>
            </div>
        </div>
    )
}

export default Contato;