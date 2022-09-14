import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from "Components/MainPage/MainPage";
import Header from "./Components/Header/Header";
import Toaster from './Components/Toasts/Toasts';
import Abonnement from './Pages/Abonnement/Abonnement';
function App() {
  return (
    <>
      <Suspense fallback={"Downloading..."}>
        <Routes>
          <Route path='/' element={<><Header /><MainPage /></>} >
          </Route>
          
          <Route path='/abonnement' element={<Abonnement /> } />
          
          
          
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
