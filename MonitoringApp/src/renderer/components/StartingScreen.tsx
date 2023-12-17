import logo from '../../../assets/logo-without-bg.png';

const StartingScreen = () => {
  return (
    <div className="bg-white w-[100vw] h-[95vh] relative">
      <div role="status" className="z-50 flex flex-col items-center justify-center h-full">
        <div className="bg-white rounded-[1rem] p-[1rem]">
          <img src={logo} alt="Company Logo" className="w-[60vw]" />
          <progress className="progress progress-primary h-1 w-full" />
          <p className="mt-[4px] text-center w-[100%]">
            Loading....Please Wait...
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartingScreen;
