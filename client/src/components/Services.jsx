import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services ">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 ">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient text-right">
          Services that we will
          <br />
         continue to improve
        </h1>
        <p className="text-left my-2 text-white font-light pl-20 md:w-9/12 w-11/12 text-base text-center">
          Working towards becoming a premiere <br />option in the
         
          Crypto/Decentralized <br />space w/ various super friendly services we offer
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center ">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Secure Transactions"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. Don't worry about safety of transactions. Completely secure with us"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Lowest Rates"
          icon={<RiMoneyDollarCircleFill fontSize={21} className="text-white" />}
          subtitle="Paying too much in fees with our competition? 
          We're in this strictly to empowering users."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Flexibility"
          icon={<BiCoinStack fontSize={21} className="text-white" />}
          subtitle="Soon you'll be able to buy/sell and send any of the prominent and safe Cryptocurrencies"
        />
      </div>
    </div>
  </div>
);

export default Services;