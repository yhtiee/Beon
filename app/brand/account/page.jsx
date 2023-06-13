"use client";

import { useState } from "react";
import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { VscUnverified } from "react-icons/vsc";

import { RiArrowDownSLine, RiCloseLine } from "react-icons/ri";
import { niche } from "@/constants";

const brandAccount = () => {
  const [showNicheOps, setShowNicheOps] = useState(false);
  const [selectedNicheOps, setSelectedNicheOps] = useState([]);

  /* Handles adding and removing Niche options */
  const handleClickedOps = (e) => {
    const option = e.currentTarget.attributes["tag"].value;
    if (selectedNicheOps.includes(option)) {
      const newOps = selectedNicheOps.filter((item) => item !== option);
      setSelectedNicheOps(newOps);
    } else setSelectedNicheOps([...selectedNicheOps, option]);

    setShowNicheOps(false);
  };

  return (
    // Account Container
    <div className="dashboard_gradient border-[1px] my-7 p-5 rounded-md border-[#00ef8b] w-[94%]">
      {/* User Avatar & Notification status */}
      <div className="flex_row items-center pb-2 justify-end border-b-[1px] border-b-[#ebebeb]">
        <div className="relative">
          {/* <Image></Image> */}
          <div className="rounded-full w-[32px] h-[32px] bg-[#D9D9D9]" />
          <div className="rounded-full absolute bottom-1 right-0 w-2 h-2 bg-[#00ef8b]" />
        </div>
        <div className="relative ml-4">
          <IoNotificationsOutline size={32} />
          <div className="rounded-full absolute bottom-1 right-[1.5px] w-2 h-2 bg-[#00ef8b]" />
        </div>
      </div>

      {/* User main Avatar and Name */}
      <div className="flex_row items-center my-6">
        <div className="relative mr-4">
          {/* <Image></Image> */}
          <div className="rounded-full w-[104px] h-[104px] bg-[#D9D9D9]" />
          <div className="rounded-full absolute bottom-1 right-2 w-6 h-6 bg-[#00ef8b]" />
        </div>
        <div>
          <div className="flex_row items-center">
            <h1 className="text-[20px] font-semibold mr-2">WhaleFond</h1>
            <VscUnverified size={20} color="#FFB800" />
          </div>
          <div className="bg-[#D9D9D9] w-[fit-content] mt-2 py-1 px-2 rounded-2xl">
            <p className="text-black text-[14px]">Change Logo</p>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="border-[1px] border-[#ebebeb] rounded-md my-6 p-8">
        <div className="flex_row justify-between my-6">
          <p className="text-signIn font-semibold text-[16px]">
            Project Information
          </p>
          <div className="flex_row text-[14px] items-center">
            <p className="text-[#00ef8b] mr-2">Edit</p>
            <FiEdit color="#00ef8b" />
          </div>
        </div>

        <form>
          <div className="flex_row justify-between w-[100%]">
            <div className="w-[47%]">
              <label htmlFor="projectName" className="text-signIn">
                Project Name
              </label>
              <input
                className="input_text"
                name="projectName"
                // value={ambassador.twitter}
                // onChange={(e) =>
                //   setAmbassador({ ...ambassador, twitter: e.target.value })
                // }
                type="text"
                placeholder="WhaleFond"
              />
            </div>
            <div className="w-[47%]">
              <label htmlFor="website" className="text-signIn">
                Website
              </label>
              <input
                className="input_text"
                name="website"
                // value={ambassador.twitter}
                // onChange={(e) =>
                //   setAmbassador({ ...ambassador, twitter: e.target.value })
                // }
                type="text"
                placeholder="https://www.whale-fond.xyz"
              />
            </div>
          </div>
          <div className="flex_row justify-between w-[100%]">
            <div className="w-[47%]">
              <label htmlFor="email" className="text-signIn">
                Email Address
              </label>
              <input
                className="input_text"
                name="email"
                // value={ambassador.twitter}
                // onChange={(e) =>
                //   setAmbassador({ ...ambassador, twitter: e.target.value })
                // }
                type="text"
                placeholder="operation@whalefond.mail"
              />
            </div>
            <div className="w-[47%]">
              <label htmlFor="whitePaper" className="text-signIn">
                White Paper
              </label>
              <input
                className="input_text"
                name="whitePaper"
                // value={ambassador.twitter}
                // onChange={(e) =>
                //   setAmbassador({ ...ambassador, twitter: e.target.value })
                // }
                type="text"
                placeholder="https://www.whale-fond.xyz/white-paper"
              />
            </div>
          </div>
          <div className="relative w-[100%]">
            <p className="text-signIn">Niche</p>
            <div className="input_text px-1 flex_row items-center">
              {selectedNicheOps.length > 0 ? (
                selectedNicheOps.map((option, i) => (
                  <div
                    key={i}
                    className="bg-[#272727] border-[1px] border-[#00ef8b] p-1 rounded-sm mr-2 flex_row items-center"
                  >
                    <p>{option}</p>
                    <div className="border-l-[1px] cursor-pointer ml-3 pl-1">
                      <RiCloseLine tag={option} onClick={handleClickedOps} />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-signIn">Select your niche</p>
              )}
              <div className="cursor-pointer h-[90%] flex_row items-center ml-auto">
                <RiArrowDownSLine
                  onClick={() => setShowNicheOps(!showNicheOps)}
                />
              </div>
            </div>
            {showNicheOps && (
              <div className="rounded-[5px] w-[95%] h-[86px] bg-[#2F2F2F] border-[1px] border-[#00ef8b] px-[12px] p-[6px] absolute mt-1 overflow-y-scroll">
                {niche.map((item, i) => (
                  <p
                    className={`${
                      selectedNicheOps.includes(item) && "text-[#00ef8b]"
                    } cursor-pointer hover:text-[#00ef8b]`}
                    key={i}
                    tag={item}
                    onClick={handleClickedOps}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="desc" className="text-signIn">
              Description
            </label>
            <textarea
              name="desc"
              className=" rounded-[5px] bg-[#2F2F2F] border-[1px] border-[#CBD2E0] p-[6px] mb-2 focus:border-[#00ef8b] focus:outline-none w-[100%] h-[209px]"
            ></textarea>
          </div>

          <div className="flex_row justify-end mt-6">
            <button className="rounded-[5px] w-[25%] h-[46px] bg-[#00ef8b]">
              Done
            </button>
          </div>
        </form>
      </div>

      <div className="border-[1px] border-[#ebebeb] rounded-md p-8">
        <div className="flex_row justify-between my-6">
          <p className="text-signIn font-semibold text-[16px]">Social Links</p>
          <div className="flex_row text-[14px] items-center">
            <p className="text-[#00ef8b] mr-2">Edit</p>
            <FiEdit color="#00ef8b" />
          </div>
        </div>

        <form>
          <div className="flex_row justify-between w-[100%]">
            <div className="w-[47%]">
              <label htmlFor="twitter" className="text-signIn">
                Twitter
              </label>
              <input
                className="input_text"
                name="twitter"
                // value={ambassador.twitter}
                // onChange={(e) =>
                //   setAmbassador({ ...ambassador, twitter: e.target.value })
                // }
                type="text"
                placeholder="https://www.twitter.com/whalefond"
              />
            </div>
            <div className="w-[47%]">
              <label htmlFor="discord" className="text-signIn">
                Instagram
              </label>
              <input
                className="input_text"
                name="discord"
                // value={ambassador.twitter}
                // onChange={(e) =>
                //   setAmbassador({ ...ambassador, twitter: e.target.value })
                // }
                type="text"
                placeholder="Whalefond Server"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default brandAccount;
