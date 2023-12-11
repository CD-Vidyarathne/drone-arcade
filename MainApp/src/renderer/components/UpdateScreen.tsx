import { FailedInsertPopup, SuccessInsertPopup } from './Popups';
import SingleJob from './SingleJob';
import { useRepairStore, initialState } from '../stores/repair-store';
import { Repair } from '../config/types';

const UpdateScreen = () => {
  const { repair, setRepair } = useRepairStore();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRepair({ ...repair, jobNumber: e.target.value });
  };

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("Button Clicked")
    window.electron.ipcRenderer.sendMessage('ipc-update-data', repair);
  };

  window.electron.ipcRenderer.on('ipc-got-job-by-number', (r: Repair) => {
    setRepair(r);
  });

  const getJobByJobNumber = (): void => {
    if (repair.jobNumber == '') return;
    window.electron.ipcRenderer.sendMessage(
      'ipc-get-job-by-number',
      repair.jobNumber,
    );
  };

  return (
    <div>
      <span>•</span>
      <label className="text-start font-bold whitespace-nowrap ml-[1rem]">
        Enter the Job Number :{' '}
      </label>
      <div className="w-full flex items-center justify-start gap-4">
        <input
          className="w-50% bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 focus:outline-none focus:border-blue-500"
          onChange={(e) => handleInput(e)}
        />
        <button
          className="btn w-[10rem] btn-accent rounded-lg"
          onClick={getJobByJobNumber}
        >
          Find
        </button>
      </div>
      <div className="text-lg w-full h-full border-dashed rounded-lg border-2 border-gray-500 my-[1rem] p-1">
        {repair.date != '' ? (
          <SingleJob r={repair} setRepair={setRepair} />
        ) : (
          <></>
        )}

        <button
          className="btn w-[10rem] btn-primary my-[1rem] rounded-lg"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateScreen;
