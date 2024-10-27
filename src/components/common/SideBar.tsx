import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/icon_light.svg";
import { usePathname } from "next/navigation";
import { MdOutlineGroups3 } from "react-icons/md";
import { MdGroups3 } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoChatbubblesSharp } from "react-icons/io5";
import { HiSwitchHorizontal } from "react-icons/hi";
import { RiLogoutBoxRLine } from "react-icons/ri";

const SideBar = () => {
  const pathname = usePathname();
  const nav_link = [
    {
      id: "workspace",
      title: "Workspace",
      href: "/dashboard/workspaces/design-hub",
      icon: <MdOutlineGroups3 />,
      selected_icon: <MdGroups3 />,
    },
    {
      id: "chatroom",
      title: "Chatroom",
      href: `/dashboard/workspaces/design-hub/chatroom`,
      icon: <IoChatbubblesOutline />,
      selected_icon: <IoChatbubblesSharp />,
    },
  ];
  return (
    <nav className="w-[250px] h-full min-h-screen bg-blue-dark text-white py-4 md:w-[60px] lg:w-[250px]">
      <div className="flex flex-col justify-between h-full min-h-[calc(100vh-2rem)]">
        <div className="flex flex-col gap-8">
          <Link href="/" className="h-8 flex items-center gap-2 px-4">
            <Image
              src={Logo}
              alt="Logo"
              width={60}
              height={60}
              className="w-8 h-8"
            ></Image>
            <h3 className="text-2xl md:hidden lg:block">EFFINITI</h3>
          </Link>
          <ul className="flex flex-col md:text-lg">
            {nav_link.map(({ id, title, href, icon, selected_icon }) => {
              return (
                <li
                  key={id}
                  className={`px-4 py-2.5 ${
                    pathname === href && "bg-white text-blue-dark font-bold"
                  }`}
                >
                  <Link href={href} className={`flex gap-2 items-center`}>
                    <div className="text-lg md:text-2xl lg:text-lg">
                      {pathname === href ? selected_icon : icon}
                    </div>
                    <div className="md:hidden lg:block">{title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col md:text-lg">
          {pathname.includes("workspaces") && (
            <button className="flex items-center px-4 py-2.5 gap-2">
              <div className="text-lg md:text-2xl lg:text-lg">
                <HiSwitchHorizontal />
              </div>
              <div className="md:hidden lg:block">Switch Workspace</div>
            </button>
          )}
          <button className="flex items-center px-4 py-2.5 gap-2">
            <div className="text-lg md:text-2xl lg:text-lg">
              <RiLogoutBoxRLine />
            </div>
            <div className="md:hidden lg:block">Logout</div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
