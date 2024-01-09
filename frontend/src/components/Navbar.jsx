import React, { useState } from 'react';

//Icons
import Logo from '../assets/Logo.png';
import Buscar_Icon from '../assets/iconos/Buscar.svg';
import Home_Icon from '../assets/iconos/Home.svg';

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(true);

    const handleHomeClick = () => {
        setIsVisible(true);
    }

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="w-full md:navbar">
            <div className="flex-none fixed z-10 py-56 md:hidden">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-ghost mask mask-squircle bg-black hover:bg-black md:hidden"
                    onClick={handleHomeClick}
                >
                    <img src={Home_Icon} alt="" className="" />
                </label>
            </div>
            <div className="flex-1 md:pl-48 lg:pl-72">
                <div className="form-control hidden md:block relative w-10/12">
                    <img src={Buscar_Icon} alt="" className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                    <input type="text" placeholder="Buscar por creador, programa, podcast..." className="pl-10 py-2 input w-11/12 bg-gray-800 caret-orange-600" />
                </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between m-4">
                <div className="flex-none">
                    {isVisible ? (
                        <button className="btn btn-ghost mask mask-squircle bg-gray-800 hover:bg-gray-900 md:hidden" onClick={handleClick}>
                            <img src={Buscar_Icon} alt="" />
                        </button>
                    ) : (
                        <div className="form-control ml-2 md:hidden block relative">
                            <img src={Buscar_Icon} alt="" className="absolute left-2 top-1/2 transform -translate-y-1/2" onClick={handleClick} />
                            <input type="text" placeholder="Buscar" className="pl-10 py-2 input w-11/12 bg-gray-800 caret-orange-600" />
                        </div>
                    )}
                </div>
                <div className="flex-1" >
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default Navbar