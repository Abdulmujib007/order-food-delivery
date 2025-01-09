"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const path = usePathname()
    return (
      <nav className="bg-white w-[100%] pb-4">
        <section className="w-[90%] ml-[6rem] pl-[3rem]  bg-appWhite border-x-2 border-b-[1px] border-gray-100 rounded-b-2xl flex justify-between ">
          <div className="flex py-6 items-center r ">
            <Image
              src="/sparkling-line.svg"
              alt="star-logo"
              height={25}
              width={25}
            />
            <p className="text-[1.25rem] ml-4 ">
              {" "}
              Get 5% Off your first order,{" "}
            </p>
            <p className="text-appOrange font-semibold border-b-appOrange border-b-[1px]">
              Promo: ORDER5
            </p>
          </div>
          <div className="flex gap-[1.16rem]  py-6 items-center ">
            <Image
              src="/Location.png"
              alt="location-logo"
              height={25}
              width={25}
            />
            <span className="font-medium text-[1.25rem]">
              Regent Street, A4, A4201, London
            </span>
            <span className="text-appOrange font-medium border-b-[1px] border-b-appOrange ">
              Change Location
            </span>
          </div>
          <div className="bg-[#028643]  items-center pr-3 flex rounded-b-2xl">
            <Image
              className="ml-4 mr-4 "
              alt="office-logo"
              src="/Full Shopping Basket.png"
              height={33}
              width={33}
            />
            <p className="text-white px-4 border-x-white border-x-[1px] h-[100%] flex items-center ">
              23 Items
            </p>
            <p className="text-white border-x-white border-r-[1px] px-[1rem] h-[100%] flex  items-center ">
              GBP 79.89
            </p>
            <Image
              className="ml-4"
              alt="arrow-down"
              src="/Forward Button.png"
              height={28}
              width={28}
            />
          </div>
        </section>
        <section className="w-[90%] mt-9 mx-28 flex gap-40 items-center">
          <Image alt="app-logo" src="/LOGO 1.svg" width={200} height={50} />
          <div className="flex items-center justify-between w-[100%] font-medium text-lg">
            <Link
              className={`${
                path === "/"
                  ? "py-2 px-8 text-white bg-appOrange rounded-3xl"
                  : "py-2 px-8 "
              }`}
              href="/"
            >
              {" "}
              Home{" "}
            </Link>
            <Link
              className={`${
                path === "/browse"
                  ? "py-2 px-8 text-white bg-appOrange rounded-3xl"
                  : "py-2 px-8 "
              }`}
              href="/browse"
            >
              {" "}
              Browse Menu
            </Link>
            <Link
              className={`${
                path === "/offers"
                  ? "py-2 px-8 text-white bg-appOrange rounded-3xl"
                  : "py-2 px-8 "
              }`}
              href="/offers"
            >
              {" "}
              Special offers{" "}
            </Link>
            <Link
              className={`${
                path === "/restaurants"
                  ? "py-2 px-8 text-white bg-appOrange rounded-3xl"
                  : "py-2 px-8 "
              }`}
              href="/restaurants"
            >
              {" "}
              Restaurants
            </Link>
            <Link
              className={`${
                path === "/track"
                  ? "py-2 px-8 text-white bg-appOrange rounded-3xl"
                  : "py-2 px-8 "
              }`}
              href="/track"
            >
              {" "}
              Track order{" "}
            </Link>
            <Link
              className="flex px-8 py-4 text-white bg-[#03081F] rounded-full"
              href="/"
            >
              <Image
                alt="profile"
                src="/Male User.svg"
                width={25}
                height={25}
              />
              <p>Login/signup</p>
            </Link>
          </div>
        </section>
      </nav>
    );
};

export default NavBar;
