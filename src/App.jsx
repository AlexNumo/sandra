import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import MainPage from "Components/MainPage/MainPage";
import Schedule from 'Components/Schedule/Schedule';
import Nutrition from 'Components/Nutrition/Nutrition';
import Album from 'Components/Album/Album';
import Market from 'Components/Market/Market';

import Abonnement from './Pages/Abonnement/Abonnement';
import Toaster from './Components/Toasts/Toasts';
function App() {
  return (
    <>
      <Suspense fallback={"Downloading..."}>
        <Routes>
          <Route path='/' element={<><Header /><MainPage /> <Schedule/><Album/><Nutrition/><Market/></>} />
          <Route path='/abonnements' element={<Abonnement /> } /> 
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
