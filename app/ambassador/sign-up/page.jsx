"use client";
"use client";
import { useState } from "react";
import Image from "next/image";
import { BsExclamationCircle } from "react-icons/bs";

const page = () => {
  const [page, setPage] = useState(1);

  const handleBack = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setPage(2);
  };

  return (
    <>
      <section
        className={`${
          page == 2 ? "hidden" : "flex flex-row"
        }  items-center justify-center my-12 relative`}
      >
        <div className="bg_gradient absolute bottom-0 w-[70vw] bg_gradient_animate z-10" />
        <div className="sign_in_wrapper_gradient p-10 gap-10 w-[42vw] h-[520px]">
          <div className="flex flex-row justify-between items-center mb-6">
            <p className="text-signIn font-semibold text-[16px]">
              Personal Information
            </p>
            <p className="text-[12px] font-semibold">
              <span className="text-[#00ef8b]">Step {page}</span> of 2
            </p>
          </div>
          <div className="flex_row justify-center items-center sign_in_gallery_gradient w-[66px] h-[66px] rounded-full ">
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
              Upload a clear headshot for easy verification.
            </p>
          </div>

          <form className="flex_col mt-8">
            <label htmlFor="firstName" className="text-signIn">
              First Name
            </label>
            <input
              className="input_text"
              name="firstName"
              type="text"
              placeholder="John"
            />
            <label htmlFor="lastName" className="text-signIn mt-3">
              Last Name
            </label>
            <input
              className="input_text"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
            <button onClick={handleNext} className="input_btn">
              Next
            </button>
          </form>
        </div>
      </section>

      {page == 2 && (
        <section
          className={`${
            page == 1 ? "hidden" : "flex flex-row"
          } items-center justify-center my-12 relative`}
        >
          <div className="bg_gradient absolute bottom-0 w-[70vw] bg_gradient_animate z-10" />
          <div className="sign_in_wrapper_gradient p-10 gap-10 w-[42vw] h-[420px]">
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
                type="text"
                placeholder="http://twitter.com/Flow_Project"
              />
              <label htmlFor="instagram" className="text-signIn mt-3">
                Instagram
              </label>
              <input
                className="input_text"
                name="instagram"
                type="text"
                placeholder="https://linked.In/Flow_Project"
              />
              <button className="input_btn">Proceed</button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default page;
