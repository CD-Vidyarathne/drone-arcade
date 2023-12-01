import {Repair} from '../config/types'
import {create} from 'zustand'

type RepairState = {
  repair:Repair,
  setRepair:(r:Repair)=>void
}

export const useRepairStore = create<RepairState>()((set)=>({
  repair:{
    branch : "",
    jobNumber : "",
    firstName : "",
    lastName : "",
    nic : "",
    address :"",
    phone : "",
    modal : "",
    caasl : "",
    serialNumbers : {
        aircraft : "",
        remote : "",
        camera : "",
        charger : "",
        battery1 : "",
        battery2 : "",
        battery3 : "",
        battery4 : ""
    },
    accessories : {
        aircraft : false,
        remote : false,
        camera : false,
        charger : false,
        powerCable : false,
        dataCable : false,
        carCharger : false,
        memoryCard : false,
        manuals : false,
        carryCase : false,
        propellarGuards : false,
        gimbalLocks : false,
        propellers:false,
        battery : false,
        chargingHub : false
    },
    description : "",
    currentStage : ""
  },
  setRepair:(r)=>set(()=>({repair:r}))
}))

/*
 {
    branch : "",
    jobNumber : "",
    firstName : "",
    lastName : "",
    nic : "",
    address :"",
    phone : "",
    modal : "",
    caasl : "",
    serialNumbers : {
        aircraft : "",
        remote : "",
        camera : "",
        charger : "",
        battery1 : "",
        battery2 : "",
        battery3 : "",
        battery4 : ""
    },
    accessories : {
        aircraft : false,
        remote : false,
        camera : false,
        charger : false,
        powerCable : false,
        dataCable : false,
        carCharger : false,
        memoryCard : false,
        manuals : false,
        carryCase : false,
        propellarGuards : false,
        gimbalLocks : false,
        battery : false,
        chargingHub : false
    },
    description : "",
    currentStage : ""
  }

  */
