"use client";
import { DefaultLayoutProps } from "@/app/layout";
import { useState } from "react";
import Image from "next/image";
import SideBar from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { user_data } from "@/data/userData";
type DefaultProps = DefaultLayoutProps & {
  title: string;
};

const DefaultLayout = ({ children, title }: DefaultProps) => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <>
      <header
        className={`fixed top-0 ${
          navToggle ? "left-0" : "-left-full"
        } z-[100] transition-all md:left-0`}
      >
        <SideBar />
      </header>
      <div className="md:col-start-2 container max-w-[1240px] w-11/12 mx-auto my-4">
        <div className="flex flex-col gap-10">
          <header className="bg-white h-[45px] leading-[45px] drop-shadow-lg md:h-[60px] md:leading-[60px]">
            <div className="w-11/12 h-full mx-auto flex justify-between items-center">
              <h4 className="text-lg md:text-2xl">{title}</h4>
              <div className="flex items-center gap-4">
                <div
                  // href={`/dashboard/profile/${user_data._id}`}
                  className="md:flex md:flex-col md:gap-1 md:items-center"
                >
                  <Image
                    src={
                      user_data.image
                        ? user_data.image
                        : "https://media.istockphoto.com/id/885240276/vector/male-avatar-profile-picture-silhouette-light-shadow.jpg?s=170667a&w=0&k=20&c=Ly-lffKHosx3R8yi5CnCGx1tkJs8u63Kgnih6jTr7GU="
                    }
                    alt="avatar"
                    width={60}
                    height={60}
                    className="w-8 h-8 rounded-full drop-shadow-lg"
                  ></Image>
                  <p className="hidden md:block md:text-xs text-black-80">
                    {user_data.name}
                  </p>
                </div>
                <button
                  onClick={() => setNavToggle(!navToggle)}
                  className="text-xl text-blue-light hover:text-black md:hidden"
                >
                  <GiHamburgerMenu />
                </button>
              </div>
            </div>
          </header>
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
