import locationIcon from "../assets/marker-pin-01.svg";
import coinsIcon from "../assets/coins-stacked-03.svg";
import Figma from "../assets/figma.png";
import AdobeIllustrator from "../assets/adobeIL.png";
import AdobeXD from "../assets/adobeXD.png";
import AtlasianLogo from "../assets/atlasianLogo.png";
import deleteIcon from "../assets/trash-03.svg";
import editIcon from "../assets/edit-02.svg";
import eyeIcon from "../assets/eye.svg";
import messageIcon from "../assets/message-square.svg";
import usertickIcon from "../assets/user-check-01.svg";
import usersIcon from "../assets/users-01.svg";
const JobDescription = () => {
  return (
    <div className="flex justify-between">
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
                Work on creating graphics content and other graphic related
                works
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
        {/* About hob section */}
        <div className="flex flex-col w-[736px] gap-4 pl-[100px] py-8">
          <div className="flex justify-start items-center gap-[10px]">
            <img src={AtlasianLogo} alt="atlasian logo" />
            <p className="text-xl text-[#4F4F4F] font-medium leading-[27px] text-left">
              Atlassian
            </p>
          </div>
          <div className="flex justify-between gap-12">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm text-[#6E6D6D] font-medium leading-[18.9px] text-left">
                  Company size
                </p>
                <p className="text-base text-[#3D3D3D] font-medium leading-[21.6px] text-left">
                  1k - 2k Empolyees
                </p>
              </div>
              <div>
                <p className="text-sm text-[#6E6D6D] font-medium leading-[18.9px] text-left">
                  Sector
                </p>
                <p className="text-base text-[#3D3D3D] font-medium leading-[21.6px] text-left">
                  Information Technology, Infrastructure
                </p>
              </div>
              <div>
                <p className="text-sm text-[#6E6D6D] font-medium leading-[18.9px] text-left">
                  Founded In
                </p>
                <p className="text-base text-[#3D3D3D] font-medium leading-[21.6px] text-left">
                  2019
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm text-[#6E6D6D] font-medium leading-[18.9px] text-left">
                  Type
                </p>
                <p className="text-base text-[#3D3D3D] font-medium leading-[21.6px] text-left">
                  Private
                </p>
              </div>
              <div>
                <p className="text-sm text-[#6E6D6D] font-medium leading-[18.9px] text-left">
                  Funding
                </p>
                <p className="text-base text-[#3D3D3D] font-medium leading-[21.6px] text-left">
                  Bootstrapped
                </p>
              </div>
              <div>
                <p className="text-sm text-[#6E6D6D] font-medium leading-[18.9px] text-left">
                  Founded By
                </p>
                <p className="text-base text-[#3D3D3D] font-medium leading-[21.6px] text-left">
                  <a
                    href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw"
                    target="blank"
                  >
                    Scott Farquhar,
                  </a>
                  <a
                    href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA"
                    target="blank"
                  >
                    Mike Cannon-Brookes
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[410px] shadow-[0px_4px_4px_0px_#00000040] border-[1px,1px,0px,0px] border-solid border-[#E7E7E7]">
        <div className="flex flex-col px-6 pt-9 w-[360px]">
          <div className="flex justify-between">
            <button className="flex gap-[10px] justify-center items-center rounded-[8px] border-[0.8px] border-solid border-[#DC4A2D] py-3 px-6">
              <img src={deleteIcon} alt="delete" />
              <p className="text-base text-[#DC4A2D] font-medium leading-[21.6px] text-left">
                Delete job
              </p>
            </button>
            <button className="flex gap-[10px] justify-center items-center bg-[#DC4A2D] rounded-[8px] border-[2px] border-solid border-[#FED3CA] py-3 px-6">
              <img src={editIcon} alt="edit" />
              <p className="text-base text-[#FFFFFF] font-medium leading-[21.6px] text-left">
                Edit job
              </p>
            </button>
          </div>
          <div className="flex flex-col gap-4 p-3 rounded-[5px]">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-[10px] p-[10px]">
                <img src={usersIcon} alt="users" />
                <p className="text-base text-[#4F4F4F] font-medium leading-[21.6px] text-left">
                  Applicants
                </p>
              </div>
              <div className="flex justify-center items-center gap-[10px] px-[6px] py-[10px]">
                <p className="text-xl text-[#3D3D3D] font-semibold leading-[27px] text-left">
                  400
                </p>
              </div>
            </div>
            <div className="h-[1px] bg-[#E7E7E7]"></div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-[10px] p-[10px]">
                <img src={usertickIcon} alt="check user" />
                <p className="text-base text-[#4F4F4F] font-medium leading-[21.6px] text-left">
                  Matches
                </p>
              </div>
              <div className="flex justify-center items-center gap-[10px] px-[6px] py-[10px]">
                <p className="text-xl text-[#3D3D3D] font-semibold leading-[27px] text-left">
                  400
                </p>
              </div>
            </div>
            <div className="h-[1px] bg-[#E7E7E7]"></div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-[10px] p-[10px]">
                <img src={messageIcon} alt="messages" />
                <p className="text-base text-[#4F4F4F] font-medium leading-[21.6px] text-left">
                  Messages
                </p>
              </div>
              <div className="flex justify-center items-center gap-[10px] px-[6px] py-[10px]">
                <p className="text-xl text-[#3D3D3D] font-semibold leading-[27px] text-left">
                  400
                </p>
              </div>
            </div>
            <div className="h-[1px] bg-[#E7E7E7]"></div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-[10px] p-[10px]">
                <img src={eyeIcon} alt="" />
                <p className="text-base text-[#4F4F4F] font-medium leading-[21.6px] text-left">
                  Views
                </p>
              </div>
              <div className="flex justify-center items-center gap-[10px] px-[6px] py-[10px]">
                <p className="text-xl text-[#3D3D3D] font-semibold leading-[27px] text-left">
                  400
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobDescription;
