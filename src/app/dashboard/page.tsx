import Link from "next/link";
import Image from "next/image";
import TopBar from "@/components/common/TopBar";
import AddButton from "@/components/common/AddButton";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { workspaces_data } from "@/data/workspacesData";
import { user_data_list } from "@/data/userData";

export default function DashboardPage() {
  return (
    <div className="container max-w-[1240px] w-11/12 mx-auto my-4">
      <div className="flex flex-col gap-10">
        <TopBar title="Dashboard" />

        <div className="flex flex-col gap-8 md:grid md:grid-cols-[4fr_1fr]">
          {/* Users mobile */}
          <div className="flex items-center md:hidden">
            {user_data_list.map(({ _id, name, image }) => {
              return (
                <Link
                  href={`/dashboard/profile/${_id}`}
                  key={_id}
                  className="flex flex-col items-center mx-[-3px] group group-hover:mx-1"
                >
                  <Image
                    src={image}
                    alt="avatar"
                    width={60}
                    height={60}
                    className="w-8 h-8 rounded-full drop-shadow-lg"
                  ></Image>
                  <p className="hidden group-hover:block text-xs">{name}</p>
                </Link>
              );
            })}
          </div>

          {/* Workspaces */}
          <div className="flex flex-col gap-4">
            <AddButton title="Add Workspace" type="workspace" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {workspaces_data.map(({ _id, title, owner, count, href }) => {
                return (
                  <Link
                    href={`/dashboard/workspaces/${href}`}
                    key={_id}
                    className="bg-white drop-shadow-lg rounded-lg p-2 md:p-4 flex flex-col gap-2"
                  >
                    <div className="md:text-lg font-medium">{title}</div>
                    <div className="grid grid-cols-[2fr_1fr] gap-0.5 md:gap-2 text-xs text-blue-light">
                      <div className="flex items-center gap-1">
                        <div className="text-lg">
                          <MdOutlineAdminPanelSettings />
                        </div>
                        <p>{owner}</p>
                      </div>
                      <div className="flex items-center gap-0.5 md:gap-1">
                        <div className="text-lg">
                          <MdOutlineSupervisorAccount />
                        </div>
                        <p>{count}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Users desktop */}
          <div className="hidden md:flex md:flex-col md:gap-4">
            {user_data_list.map(({ _id, name, image }) => {
              return (
                <Link
                  href={`/dashboard/profile/${_id}`}
                  key={_id}
                  className="bg-blue-dark text-white rounded-lg px-4 py-2 text-sm lg:text-base group hover:flex hover:items-center hover:justify-between hover:bg-blue-light hover:py-4"
                >
                  <div>{name}</div>
                  <Image
                    src={image}
                    alt="avatar"
                    width={60}
                    height={60}
                    className="hidden group-hover:block w-8 h-8 rounded-full drop-shadow-lg"
                  ></Image>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
