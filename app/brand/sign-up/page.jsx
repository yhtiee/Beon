"use client";
import { useState } from "react";
import Image from "next/image";
import { BsExclamationCircle } from "react-icons/bs";
import { RiArrowDownSLine, RiCloseLine } from "react-icons/ri";
import { niche } from "@/constants";

const BrandSignUp = () => {
  const [page, setPage] = useState(1);
  const [showNicheOps, setShowNicheOps] = useState(false);
  const [selectedNicheOps, setSelectedNicheOps] = useState([]);

  const [brand, setBrand] = useState({
    name: "",
    website: "",
    selectedNiche: [],
    whitePaper: "",
    twitter: "",
    instagram: "",
  });

  /* Handles the btn to previous page(1) */
  const handleBack = (e) => {
    e.preventDefault();
    setPage(1);
  };

  /* Handles the btn to next page(2) */
  const handleNext = (e) => {
    e.preventDefault();
    setPage(2);
  };

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
    <>
      {/* Form Page 1 */}
      <section
        className={`${
          page == 2 ? "hidden" : "flex flex-row"
        }  items-center justify-center my-12 relative`}
      >
        <div className="sign_in_wrapper_gradient p-10 gap-10 w-[45vw] h-[680px]">
          <div className="flex flex-row justify-between items-center mb-6">
            <p className="text-signIn font-semibold text-[16px]">
              Company Information
            </p>
            <p className="text-[12px] font-semibold">
              <span className="text-[#00ef8b]">Step {page}</span> of 2
            </p>
          </div>

          {/* Logo */}
          <div className="flex_row justify-center items-center sign_in_gallery_gradient w-[66px] h-[66px] rounded-full">
            <Image
              src="/images/gallery-icon.png"
              alt="Gallery icon"
              width={30}
              height={30}
              className="object-contain"
            ></Image>
          </div>
          <div className="flex_row items-center font-[500] text-[#F4FFB3] mt-3">
            <BsExclamationCircle />
            <p className="text-[14px] ml-4">
              Upload a clear clear Company Logo.
            </p>
          </div>

          <form className="flex_col mt-8">
            {/* Project Name */}
            <label htmlFor="name" className="text-signIn">
              Name
            </label>
            <input
              className="input_text"
              name="name"
              value={brand.name}
              onChange={(e) => setBrand({ ...brand, name: e.target.value })}
              type="text"
              required
              placeholder="flow project"
            />

            {/* Website */}
            <label htmlFor="website" className="text-signIn mt-3">
              Website
            </label>
            <input
              className="input_text"
              name="website"
              value={brand.website}
              onChange={(e) => setBrand({ ...brand, website: e.target.value })}
              type="text"
              placeholder="https://flow-project.xyz"
            />
            <div className="relative">
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
            <label htmlFor="white-paper" className="text-signIn mt-3">
              Whitepaper
            </label>
            <input
              className="input_text"
              name="white-paper"
              value={brand.whitePaper}
              onChange={(e) =>
                setBrand({ ...brand, whitePaper: e.target.value })
              }
              type="text"
              placeholder="https://flow-project.xyz/whitepaper"
            />
            <button
              onClick={handleNext}
              className="input_btn bg-[#00ef8b] text-black font-semibold"
            >
              Next
            </button>
          </form>
        </div>
      </section>

      {/* Form Page 2 */}
      {page == 2 && (
        <section
          className={`${
            page == 1 ? "hidden" : "flex flex-row"
          } items-center justify-center my-12 relative`}
        >
          <div className="sign_in_wrapper_gradient p-10 gap-10 w-[42vw] h-[450px]">
            <div className="flex flex-row justify-between items-center mb-6">
              <p className="text-signIn font-semibold text-[16px]">
                Social Links
              </p>
              <p className="text-[12px] font-semibold">
                <span className="text-[#00ef8b]">Step {page}</span> of 2
              </p>
            </div>

            <form className="flex_col mt-8">
              <label htmlFor="twitter" className="text-signIn">
                Twitter
              </label>
              <input
                className="input_text"
                name="twitter"
                value={brand.twitter}
                onChange={(e) =>
                  setBrand({ ...brand, twitter: e.target.value })
                }
                type="text"
                placeholder="http://twitter.com/flow-project"
              />
              <label htmlFor="instagram" className="text-signIn mt-3">
                Instagram
              </label>
              <input
                className="input_text"
                name="instagram"
                value={brand.instagram}
                onChange={(e) =>
                  setBrand({ ...brand, instagram: e.target.value })
                }
                type="text"
                placeholder="https://www.linkedin.com/in/flow-project"
              />
              <button className="input_btn bg-[#00ef8b] text-black font-semibold">
                Proceed
              </button>
              <button
                onClick={handleBack}
                className="flex_col justify-center items-center  input_btn bg-transparent text-white font-semibold"
              >
                Back
                <div className="w-[24px] border-[1px] border-white" />
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default BrandSignUp;
