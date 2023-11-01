import {create} from 'zustand';

type ScreenState = {
  currentScreen:string
  setScreen: (s:string)=>void
}

export const useScreenStore = create<ScreenState>()((set)=>({
  currentScreen:"U",
  setScreen:(s)=>set(()=>({currentScreen:s}))
}))
