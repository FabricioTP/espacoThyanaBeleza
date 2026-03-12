import { useEffect, useRef, useState } from "react";
import "../index.css";
import cliente1 from "../assets/img/cliente1.jpg";
import cliente2 from "../assets/img/cliente2.jpg";
import cliente3 from "../assets/img/cliente3.jpg"

function CardCliente({ img, titulo, texto }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`mb-35 gap-3 font-medium text-center flex flex-col items-center justify-center transition-all duration-700 ${
                isVisible
                    ? "opacity-100 animate-fade-down animate-once animate-duration-[600ms]"
                    : "opacity-0 "
            }`}
        >
            <img
                className="w-70 h-80 rounded-4xl drop-shadow-[0px_0px_10px_#000] md:w-100 md:h-100 lg:w-130 lg:h-130"
                src={img}
                alt="feedbacks"
            />
            <h1 className="text-bold text-[#D8ED15] text-2xl text-shadow-[0_6px_5px_black] md:text-[2.3em]">
                {titulo}
            </h1>
            <p className="text-[#131212] font-bold text-shadow-[0_2px_6px_white] md:text-[1.3em]">
                {texto}
            </p>
        </div>
    );
}

function Clientes() {
    return (
        <div id='Feedbacks' className="bg-linear-[180deg,#B082E8_90%,#000_100%] pt-25 pb-10">
            <CardCliente 
                img={cliente1} 
                titulo="Encantada" 
                texto="Ficou super brilhoso, macio e exatamente como eu queria."
            />
            <CardCliente 
                img={cliente2} 
                titulo="Nunca me senti acolhida ao fazer cabelo" 
                texto="Atendimento maravilhoso e resultado perfeito." 
            />
            <CardCliente 
                img={cliente3} 
                titulo="Vou voltar de novo" 
                texto="Meu cabelo ficou incrível e todo mundo elogiou!" 
            />
        </div>
    );
}

export default Clientes;
