import { useRepairStore } from '../stores/repair-store';

const FilterScreen = () => {
  const { repair, repairArr, setRepair, setRepairArr } = useRepairStore();

  return (
    <>
      <div>
        <span>•</span>
        <label className="text-start font-bold whitespace-nowrap ml-[1rem]">
          Select The Stage :{' '}
        </label>
        <div className="py-1 flex gap-2">
          <select className="w-[50%] bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 focus:outline-none focus:border-blue-500">
            <option>Inspection Fee Paid</option>
            <option>Inspection Fee Paid</option>
            <option>Inspection Fee Paid</option>
            <option>Inspection Fee Paid</option>
            <option>Inspection Fee Paid</option>
            <option>Inspection Fee Paid</option>
          </select>
          <button className="btn text-white btn-accent rounded-xl">
            FILTER
          </button>
        </div>
        {
          [1,2,3].map((k,i)=>{
            return(
        <div className="text-lg w-full h-full border-dashed rounded-lg border-2 border-gray-500 my-[1rem] p-1">
                <Item/>

        </div>
            )
        })
        }
      </div>
    </>
  );
};

const Item = () => {
  return (
    <>
      <div className="py-1">
        <p>
          <span className="mr-1">•</span>
          Job Number : <span>{''}</span>
        </p>
      </div>
      <div className="py-1">
        <p>
          <span className="mr-1">•</span>
          Order Taken Date : <span>{''}</span>
        </p>
      </div>
      <div className="py-1">
        <p>
          <span className="mr-1">•</span>
          Current Stage : <span>{''}</span>
        </p>
      </div>
      <div className="py-1">
        <p>
          <span className="mr-1">•</span>
          Client Name : <span>{''}</span>
        </p>
      </div>
      <div className="py-1">
        <p>
          <span className="mr-1">•</span>
          Phone : <span>{''}</span>
        </p>
      </div>
      <div className="py-1">
        <p>
          <span className="mr-1">•</span>
          Drone Modal : <span>{''}</span>
        </p>
      </div>
      <div className="py-1">
        <p>
          <span className="mr-1">•</span>
          CAASL Number : <span>{''}</span>
        </p>
      </div>
      <div className="py-1">
        <p>
          <span className="mr-1">•</span>
          Description : <span>{''}</span>
        </p>
      </div>
    </>
  );
};

export default FilterScreen;
