import React from 'react'

//Iconos
import Facebook_Icon from '../assets/iconos/Facebook.svg';
import Twitter_Icon from '../assets/iconos/Twitter.svg';
import Instagram_Icon from '../assets/iconos/Instagram.svg';
import Spotify_Icon from '../assets/iconos/Spotify.svg';
import SPR from '../assets/SPR.png';

const Footer = () => {
    return (
        <footer className="flex flex-col-reverse md:footer bg-neutral text-neutral-content py-6 px-12">
            <aside className="text-center md:text-left ">
                <img src={SPR} alt="SPR" className="mx-auto md:mx-0 my-2" />
                <p>Sistema Público de Radiofusión del Estado Mexicano ® 2023</p>
                <p>Camino de Santa Teresa 1679 <br />
                    Col. Jardines del Pedregal <br />
                    Alcaldía Álvaro Obregón, C.P. 01900 <br />
                    CDMX, México
                </p>
            </aside>
            <nav className="place-self-center justify-self-end text-center md:text-right">
                <div className="grid md:grid-flow-col gap-6 md:items-center">
                    <header className="text-3xl">Síguenos</header>
                    <div className="grid grid-flow-col gap-6">
                        <a href="https://www.facebook.com/altavozmxradio">
                            <img className="cursor-pointer" src={Facebook_Icon} alt="Facebook" />
                        </a>
                        <a href="https://twitter.com/altavozmxradio">
                            <img className="cursor-pointer" src={Twitter_Icon} alt="Twitter" />
                        </a>
                        <a href="https://www.instagram.com/altavozmxradio/">
                            <img className="cursor-pointer" src={Instagram_Icon} alt="Instagram" />
                        </a>
                        <a href="https://open.spotify.com/show/6FPxnTK9p5oVVX4fXL6nKu">
                            <img className="cursor-pointer" src={Spotify_Icon} alt="Spotify" />
                        </a>
                    </div>
                </div>
                <div className="grid grid-flow-row gap-1 py-4 md:justify-self-end">
                    <p>
                        <a href="https://www.spr.gob.mx/defensoria/">Defensoría de las audiencias</a>
                    </p>
                    <p>
                        <a href="#Contacto">Contacto</a>
                    </p>
                    <p>
                        <a href="#Ser">Nosotros</a>
                    </p>
                    <p>
                        <a href="https://www.spr.gob.mx/">spr.gob.mx</a>
                    </p>
                    <p>
                        <a href="https://www.spr.gob.mx/_pdf/transparencia/proteccion-datos/API_Contacto_Altavoz.pdf">Aviso de Privacidad</a>
                    </p>
                </div>
            </nav>
        </footer>
    )
}

export default Footer