import { useEffect, useRef, useState } from "react";
import "../index.css";
import fotoPerfil from "../assets/img/Perfil.png";

function Apresentacao() {
    const [isVisible, setIsVisible] = useState(false);
    const divAlvoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Verificação extra: entry.isIntersecting diz se o item entrou na tela
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Opcional: Remova este 'else' se quiser que a animação ocorra APENAS UMA VEZ
                    setIsVisible(false); 
                }
            },
            {
                // Ajustamos o rootMargin para disparar um pouco antes do item aparecer
                rootMargin: "0px",
                threshold: 0.2, // Dispara quando 20% do elemento estiver visível
            }
        );

        const currentRef = divAlvoRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div>
            <div id='QuemSouEu' className="bg-linear-[180deg,#ffff_3%,#6AEB74_100%] w-full flex items-center justify-center">
                <div ref={divAlvoRef} className="bg-linear-[180deg,#ffff_3%,#6AEB74_100%] min-h-screen flex items-center justify-center overflow-hidden">
                    <div className={`flex flex-col items-center text-center transition-all duration-700 ${isVisible
                    ? "opacity-100 animate-fade-down animate-once animate-duration-1000 animate-ease-in-out" 
                    : "opacity-0"
                    }`}>
                        <img 
                            className="drop-shadow-[0px_10px_15px_#002] md:w-100 lg:w-140 lg:pt-80" 
                            src={fotoPerfil} 
                            alt="Thyana Cabeleira" 
                            width={350}
                        />
                        <h1 className="text-1xl text-shadow-[0_3px_5px_#FFF] mt-6 font-bold max-w-2xl px-4 md:text-[1.3em] lg:text-[1.7em]">
                        Com anos de trajetória dedicados à saúde e beleza capilar, acredito que um cabelo não é apenas estética, mas a expressão máxima da identidade de uma mulher. Minha experiência me permitiu dominar as técnicas mais avançadas de especialidade,sempre com o compromisso de preservar a integridade dos fios. Aqui, cada diagnóstico é personalizado e cada transformação é planejada para realçar a sua melhor versão com elegância e maestria.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apresentacao;