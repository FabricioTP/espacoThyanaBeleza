import { useEffect, useRef, useState } from "react";
import "../index.css";
import cabelo1 from "../assets/img/cabelo1.jpg";
import cabelo2 from "../assets/img/cabelo2.jpg";
import cabelo3 from "../assets/img/cabelo3.jpg";
import cabelo4 from "../assets/img/cabelo4.jpg";

function Carrousel() {
    const [isVisible, setIsVisible] = useState(false);
    const h1Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { 
                threshold: 0.1, 
                rootMargin: "0px 0px -10% 0px" 
            }
        );

        if (h1Ref.current) {
            observer.observe(h1Ref.current);
        }

        return () => {
            if (h1Ref.current) observer.unobserve(h1Ref.current);
        };
    }, []);

    return (
        <div id='Clientes' className="bg-linear-[180deg,#6AEB74_3%,#B082E8_100%] w-full overflow-hidden pt-70 pb-70">
            {/* Carrossel */}
            <div className="flex w-max items-center justify-start gap-15 animate-carrousel hover:[animation-play-state:paused]">
                {[cabelo1, cabelo2, cabelo3, cabelo4, cabelo1, cabelo2, cabelo3, cabelo4].map((img, index) => (
                    <img 
                        key={index}
                        className="w-55 h-85 flex-none rounded-4xl p-2 drop-shadow-[0px_0px_5px_#000] cursor-pointer" 
                        src={img} 
                        alt={`Cabelo ${index}`} 
                    />
                ))}
            </div>
            <h1 
                ref={h1Ref}
                className={`text-2xl text-shadow-[0_3px_5px_#FFF] mt-10 font-bold text-center px-4 transition-all duration-700 ${
                    isVisible 
                    ? "opacity-100 animate-fade-down animate-once" 
                    : "opacity-0" 
                }`}
            >
                Cada corte é um projeto único de visagismo. Aqui, não seguimos apenas tendências, criamos o estilo que melhor expressa a sua personalidade e valoriza o seu rosto.
            </h1>
        </div>
    );
}

export default Carrousel;