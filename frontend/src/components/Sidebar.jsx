import React, { useState, useEffect } from 'react';

//Sections
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Frecuencia from './Frecuencia';
import Podcast from './Podcast';
import Musica from './Musica';
import Audioteca from './Audioteca';
import Ser from './Ser';
import Tapachula from './Tapachula';

//Icons
import Home_Icon from '../assets/iconos/Home.svg';
import Frecuencia_Icon from '../assets/iconos/Frecuencia.svg';
import Podcast_Icon from '../assets/iconos/Podcast.svg';
import Musica_Icon from '../assets/iconos/Musica.svg';
import Audioteca_Icon from '../assets/iconos/Audioteca.svg';
import Ser_Icon from '../assets/iconos/Ser.svg';
import Contacto_Icon from '../assets/iconos/Contacto.svg';
import Frecuencia_Icon2 from '../assets/iconos/Frecuencia2.svg';
import Podcast_Icon2 from '../assets/iconos/Podcast2.svg';
import Musica_Icon2 from '../assets/iconos/Musica2.svg';
import Audioteca_Icon2 from '../assets/iconos/Audioteca2.svg';
import Ser_Icon2 from '../assets/iconos/Ser2.svg';
import Contacto_Icon2 from '../assets/iconos/Contacto2.svg';

