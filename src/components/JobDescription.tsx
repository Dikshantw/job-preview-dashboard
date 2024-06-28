import locationIcon from "../assets/marker-pin-01.svg";
import coinsIcon from "../assets/coins-stacked-03.svg";
import Figma from "../assets/figma.png";
import AdobeIllustrator from "../assets/adobeIL.png";
import AdobeXD from "../assets/adobeXD.png";
const JobDescription = () => {
  return (
    <div className="flex flex-col w-full border border-solid border-[#E7E7E7]">
      {/*Job Title*/}
      <div className="flex flex-col gap-6 pl-[100px] pt-9 pb-8">
        <div className="flex gap-3 justify-start items-center">
          <p className="text-[35px] text-[#3D3D3D] font-semibold leading-[47.25px] text-left">
            Senior Product Designer
          </p>
          <div className="w-[6px] h-[6px] rounded bg-[#D1D1D1]"></div>
          <p className="text-sm text-[#888888] font-medium leading-[18.9px] text-left">
            posted 2 days ago
          </p>
          <div className="flex w-[57px] h-[22px] justify-center items-center rounded-full gap-1 bg-[#ECFDF3] border border-solid border-[#ABEFC6] px-[2px] pt-2 pb-[6px]">
            <div className="w-2 h-2 flex justify-center items-center">
              <div className="w-[6px] h-[6px] rounded-full bg-[#17B26A]"></div>
            </div>
            <p className="text-xs text-[#067647] font-medium leading-[18px] text-center">
              Open
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-start items-center">
          <div className="flex gap-2 justify-center items-center">
            <img src={locationIcon} alt="location" className="w-6 h-6" />
            <p className="text-xl text-[#5D5D5D] font-medium leading-[27px] text-left">
              Delware, USA
            </p>
          </div>

          <div className="w-[6px] h-[6px] rounded bg-[#D1D1D1]"></div>
          <div className="flex gap-3 justify-center items-center">
            <img src={coinsIcon} alt="money" className="w-6 h-6" />
            <p className="text-xl text-[#5D5D5D] font-medium leading-[27px] text-left">
              $300k-$400k
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[1px] bg-[#E7E7E7]"></div>
      {/*Job Requirement */}
      <div className="flex gap-16 pl-[100px] py-8">
        <div className="flex flex-col gap-2 ">
          <p className="text-sm text-[#6E6D6D] font-medium leading-[18.9px] text-left">
            Skills Required
          </p>
          <div className="flex flex-col gap-2 justify-start items-start">
            <div className="flex justify-center items-center rounded-md border border-solid border-[#D0D5DD] gap-[3px] px-1 py-[6px]">
              <img src={Figma} alt="figma" />
              <p className="text-xs text-[#344054] font-medium leading-[16.2px] text-center">
                Figma
              </p>
            </div>
            <div className="flex justify-center items-center rounded-md border border-solid border-[#D0D5DD] gap-[3px] px-1 py-[6px]">
              <img src={AdobeIllustrator} alt="adobeIllustrator" />
              <p className="text-xs text-[#344054] font-medium leading-[16.2px] text-center">
                Adobe Illustrator
              </p>
            </div>
            <div className="flex justify-center items-center rounded-md border border-solid border-[#D0D5DD] gap-[3px] px-1 py-[6px]">
              <img src={AdobeXD} alt="adobeXD" />
              <p className="text-xs text-[#344054] font-medium leading-[16.2px] text-center">
                Adobe XD
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-sm text-[#6E6D6D] font-medium leading-[18.9px] text-left">
            Preferred Language
          </p>
          <p className="text-base text-[#3D3D3D] font-semibold leading-[21.6px] text-left">
            English
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-sm text-[#6E6D6D] font-medium leading-[18.9px] text-left">
            Type
          </p>
          <p className="text-base text-[#3D3D3D] font-semibold leading-[21.6px] text-left">
            Full time
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-sm text-[#6E6D6D] font-medium leading-[18.9px] text-left">
            Years of Experience
          </p>
          <p className="text-base text-[#3D3D3D] font-semibold leading-[21.6px] text-left">
            3+ Years of Experience
          </p>
        </div>
      </div>
      <div className=" h-[1px] bg-[#E7E7E7]"></div>
      {/* {about the job} */}
      <div className="flex flex-col gap-2 pl-[100px] py-8">
        <p className="text-sm text-[#6E6D6D] font-medium leading-[18.9px] text-left">
          About the job
        </p>
        <div className="text-base text-[#3D3D3D] font-medium leading-7 text-left">
          <ol className="list-decimal list-inside">
            <li>Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              Work on creating graphics content and other graphic related works
            </li>
          </ol>
          <ul className="list-disc list-inside">
            Benefits:
            <li className="mr-1">Health insurance</li>
            <li className="mr-1">Provident Fund</li>
          </ul>
          <ul className="list-disc list-inside">
            Schedule:
            <li className="mr-1">Day Shift</li>
          </ul>
          <ul className="list-disc list-inside">
            Supplemental pay types:
            <li className="mr-1">Performance bonus</li>
            <li className="mr-1">Yearly bonus</li>
          </ul>
          <p>Work Location: In person</p>
        </div>
      </div>
      <div className=" h-[1px] bg-[#E7E7E7]"></div>
    </div>
  );
};
export default JobDescription;
