"use client";
import * as fcl from "@onflow/fcl";
import { FaRegBuilding } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";

const AuthModal = ({ accType, handleSignup }) => {
  fcl
    .config()
    .put("flow.network", "testnet")
    .put("app.detail.title", "Beon Flow Project")
    .put("app.detail.icon", "https://i.imgur.com/r23Zhvu.png")
    .put("accessNode.api", process.env.NEXT_PUBLIC_ACCESS_NODE_API)
    .put("discovery.wallet", process.env.NEXT_PUBLIC_DISCOVERY_WALLET)
    .put("0xFlowToken", process.env.NEXT_PUBLIC_CONTRACT_PROFILE);
  // anywhere on the page
  // fcl.unauthenticate();

  const handleChange = (e) => {
    fcl.signUp();
    const newState = e.currentTarget.getAttribute("tag"); // Modify the state in the child component
    handleSignup(newState); // Call the update function passed from the parent
  };

  const [user, setUser] = useState({ loggedIn: null });
  useEffect(() => fcl.currentUser.subscribe(setUser), []);

  console.log(user);

  return (
    <div>
      <div className="bg-[#242424] w-[550px] h-[400px] flex flex-col items-center justify-center rounded-[10px] p-10 fixed top-[15%] left-[28%] z-40 border-[1px] border-[#00ef8b] drop-shadow-xl">
        <h2 className="font-hero text-[20px] font-semibold mb-5 mt-3">
          Sign Up as
        </h2>
        <AiFillCloseCircle
          size={30}
          color="#00ef8b"
          className="absolute top-4 right-4 text-white cursor-pointer"
        />

        <div className="flex flex-row gap-6 justify-center mb-6">
          <div
            onClick={handleChange}
            tag="brand"
            className="bg-[#363636] hover:border-[#00ef8b] hover:border-[1px] cursor-pointer rounded-[5px] w-[200px] h-[200px] flex flex-col items-center justify-center"
          >
            <FaRegBuilding size={80} color="#00ef8b" />
            <p className="pt-5">Flow Project</p>
          </div>
          <div
            onClick={handleChange}
            tag="ambassador"
            className="bg-[#363636] hover:border-[#00ef8b] hover:border-[1px] cursor-pointer rounded-[5px] w-[200px] h-[200px] flex flex-col items-center justify-center"
          >
            <RiAccountCircleLine size={80} color="#00ef8b" />
            <p className="pt-5">Ambassador</p>
          </div>
        </div>
        <hr className="w-[218px] h-[1px]" />

        <div className="mt-5">
          Already have an account?{" "}
          <span className="text-[#00ef8b] font-semibold cursor-pointer">
            Login
          </span>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-30 backdrop-filter backdrop-blur-md" />
    </div>
  );
};

export default AuthModal;
