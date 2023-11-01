import logo from "../../../assets/logo-without-bg.png";
import {useScreenStore} from "../stores/screen-store";

const Navbar:React.FC = ()=>{
  const setScreen = useScreenStore((state)=>state.setScreen);
  const handleScreenChange = (screen:string)=>{
    setScreen(screen);
  }

return(
  <nav className="w-full h-[10vh] flex items-center justify-around bg-primary p-6">
    <div className="w-[10%] h-full">
      <img src={logo} alt="Company Logo"/>
    </div>
    <div className="h-full w-[30%] h-full text-[#d5dce6]">
      <ul className="flex w-full h-full items-center justify-around text-[1.3rem] gap-2">
        <li className="w-[40%]  text-center  hover:scale-[1.1] hover:underline select-none transition duration-300 cursor-pointer" onClick={()=>handleScreenChange("U")}>UPDATE</li>
        <li className="w-[40%]  text-center  hover:scale-[1.1] hover:underline select-none transition duration-300 cursor-pointer" onClick={()=>handleScreenChange("F")}>FILTER</li>
      </ul>
    </div>

  </nav>
)
}

export default Navbar;

