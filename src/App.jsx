import { Suspense, lazy } from 'react';
import {
  Routes,
  Route,
  // Navigate
} from 'react-router-dom';
// import Header from "./Components/Header/Header";
// import MainPage from "Components/MainPage/MainPage";
// import ScheduleGet from 'Components/ScheduleGet/ScheduleGet';
// import Schedule from 'Components/Schedule/Schedule';
// import Album from 'Components/Album/Album';
// import Market from 'Components/Market/Market';
// import Abonnement from './Pages/Abonnement/Abonnement';
// import Toaster from './Components/Toasts/Toasts';
// import TEST from './Components/TEST/TEST';

const Header = lazy(() => import('./Components/Header/Header.jsx' /* webpackChunkName: "Header"*/));
const MainPage = lazy(() => import('./Components/MainPage/MainPage.jsx' /* webpackChunkName: "MainPage"*/));
const Schedule = lazy(() => import('./Components/Schedule/Schedule.jsx' /* webpackChunkName: "Schedule"*/));
const ScheduleGet = lazy(() => import('./Components/ScheduleGet/ScheduleGet.jsx' /* webpackChunkName: "ScheduleGet"*/));
const Album = lazy(() => import('./Components/Album/Album.jsx' /* webpackChunkName: "Album"*/));
const Market = lazy(() => import('./Components/Market/Market.jsx' /* webpackChunkName: "Market"*/));
const Abonnement = lazy(() => import('./Pages/Abonnement/Abonnement.jsx' /* webpackChunkName: "Abonnement"*/));
const Toaster = lazy(() => import('./Components/Toasts/Toasts.jsx' /* webpackChunkName: "Toasts"*/));

function App() {
  return (
    <>
      <Suspense fallback={<h1>"Downloading..."</h1>}>
        <Routes>
          <Route exact path='/' element={<><Header /><MainPage /><ScheduleGet /><Album /><Market /></>}/>
          <Route path='/abonnements' element={<Abonnement /> } />
          <Route path='/schedule' element={<><Schedule /><ScheduleGet /></>} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
