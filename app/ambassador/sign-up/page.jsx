"use client";
"use client";
import { useState } from "react";
import Image from "next/image";
import { BsExclamationCircle } from "react-icons/bs";

const page = () => {
  const [page, setPage] = useState(1);

  const [ambassador, setAmbassador] = useState({
    firstName: "",
    lastName: "",
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

  return (
    <>
      {/* Form Page 1 */}
      <section
        className={`${
          page == 2 ? "hidden" : "flex flex-row"
        }  items-center justify-center my-12 relative`}
      >
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
              required
              value={ambassador.firstName}
              onChange={(e) =>
                setAmbassador({ ...ambassador, firstName: e.target.value })
              }
              type="text"
              placeholder="John"
            />
            <label htmlFor="lastName" className="text-signIn mt-3">
              Last Name
            </label>
            <input
              className="input_text"
              name="lastName"
              required
              value={ambassador.lastName}
              onChange={(e) =>
                setAmbassador({ ...ambassador, lastName: e.target.value })
              }
              type="text"
              placeholder="Doe"
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
                value={ambassador.twitter}
                onChange={(e) =>
                  setAmbassador({ ...ambassador, twitter: e.target.value })
                }
                type="text"
                placeholder="https://twitter.com/johndoe"
              />
              <label htmlFor="instagram" className="text-signIn mt-3">
                Instagram
              </label>
              <input
                className="input_text"
                name="instagram"
                value={ambassador.instagram}
                onChange={(e) =>
                  setAmbassador({ ...ambassador, instagram: e.target.value })
                }
                type="text"
                placeholder="https://www.linkedin.com/in/john-doe"
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

export default page;
