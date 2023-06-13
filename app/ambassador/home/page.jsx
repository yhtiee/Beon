import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";

const AmbassadorHome = () => {
  return (
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

      {/* News */}
      <div className="h-[336px] border-[1px] border-[#ebebeb] rounded-md my-6 p-5">
        <Image
          src="/images/ambassador-img-1.png"
          alt="news photo"
          width={896}
          height={211}
        ></Image>

        <div>
          <h1 className="font-hero text-[30px]">
            Identify the best flow project to work with
          </h1>
          <p>
            Find the right project for your business and reach a new audience
          </p>
        </div>
      </div>

      {/* Projects Title */}
      <div className="w-[100%] flex_row items-center justify-between">
        <h3 className="font-semibold text-[24px]">Projects</h3>
        <div className="h-[1px] w-[75%] bg-[#ebebeb]" />
      </div>

      {/* Projects List */}
      <div className="flex_row flex-wrap gap-4">
        <div className="border-[1px] border-[#ebebeb] rounded-md my-6 p-5 w-[32%]">
          <div className="flex_row items-center">
            <div className="bg-[#ebebeb] rounded-full w-[45px] h-[45px] mr-4" />
            <h4 className="font-semibold text-[20px]">WhaleFund</h4>
          </div>
          <div className="text-[14px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            repellat veritatis repellendus laudantium...
          </div>

          <div>
            <div></div>
          </div>
        </div>
        <div className="border-[1px] border-[#ebebeb] rounded-md my-6 p-5 w-[32%]">
          <div className="flex_row items-center">
            <div className="bg-[#ebebeb] rounded-full w-[45px] h-[45px] mr-4" />
            <h4 className="font-semibold text-[20px]">WhaleFund</h4>
          </div>
          <div className="text-[14px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            repellat veritatis repellendus laudantium...
          </div>

          <div>
            <div></div>
          </div>
        </div>
        <div className="border-[1px] border-[#ebebeb] rounded-md my-6 p-5 w-[32%]">
          <div className="flex_row items-center">
            <div className="bg-[#ebebeb] rounded-full w-[45px] h-[45px] mr-4" />
            <h4 className="font-semibold text-[20px]">WhaleFund</h4>
          </div>
          <div className="text-[14px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            repellat veritatis repellendus laudantium...
          </div>

          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorHome;
