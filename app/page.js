"use client";
import * as fcl from "@onflow/fcl";
import { FaRegBuilding } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";

import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { featuresList } from "@/constants";

export default function Home() {
  const [email, setEmail] = useState("");
  const [accType, setAccType] = useState("");
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({ loggedIn: null });

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

  const handleAccType = (e) => {
    fcl.signUp;
    if (e.currentTarget.attributes["tag"].value === "brand") {
      setAccType("brand");
    } else setAccType("ambassador");
  };

  useEffect(() => fcl.currentUser.subscribe(setUser), []);

  useEffect(() => {
    const handleClick = () => {
      setModal(false);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("scroll", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("scroll", handleClick);
    };
  }, [modal]);

  return (
    <section className="flex flex-col items-center justify-center relative">
      <div className="bg_gradient opacity-30 absolute w-[70vw] bg_gradient_animate" />
      <article className="border-[#00ef8b] border-solid border-2 w-[80%] py-7 text-center z-10">
        <h1 className="hero_gradient-1 text-[56px] font-[700] font-hero leading-[68px]">
          Identify the ideal Brand
          <span className="block">Ambassadors for your company.</span>
        </h1>
        <p className="text-[20px] leading-[26px] mt-5 mb-10">
          Find the powerful force in helping you to increase brand awareness,
          generate leads, and drive sales.
        </p>
        <div className="flex flex-row justify-center">
          <Button type="Login" style="primary" onClick={fcl.logIn} />
          <Button
            type="Sign Up"
            style="secondary"
            onClick={() => setModal(!modal)}
          />
        </div>
      </article>

      <section className="flex flex-col justify-center my-[100px]">
        <div className="text-center">
          <h1 className="text-[#fff] font-hero text-[32px] font-bold">
            Why Choose Us
          </h1>
          <p>
            We have a team of experts who can help you create and manage your
            influencer campaigns
          </p>
        </div>

        <div className="flex flex-row justify-center mt-[90px]">
          <div className="flex flex-col w-[fit-content] pt-5">
            <div className="border-[#00ef8b] border-[2px] border-solid rounded-full w-[40px] h-[40px] text-[24px] flex flex-row justify-center items-center">
              01
            </div>
            <hr className="h-[107px] w-0 border-[#00ef8b] border-[1px] border-solid self-center" />
            <div className="border-[#00ef8b] border-[2px] border-solid rounded-full w-[40px] h-[40px] text-[24px] flex flex-row justify-center items-center">
              02
            </div>
            <hr className="h-[107px] w-0 border-[#00ef8b] border-[1px] border-solid self-center" />
            <div className="border-[#00ef8b] border-[2px] border-solid rounded-full w-[40px] h-[40px] text-[24px] flex flex-row justify-center items-center">
              03
            </div>
            <hr className="h-[107px] w-0 border-[#00ef8b] border-[1px] border-solid self-center" />
            <div className="border-[#00ef8b] border-[2px] border-solid rounded-full w-[40px] h-[40px] text-[24px] flex flex-row justify-center items-center">
              04
            </div>
            <hr className="h-[107px] w-0 border-[#00ef8b] border-[1px] border-solid self-center" />
            <div className="border-[#00ef8b] border-[2px] border-solid rounded-full w-[40px] h-[40px] text-[24px] flex flex-row justify-center items-center">
              05
            </div>
          </div>
          <div className="w-[58%] last:">
            {featuresList.map((feature, i) => (
              <article
                key={i}
                className="border-[#00ef8b] border-[2px] rounded-[5px] border-solid mb-[40px] mt-[-15px] ml-6 p-4"
              >
                <h1 className="text-[24px] font-hero font-bold">
                  {feature.title}
                </h1>
                <p>{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {modal && (
        <div className="bg-[#242424] w-[550px] h-[400px] flex flex-col items-center justify-center rounded-[10px] p-10 absolute top-3 left-[30%] z-20 border-[1px] border-[#00ef8b]">
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
              onClick={handleAccType}
              tag="brand"
              className="bg-[#363636] hover:border-[#00ef8b] hover:border-[1px] cursor-pointer rounded-[5px] w-[200px] h-[200px] flex flex-col items-center justify-center"
            >
              <Link
                href={`/${accType}/sign-up`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaRegBuilding size={80} color="#00ef8b" />
                <p className="pt-5">Flow Project</p>
              </Link>
            </div>
            <div
              onClick={handleAccType}
              tag="ambassador"
              className="bg-[#363636] hover:border-[#00ef8b] hover:border-[1px] cursor-pointer rounded-[5px] w-[200px] h-[200px] flex flex-col items-center justify-center"
            >
              <Link
                href={`/${accType}/sign-up`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <RiAccountCircleLine size={80} color="#00ef8b" />
                <p className="pt-5">Ambassador</p>
              </Link>
            </div>
          </div>
          <hr className="w-[218px] h-[1px]" />
          <div className="mt-5">
            Already have an account?{" "}
            <span className="text-[#00ef8b] font-semibold">Login</span>
          </div>
        </div>
      )}

      <section className="bg-[#080708] w-[100%] h-[279px] flex flex-col items-center justify-center relative">
        <div className="bg_gradient opacity-100 absolute w-[70vw] bg_gradient_animate" />
        <div className="border_animate absolute" />
        <h1 className="text-[#fff] font-hero text-[32px] font-bold">
          Get the Latest <span className="text-[#00ef8b]">Beon</span> Updates
        </h1>
        <p className="mb-7">
          Subscribe to get the latest updates and newletters from Us.
        </p>
        <form className="">
          <input
            className="rounded-[5px] w-[453px] h-[56px] p-3 focus:outline-none"
            type="text"
            // value={email}
            placeholder="Enter your email address"
          />
          <Button type="Get Updates" style="primary" />
        </form>
      </section>
    </section>
  );
}
