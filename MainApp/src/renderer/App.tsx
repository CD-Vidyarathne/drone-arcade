import "tailwindcss/tailwind.css";
import "./App.css";
import Navbar from './components/Navbar';
import UpdateScreen from "./components/UpdateScreen";
import FilterScreen from "./components/FilterScreen";
import {useScreenStore} from "./stores/screen-store";

export default function App() {

  const currentScreen = useScreenStore((state)=>state.currentScreen);

  type Screen = {
    identifier:string
    el:React.ReactNode
  }

  const screens:Array<Screen> = [{identifier:"U",el:<UpdateScreen/>},{identifier:"F",el:<FilterScreen/>}]

  const cs:Screen = screens.filter((screen)=>screen.identifier==currentScreen)[0];

  return (
    <main className="App">
      <Navbar/>
      <section className="min-h-[87vh]">
      {cs.el}
      </section>
    </main>
  );
}
