import Rectangle5 from "../assets/Rectangle5.png";
import briefcaseIcon from "../assets/briefcase-02.svg";
import messageIcon from "../assets/message-square-01.svg";
import ellipseIcon from "../assets/Ellipse 5.svg";
import coinhandIcon from "../assets/coins-hand.svg";
import bellIcon from "../assets/bell-02.svg";
import chevrondownIcon from "../assets/chevron-down.svg";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 py-6 pl-10 pr-6 shadow-[0px_4px_4px_0px_#D9D9D91A]">
      <div className="flex justify-center items-center w-[100px] h-[61px] bg-[#E7E7E7] text-[#DC4A2D]">
        <p className="text-xl font-bold leading-[27px] text-left">Logo</p>
      </div>
      <div className="flex justify-between w-[538px] h-[74px] gap-0 opacity-[0px] rounded-[36px] border-[0.5px] border-[0px_0px] border-solid border-[#D1D1D1]">
        <button className="w-[109px] h-[58px] mt-2 ml-2 bg-[#dc4a2d] rounded-[49px] border-[2px] border-solid border-[#FCB4A5]">
          <div className="flex gap-2 ml-4">
            <img src={briefcaseIcon} alt="briefcaseIcon" className="w-6 h-6" />{" "}
            <p className="text-xl text-white font-medium leading-[27px] text-left">
              Jobs
            </p>
          </div>
        </button>
        <button>
          <div className="flex items-center gap-2">
            <div className="relative">
              <img src={messageIcon} alt="briefcaseIcon" className="w-6 h-6" />
              <img
                src={ellipseIcon}
                alt="ellipseIcon"
                className="absolute top-0 right-0"
              />
            </div>
            <p className="text-xl text-[#B0B0B0] font-medium leading-[27px] text-left">
              Messages
            </p>
          </div>
        </button>
        <button>
          <div className="flex gap-2 items-center mr-6">
            <img src={coinhandIcon} alt="briefcaseIcon" className="w-6 h-6" />{" "}
            <p className="text-xl text-[#B0B0B0] font-medium leading-[27px] text-left">
              Payments
            </p>
          </div>
        </button>
      </div>
      <div className="flex gap-4 justify-between items-center">
        <div className="relative">
          <img src={bellIcon} alt="bellIcon" className="w-6 h-6" />
          <img
            src={ellipseIcon}
            alt="ellipseIcon"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="flex gap-[6px]">
          <img src={Rectangle5} alt="atlasian logo" />
          <img src={chevrondownIcon} alt="down icon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
