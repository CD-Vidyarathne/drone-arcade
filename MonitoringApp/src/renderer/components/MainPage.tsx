import {useRepairStore} from "../stores/repair-store"
import { Repair } from "../config/types";

const MainPage = ()=>{

  const repairArr = useRepairStore((state)=>state.repairArr);
  const setRepairArr = useRepairStore((state)=>state.setRepairArr);

  window.electron.ipcRenderer.on('ipc-repairs',(r)=>{
    setRepairArr(r);
  })


  return(
    <div className="w-full min-h-[97vh] h-max text-white px-[4rem] py-[2rem]">
    <table className="text-xl min-w-full bg-transparent border border-gray-300">
      <thead>
        <tr>
          <th className="border-b border-r border-gray-300 py-2 px-4">Job Number</th>
          <th className="border-b border-r border-gray-300 py-2 px-4">Branch</th>
          <th className="border-b border-r border-gray-300 py-2 px-4">Modal</th>
          <th className="border-b border-r border-gray-300 py-2 px-4">Customer Name</th>
          <th className="border-b border-gray-300 py-2 px-4">Stage</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {repairArr?.map((rep,index)=>{

          return(
              <TableRow r={rep}  key={index} />
          )
        })}
      </tbody>
    </table>

          <div className="none bg-pink-500 bg-rose-500 bg-sky-500 bg-teal-500 bg-orange-500 bg-lime-500 bg-violet-500 bg-amber-500"></div>

    </div>
  )
}

type TableRowProps={
  r:Repair;
}

const TableRow = ({r}:TableRowProps)=>{

  const colorPalette:{
    [key:string]:string
  } = {
    "Inspection Fee Paid" : "yellow",
    "In the Inspection" : "orange",
    "Inspection Done" : "lime",
    "Quotation Sent" : "pink",
    "Full Payment Recieved" : "teal",
    "Parts Ordered" : "violet",
    "Repair Complete" : "amber",
    "Delivered" : "green",
    "Canceled" : "red",
  }

  return(
        <tr>
          <td className="border-b border-gray-300 py-2 px-4">{r.jobNumber}</td>
          <td className="border-b border-gray-300 py-2 px-4">{r.branch}</td>
          <td className="border-b border-gray-300 py-2 px-4">{r.modal}</td>
          <td className="border-b border-gray-300 py-2 px-4">{r.firstName + " " + r.lastName}</td>
          <td className={`border-b border-gray-300 py-2 px-4`}><div className={`px-2 py-1 rounded-md py-1 rounded-md bg-${colorPalette[r.currentStage]}-500`}>{r.currentStage}</div></td>
        </tr>
  )
}



export default MainPage;
