import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { VscUnverified } from "react-icons/vsc";
import { MdAddCircleOutline } from "react-icons/md";

const ambassadorAccount = () => {
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

      {/* User main Avatar, Name, Title */}
      <div className="flex_row my-6">
        <div className="relative mr-4">
          {/* <Image></Image> */}
          <div className="rounded-full w-[104px] h-[104px] bg-[#D9D9D9]" />
          <div className="rounded-full absolute bottom-1 right-2 w-6 h-6 bg-[#00ef8b]" />
        </div>
        <div>
          <div className="flex_row items-center">
            <h1 className="text-[20px] font-semibold mr-2">John Doe</h1>
            <VscUnverified size={20} color="#FFB800" />
          </div>
          <p className="text-[#636363] mb-2">Community Manager</p>
          <div className="bg-[#D9D9D9] w-[fit-content]  py-1 px-2 rounded-2xl">
            <p className="text-black text-[14px]">Change Photo</p>
          </div>
        </div>
      </div>

      {/* User Personal Information */}
      <div className="border-[1px] border-[#ebebeb] rounded-md my-6 p-8">
        <div className="flex_row justify-between my-6">
          <p className="text-signIn font-semibold text-[16px]">
            Personal Information
          </p>
          <div className="flex_row text-[14px] items-center">
            <p className="text-[#00ef8b] mr-2">Edit</p>
            <FiEdit color="#00ef8b" />
          </div>
        </div>

        <form>
          <div className="flex_row justify-between w-[100%]">
            <div className="w-[47%]">
              <label htmlFor="firstName" className="text-signIn">
                First Name
              </label>
              <input
                className="input_text"
                name="firstName"
                // value={ambassador.twitter}
                // onChange={(e) =>
                //   setAmbassador({ ...ambassador, twitter: e.target.value })
                // }
                type="text"
                placeholder="John"
              />
            </div>
            <div className="w-[47%]">
              <label htmlFor="lastName" className="text-signIn">
                Last Name
              </label>
              <input
                className="input_text"
                name="lastName"
                // value={ambassador.twitter}
                // onChange={(e) =>
                //   setAmbassador({ ...ambassador, twitter: e.target.value })
                // }
                type="text"
                placeholder="Doe"
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
                placeholder="John"
              />
            </div>
            <div className="w-[47%]">
              <label htmlFor="title" className="text-signIn">
                Title
              </label>
              <input
                className="input_text"
                name="title"
                // value={ambassador.twitter}
                // onChange={(e) =>
                //   setAmbassador({ ...ambassador, twitter: e.target.value })
                // }
                type="text"
                placeholder="Community Manager"
              />
            </div>
          </div>
          <div>
            <label htmlFor="bio" className="text-signIn">
              Bio
            </label>
            <textarea
              name="bio"
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
                placeholder="John"
              />
            </div>
            <div className="w-[47%]">
              <label htmlFor="instagram" className="text-signIn">
                Instagram
              </label>
              <input
                className="input_text"
                name="instagram"
                // value={ambassador.twitter}
                // onChange={(e) =>
                //   setAmbassador({ ...ambassador, twitter: e.target.value })
                // }
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
        </form>
      </div>

      <section className="border-[1px] border-[#ebebeb] rounded-md my-6 p-8">
        <div className="flex_row justify-between my-6">
          <p className="text-signIn font-semibold text-[16px]">
            Work Experience
          </p>
          <div className="flex_row text-[14px] items-center">
            <p className="text-[#00ef8b] mr-2">Add</p>
            <MdAddCircleOutline color="#00ef8b" />
          </div>
        </div>

        <div className="flex_row items-center py-4 justify-center text-signIn text-[24px] font-semibold">
          <h2>No Work Experience</h2>
        </div>
      </section>
    </div>
  );
};

export default ambassadorAccount;
