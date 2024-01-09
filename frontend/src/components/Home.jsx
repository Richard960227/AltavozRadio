import React from 'react';
import Left from '../assets/iconos/Left.svg';
import Right from '../assets/iconos/Right.svg';

const Home = () => {

  return (
    <div>
      {/*Tittle*/}
      <div className="m-8 md:ml-48 lg:ml-72">
        <h1 className="font-Sedgwick text-6xl">Atrás quedó el silencio</h1>
        <h2 className="text-2xl font-semibold ml-12 sm:ml-0">#TomaElAltavoz</h2>
      </div>
      {/*Carousel*/}
      <div className="my-4 carousel w-full md:h-60 lg:h-72">
        <div id="slide1" className="carousel-item relative w-full md:bg-gray-800">
          <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Carousel" className="w-full md:ml-48 lg:ml-72" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2 h-24 md:h-60 lg:h-72 md:ml-48 lg:ml-72">
            <div className="bg-gradient-to-r from-gray-800 to-transparent">
              <button className="btn btn-ghost hover:bg-transparent">
                <img src={Left} alt="Left" />
              </button>
            </div>
            <div className="bg-gradient-to-l from-gray-800 to-transparent ">
              <button className="btn btn-ghost hover:bg-transparent">
                <img src={Right} alt="Right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Buttons*/}
      <div className="my-4 first-letter:flex justify-center md:justify-start md:ml-48 lg:ml-72">
        <button className="mx-2 btn shadow-2xl shadow-black border-none active:bg-gray-800 active:text-white ">
          Programas
        </button>
        <button className="mx-2 btn shadow-2xl shadow-black border-none active:bg-gray-800 active:text-white ">
          Estaciones
        </button>
        <button className="mx-2 btn shadow-2xl shadow-black border-none active:bg-gray-800 active:text-white ">
          Podcasts
        </button>
      </div>
      {/*Cards*/}
      <div className="m-4 md:ml-48 lg:ml-72 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="w-40 md:w-44 h-72 place-self-center">
          <div className="bg-gray-800  w-40 h-40 md:w-44 md:h-44 shadow-2xl shadow-black rounded-2xl">
            <img src="" alt="" />
          </div>
          <div className="h-28 my-4 text-ellipsis overflow-hidden">
            <h1 className="text-lg font-semibold">Titulo</h1>
            <p className="text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eius dignissimos a doloremque nihil ad ut odio quos sint, fugiat, officiis nam quod ducimus dolorum, iure aperiam commodi est consequuntur.
            </p>
          </div>
        </div>
        <div className="w-40 md:w-44 h-72 place-self-center">
          <div className="bg-gray-800  w-40 h-40 md:w-44 md:h-44 shadow-2xl shadow-black rounded-2xl">
            <img src="" alt="" />
          </div>
          <div className="h-28 my-4 text-ellipsis overflow-hidden">
            <h1 className="text-lg font-semibold">Titulo</h1>
            <p className="text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eius dignissimos a doloremque nihil ad ut odio quos sint, fugiat, officiis nam quod ducimus dolorum, iure aperiam commodi est consequuntur.
            </p>
          </div>
        </div>
        <div className="w-40 md:w-44 h-72 place-self-center">
          <div className="bg-gray-800  w-40 h-40 md:w-44 md:h-44 shadow-2xl shadow-black rounded-2xl">
            <img src="" alt="" />
          </div>
          <div className="h-28 my-4 text-ellipsis overflow-hidden">
            <h1 className="text-lg font-semibold">Titulo</h1>
            <p className="text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eius dignissimos a doloremque nihil ad ut odio quos sint, fugiat, officiis nam quod ducimus dolorum, iure aperiam commodi est consequuntur.
            </p>
          </div>
        </div>
        <div className="w-40 md:w-44 h-72 place-self-center">
          <div className="bg-gray-800  w-40 h-40 md:w-44 md:h-44 shadow-2xl shadow-black rounded-2xl">
            <img src="" alt="" />
          </div>
          <div className="h-28 my-4 text-ellipsis overflow-hidden">
            <h1 className="text-lg font-semibold">Titulo</h1>
            <p className="text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eius dignissimos a doloremque nihil ad ut odio quos sint, fugiat, officiis nam quod ducimus dolorum, iure aperiam commodi est consequuntur.
            </p>
          </div>
        </div>
        <div className="w-40 md:w-44 h-72 place-self-center">
          <div className="bg-gray-800  w-40 h-40 md:w-44 md:h-44 shadow-2xl shadow-black rounded-2xl">
            <img src="" alt="" />
          </div>
          <div className="h-28 my-4 text-ellipsis overflow-hidden">
            <h1 className="text-lg font-semibold">Titulo</h1>
            <p className="text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eius dignissimos a doloremque nihil ad ut odio quos sint, fugiat, officiis nam quod ducimus dolorum, iure aperiam commodi est consequuntur.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home