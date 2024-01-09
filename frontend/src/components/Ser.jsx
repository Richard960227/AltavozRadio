import React from 'react'

//Assets
import AltavozRadio from '../assets/AltavozRadio.png';

const Ser = () => {
    return (
        <>
            <h1 className="font-Sedgwick text-6xl m-8 md:ml-48 lg:ml-72">¿Quienes Somos?</h1>
            <div className="w-full bg-gray-100 text-black py-16 md:pl-48 lg:pl-72 md:pr-16">
                <div className="px-16 md:px-0">
                    <h1 className="pb-16 font-Sedgwick text-5xl">
                        En Altavoz <br />
                        <span className="text-orange-600">Sumamos voces...</span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24 text-justify tex-lg">
                        <div>
                            <p>
                                De jóvenes que imaginan un medio ambiente más amigable, o que llevan una cajita de música como respuesta a la violencia de las calles; las de las personas que trabajan el maíz para producir alimento y también artesanías. Son tantas las voces que queremos sumar en Altavoz.
                                <br /><br />
                                Altavoz Radio trabaja para recuperar el humanismo y la capacidad de ver al otro, o a la otra: a la madre que busca a su hijo desaparecido, a quien lucha por encontrar a su amigo transexual que fue víctima de un crimen de odio; a la feminista que muestra sus postulados a una ciudad conservadora o la comunidad LGBT que informa a su barrio.
                                <br /><br />
                                Nuestro sentido es que tome el Altavoz el gestor cultural que recorre las calles para acercar el arte a sus vecinos; la escritora de Coatzacoalcos que enseña el juego de las palabras a los niños para hacer poesía; o los voluntarios en los albergues que ofrecen comida y techo a los migrantes que salieron a buscar una mejor oportunidad de vida.
                                <br /><br />
                            </p>
                        </div>
                        <div>
                            <p>
                                Ese es el corazón de nuestro proyecto: las voces de la ciudadanía que en Colima, Mazatlán, Tapachula y Coatzacoalcos hacen activismo y que Altavoz capacita para que encuentren su propia voz y hagan radio; produzcan información, realicen crítica, debatan sobre temas de su localidad, participen en la opinión pública, y así, hagan de la radio un ejercicio democrático, colectivo y comunitario.
                                <br /><br />
                                En palabras de Eduardo Galeano: "Son cosas chiquitas pero al fin y al cabo, actuar sobre la realidad y cambiarla aunque sea un poquito es la única manera de probar que la realidad es transformable".
                                <br /><br />
                                <h1 className="font-Sedgwick text-5xl">
                                    <span className="text-orange-600">Atrás </span>
                                    quedó  <br />
                                    el silencio
                                </h1>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-b-4 border-gray-800">
                    <img src={AltavozRadio} alt="" className="md:rounded-2xl mx-auto my-16" />
                </div>
            </div>
        </ >
    )
}

export default Ser;