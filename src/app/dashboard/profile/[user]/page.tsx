import Image from "next/image";
import { user_data } from "@/data/userData";
import TopBar from "@/components/common/TopBar";
export default function UserProfilePage() {
  const getImageSrc = () => {
    return user_data?.image
      ? user_data.image
      : "https://media.istockphoto.com/id/885240276/vector/male-avatar-profile-picture-silhouette-light-shadow.jpg?s=170667a&w=0&k=20&c=Ly-lffKHosx3R8yi5CnCGx1tkJs8u63Kgnih6jTr7GU=";
  };
  return (
    <div className="container max-w-[1240px] w-11/12 mx-auto my-4">
      <div className="flex flex-col gap-10">
        <TopBar title="Profile" />
        <div className="">
          <Image src={getImageSrc()} alt="avatar" width={200} height={200} />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
