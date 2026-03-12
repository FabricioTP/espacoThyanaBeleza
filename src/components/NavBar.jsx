import "../index.css"
import {Link} from "react-scroll"

function NavBar(){
    return(
        <ul className="w-ful flex justify-end font-bold md:text-[1.3em] md:pb-15 lg:text-[1.5em]">
            <li className="mx-3 my-4 text-[#585454] hover:text-[#8A31CE] hover:text-shadow-[0_3px_5px_#8F28D7] transition-all duration-250">
                <Link to='QuemSouEu' smooth={true} duration={1000} className="cursor-pointer">
                    Quem sou eu
                </Link>
            </li>
            <li  className="mx-3 my-4 text-[#585454] hover:text-[#8A31CE] hover:text-shadow-[0_3px_5px_#8F28D7] transition-all duration-250">
                <Link to='Clientes' smooth={true} duration={1000} className="cursor-pointer">
                    Nossas clientes
                </Link>
            </li>
            <li className="mx-3 my-4 text-[#585454] hover:text-[#8A31CE] hover:text-shadow-[0_3px_5px_#8F28D7] transition-all duration-250">
                <Link to='Feedbacks' smooth={true} duration={1000} className="cursor-pointer">
                    Feedbacks
                </Link>
            </li>
            <li className="mx-3 my-4 text-[#585454] hover:text-[#8A31CE] hover:text-shadow-[0_3px_5px_#8F28D7] transition-all duration-250">
                <Link to='Contato' smooth={true} duration={1000} className="cursor-pointer">
                    Contato
                </Link>
            </li>
        </ul>
    )
}

export default NavBar;