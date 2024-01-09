import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Background from './assets/Fondo.png';
import './App.css';

//Components
import Sidebar from './components/Sidebar';
import Convocatoria from './components/Convocatoria';
import Tapachula from './components/Tapachula';

function Landing() {

  const [isLoading, setIsLoading] = useState(true);

  // Función que finaliza la carga después de 3 segundos
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);


  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <span className="loading loading-ring loading-lg text-orange-600"></span>
        </div>
      ) : (
        <div>
          <Sidebar/>
        </div>
      )}
    </>
  );
}

const App = () => {

  const backgroundImage = {
    backgroundImage: `url(${Background})`,
  }

  return (
    <div className="bg-center bg-cover bg-no-repeat h-screen font-sans text-white" style={backgroundImage}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Convocatorias' element={<Convocatoria />} />
          <Route path='/Tapachula' element={<Tapachula />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
