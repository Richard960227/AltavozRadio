import React from 'react';

//Frecuencies
import Coatza from '../assets/Frecuencias/Coatzacoalcos.png';
import Tapachula from '../assets/Frecuencias/Tapachula.png';
import Mazatlan from '../assets/Frecuencias/Mazatlan.png';

const Frecuencia = () => {
    return (
        <>
            <h1 className="font-Sedgwick text-6xl m-8 md:ml-48 lg:ml-72">Red Altavoz</h1>
            <div className="w-full bg-gray-100 text-black p-16 md:pl-72 md:pr-16">
                <div className="grid md:grid-flow-col gap-16 place-self-center py-24 border-b-4 border-gray-800">
                    <img src={Coatza} alt="Coatzacoalcos" className="rounded-2xl place-self-center w-52 h-52" />
                    <img src={Tapachula} alt="Tapachula" className="rounded-2xl place-self-center" />
                    <img src={Mazatlan} alt="Mazatlan" className="rounded-2xl place-self-center" />
                </div>
            </div>
        </>
    )
}

export default Frecuencia