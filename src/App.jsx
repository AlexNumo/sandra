import MainPage from "Components/MainPage/MainPage";
import Header from "./Components/Header/Header";
import Toaster from './Components/Toasts/Toasts';

function App() {
  return (
    <>
      <Header/>
      <MainPage />
      <Toaster />
    </>
  );
}

export default App;