const Sidebar = () => {

    const [selectedOption, setSelectedOption] = useState('Home');
    const [activeIcon, setActiveIcon] = useState(null);
    const [hoverStates, setHoverStates] = useState({
        Frecuencia: false,
        Podcast: false,
        Musica: false,
        Audioteca: false,
        Ser: false,
        Contacto: false,
    });

    const handleOptionClick = (option) => {
        if (option !== activeIcon) {
            setSelectedOption(option);
            setActiveIcon(option);
        } else {
        }
    }

    const handleMouseEnter = (option) => {
        setHoverStates((prevStates) => ({ ...prevStates, [option]: true }));
    }

    const handleMouseLeave = (option) => {
        setHoverStates((prevStates) => ({ ...prevStates, [option]: false }));
    }

    const renderSelectedOption = () => {
        switch (selectedOption) {
            case 'Home':
                return <Home />;
            case 'Frecuencia':
                return <Frecuencia />;
            case 'Podcast':
                return <Podcast />;
            case 'Musica':
                return <Musica />;
            case 'Audioteca':
                return <Audioteca />;
            case 'Ser':
                return <Ser />;
            case 'Tapachula':
                return <Tapachula />;
            default: return <Home />
        }
    }

    const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMediumScreen(window.innerWidth >= 768);
        };

        // Agregar un event listener para el evento de cambio de tamaño de la ventana
        window.addEventListener('resize', handleResize);

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="h-screen overflow-y-auto">
                    <Navbar />
                    {renderSelectedOption()}
                </div>
                <Footer />
            </div>
            <div className={`${isMediumScreen ? 'drawer-content fixed z-10' : 'drawer-side z-10'}`}>
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu md:ml-16 lg:ml-28 md:mt-10 h-3/5 w-20 p-2 bg-base-100 rounded-br-2xl md:rounded-2xl shadow-2xl shadow-black justify-between items-center">
                    <button
                        className="mt-4 mb-8 p-0 btn btn-ghost mask mask-squircle bg-black hover:bg-black"
                        onClick={() => handleOptionClick('Home')}
                    >
                        <img src={Home_Icon} alt="home" />
                    </button>
                    <div className="dropdown dropdown-right">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost mask mask-squircle hover:bg-transparent"
                            onClick={() => handleOptionClick('Frecuencia')}
                            onMouseEnter={() => handleMouseEnter('Frecuencia')}
                            onMouseLeave={() => handleMouseLeave('Frecuencia')}>
                            <img src={(hoverStates.Frecuencia || activeIcon === 'Frecuencia') ? Frecuencia_Icon2 : Frecuencia_Icon} alt="frecuencia" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-box w-52 text-black">
                            <li>
                                <p className="text-base">Web</p>
                            </li>
                            <li>
                                <p className="text-base justify-between" onClick={() => handleOptionClick('Tapachula')}>Tapachula
                                    <span className="font-semibold text-xl text-orange-600">101.1</span>
                                </p>
                            </li>
                            <li>
                                <p className="text-base justify-between">Colima
                                    <span className="font-semibold text-xl text-orange-600 ">102.9</span>
                                </p>
                            </li>
                            <li>
                                <p className="text-base justify-between">Mazatlán
                                    <span className="font-semibold text-xl text-orange-600 ">103.5</span>
                                </p>
                            </li>
                            <li>
                                <p className="text-base justify-between">Coatzacoalcos
                                    <span className="font-semibold text-xl text-orange-600 ">104.3</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="tooltip tooltip-right" data-tip="Podcast">
                        <button
                            className="btn btn-ghost mask masl-squircle hover:bg-transparent"
                            onClick={() => handleOptionClick('Podcast')}
                            onMouseEnter={() => handleMouseEnter('Podcast')}
                            onMouseLeave={() => handleMouseLeave('Podcast')}
                        >
                            <img src={(hoverStates.Podcast || activeIcon === 'Podcast') ? Podcast_Icon2 : Podcast_Icon} alt="podcast" />
                        </button>
                    </div>
                    <div className="tooltip tooltip-right" data-tip="Música">
                        <button
                            className="btn btn-ghost mask masl-squircle hover:bg-transparent"
                            onClick={() => handleOptionClick('Musica')}
                            onMouseEnter={() => handleMouseEnter('Musica')}
                            onMouseLeave={() => handleMouseLeave('Musica')}
                        >
                            <img src={(hoverStates.Musica || activeIcon === 'Musica') ? Musica_Icon2 : Musica_Icon} alt="musica" />
                        </button>
                    </div>
                    <div className="tooltip tooltip-right" data-tip="Audioteca">
                        <button
                            className="btn btn-ghost mask masl-squircle hover:bg-transparent"
                            onClick={() => handleOptionClick('Audioteca')}
                            onMouseEnter={() => handleMouseEnter('Audioteca')}
                            onMouseLeave={() => handleMouseLeave('Audioteca')}
                        >
                            <img src={(hoverStates.Audioteca || activeIcon === 'Audioteca') ? Audioteca_Icon2 : Audioteca_Icon} alt="audioteca" />
                        </button>
                    </div>
                    <div className="tooltip tooltip-right" data-tip="¿Quienes somos?">
                        <button
                            className="btn btn-ghost mask masl-squircle hover:bg-transparent"
                            onClick={() => handleOptionClick('Ser')}
                            onMouseEnter={() => handleMouseEnter('Ser')}
                            onMouseLeave={() => handleMouseLeave('Ser')}
                        >

                            <img src={(hoverStates.Ser || activeIcon === 'Ser') ? Ser_Icon2 : Ser_Icon} alt="ser" />
                        </button>
                    </div>
                    {/* The button to open modal */}
                    <div
                        className="tooltip tooltip-right"
                        data-tip="Contacto"
                        id="Contacto"
                    >
                        <label
                            htmlFor="contacto"
                            className="btn btn-ghost mask masl-squircle hover:bg-transparent"
                            onClick={() => handleOptionClick('Contacto')}
                            onMouseEnter={() => handleMouseEnter('Contacto')}
                            onMouseLeave={() => handleMouseLeave('Contacto')}
                        >
                            <img src={(hoverStates.Contacto || activeIcon === 'Contacto') ? Contacto_Icon2 : Contacto_Icon} alt="contacto" />
                        </label>
                    </div>
                    {/* 
                    <div className="tooltip tooltip-right" data-tip="Contacto" id="Contacto">
                        <button
                            className="btn btn-ghost mask masl-squircle hover:bg-transparent"
                            onClick={() => handleOptionClick('Contacto')}
                            onMouseEnter={() => handleMouseEnter('Contacto')}
                            onMouseLeave={() => handleMouseLeave('Contacto')}
                        >
                            <img src={hoverStates.Contacto ? Contacto_Icon2 : Contacto_Icon} alt="" />
                        </button>
                    </div>
                    */}
                </div>

            </div>
            {/* Modal for Contact */}
            <input type="checkbox" id="contacto" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <form className="card-body py-0 text-black">
                        <h1 className="font-Sedgwick text-5xl py-4">
                            Levanta la
                            <span className="text-orange-600"> Voz</span>
                        </h1>
                        <p className="pb-4 text-justify">
                            Si necesitas alguna información sobre cualquiera de los programas y contenidos de
                            <span className="font-bold"> Altavoz Radio </span>
                            o tienes un comentario general, escribenos.
                        </p>
                        <div className="form-control">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Nombre</span>
                                </div>
                                <input type="text" placeholder="Nombre" className="input input-bordered w-full" />
                            </label>
                            <div className="md:flex">
                                <label className="form-control w-full mr-4">
                                    <div className="label">
                                        <p className="label-text">
                                            <span className="text-red-700 font-semibold">*
                                            </span> Entidad</p>
                                    </div>
                                    <select className="select select-bordered">
                                        <option disabled selected>Pick one</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Municipio</span>
                                    </div>
                                    <input type="text" placeholder="Municipio" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="md:flex items-end">
                                <label className="form-control w-full md:w-28 md:mr-4">
                                    <div className="label">
                                        <p className="label-text">
                                            <span className="text-red-700 font-semibold">*
                                            </span> Estación que escucha</p>
                                    </div>
                                    <select className="select select-bordered">
                                        <option selected>Web</option>
                                        <option>101.1</option>
                                        <option>102.9</option>
                                        <option>103.5</option>
                                        <option>104.3</option>
                                    </select>
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <p className="label-text">
                                            <span className="text-red-700 font-semibold">*
                                            </span> Correo Electronico</p>
                                    </div>
                                    <input type="email" placeholder="Correo Electronico" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="label">
                                <p className="label-text py-2">
                                    <span className="text-red-700 font-semibold">*
                                    </span>Datos Obligatorios</p>
                            </div>
                            <label className="label">
                                <input type="checkbox" checked="" className="checkbox mr-2" />
                                <p>
                                    He leído y acepto el
                                    <span className="font-bold cursor-pointer">
                                        <a href="https://www.spr.gob.mx/_pdf/transparencia/proteccion-datos/API_Contacto_Altavoz.pdf"> Aviso de Privacidad
                                        </a>
                                    </span>
                                    .
                                </p>
                            </label>
                            <button className="m-2 btn shadow-2xl border-none shadow-black bg-gray-700 hover:bg-gray-800 text-white text-xl">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
                <label
                    className="modal-backdrop"
                    htmlFor="contacto"
                    onClick={() => setActiveIcon(null)}>
                </label>
            </div>
        </div>
    )
}

export default Sidebar;