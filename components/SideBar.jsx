import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiLogOut, BiWallet } from "react-icons/bi";
import Link from "next/link";

const SideBar = () => {
  return (
    <section className="h-[100vh] w-[25%] relative flex_col items-center justify-center">
      <div className="dashboard_gradient flex_col items-stretch border-[1px] border-[#00ef8b] h-[90%] w-[248px] px-[40px] py-[36px] rounded-md">
        <div className="text-[17px]">
          <h1 className="font-bold text-[45px]">beon.</h1>
          <Link
            href="/ambassador/home"
            className="flex_row items-center my-3 p-2 rounded-lg hover:text-[#00ef8b]"
          >
            <GoHome />
            <p className="ml-3">Home</p>
          </Link>
          <Link
            href="/ambassador/dashboard"
            className="flex_row items-center my-3 p-2 rounded-lg hover:text-[#00ef8b]"
          >
            <RxDashboard />
            <p className="ml-3">Dashboard</p>
          </Link>
          <Link
            href="/ambassador/account"
            className="flex_row items-center my-3 p-2 rounded-lg hover:text-[#00ef8b]"
          >
            <MdOutlineAccountCircle />
            <p className="ml-3">Account</p>
          </Link>
          <Link
            href="/ambassador/wallet"
            className="flex_row items-center my-3 p-2 rounded-lg hover:text-[#00ef8b]"
          >
            <BiWallet />
            <p className="ml-3">Wallet</p>
          </Link>
        </div>
        <Link
          href="/"
          className="flex_row items-center mt-auto p-2 text-[17px] hover:text-[#00ef8b]"
        >
          <BiLogOut />
          <p className="ml-3">Logout</p>
        </Link>
      </div>
    </section>
  );
};

export default SideBar;
