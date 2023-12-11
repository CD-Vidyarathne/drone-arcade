import "tailwindcss/tailwind.css";
import "./App.css";
import TitleBar from "./components/TitleBar";
import Navbar from './components/Navbar';
import UpdateScreen from "./components/UpdateScreen";
import FilterScreen from "./components/FilterScreen";
import CreateNewScreen from "./components/CreateNewScreen";
import Footer from "./components/Footer";
import {useScreenStore} from "./stores/screen-store";
import { SuccessInsertPopup,FailedInsertPopup } from "./components/Popups";

export default function App() {

  const currentScreen = useScreenStore((state)=>state.currentScreen);

  type Screen = {
    id:string
    el:React.ReactNode
  }

  const screens:Array<Screen> = [{id:"U",el:<UpdateScreen/>},{id:"F",el:<FilterScreen/>},{id:"C",el:<CreateNewScreen/>}]

  const cs:Screen = screens.filter((screen)=>screen.id==currentScreen)[0];

  window.electron.ipcRenderer.on('ipc-response', (a) => {
    if (a) {
      window.success_insert_popup.showModal();
    } else {
      window.failed_insert_popup.showModal();
    }
  });
  return (
    <main className="App">
      <TitleBar/>
      <Navbar/>
      <section className="mt-[10vh] w-full bg-[#ebf2ff] min-h-[calc(100vh-(30px+10vh+4vh))] px-[4rem] py-[2rem]">
        {cs.el}
      </section>
      <SuccessInsertPopup />
      <FailedInsertPopup />
      <Footer/>
    </main>
  );
}
