const TabBar = () => {
  return (
    <div className="border border-solid border-[#E7E7E7] h-[67px] py-5 pl-[100px]">
      <div className="flex gap-[72px]">
        <button className="text-xl text-[#DC4A2D] font-semibold leading-[27px] text-left">
          Job Preview
        </button>

        <button className="text-xl text-[#888888] font-medium leading-[27px] text-left">
          Applicants
        </button>
        <button className="text-xl text-[#888888] font-medium leading-[27px] text-left">
          Match
        </button>
        <button className="text-xl text-[#888888] font-medium leading-[27px] text-left">
          Messages
        </button>
      </div>
      <div className="w-[65px] h-[2px] bg-[#DC4A2D] ml-6 mt-4"></div>
    </div>
  );
};

export default TabBar;
