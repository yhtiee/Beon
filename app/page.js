"use client";
// import Image from 'next/image'
import { useState } from "react";
import Button from "@/components/Button";
import { featuresList } from "@/constants";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <section className="flex flex-col items-center justify-center relative">
      <div className="bg_gradient absolute w-[70vw] bg_gradient_animate" />
      <article className="border-[#00ef8b] border-solid border-2 w-[80%] py-7 text-center">
        <h1 className="hero_gradient-1 text-[56px] font-[700] font-hero leading-[68px]">
          Identify the ideal Brand
          <span className="block">Ambassadors for your company.</span>
        </h1>
        <p className="text-[20px] leading-[26px] mt-5 mb-10">
          Find the powerful force in helping you to increase brand awareness,
          generate leads, and drive sales.
        </p>
        <div className="flex flex-row justify-center">
          <Button type="Login" style="primary" />
          <Button type="Sign Up" style="secondary" />
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

        <div className="flex flex-row justify-center my-[90px]">
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

      <section className="bg-[#080708] w-[100%] h-[279px] flex flex-col items-center justify-center relative">
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
            value={email}
            placeholder="Enter your email address"
          />
          <Button type="Get Updates" style="primary" />
        </form>
      </section>
    </section>
  );
}
