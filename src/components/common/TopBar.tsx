"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { user_data } from "@/data/userData";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { RiDashboardHorizontalFill } from "react-icons/ri";
type TopBarProps = {
  title: string;
};
const TopBar = ({ title }: TopBarProps) => {
  const pathname = usePathname();
  return (
    <header className="bg-white h-[45px] leading-[45px] drop-shadow-lg md:h-[60px] md:leading-[60px]">
      <div className="w-11/12 h-full mx-auto flex justify-between items-center">
        <h4 className="text-lg md:text-2xl">{title}</h4>
        <div className="flex items-center gap-4">
          <Link
            href={`/dashboard/profile/${user_data._id}`}
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
          </Link>
          <Link
            href="/dashboard"
            className="text-blue-dark text-lg md:text-3xl"
            title={pathname === "/dashboard" ? "Dashboard" : "Go to Dashboard"}
          >
            {pathname === "/dashboard" ? (
              <RiDashboardHorizontalFill />
            ) : (
              <RiDashboardHorizontalLine />
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
