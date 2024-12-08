import { LuUser2 } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";
async function UserIcon() {
  const user = await currentUser();  //from clerk
  const profileImage = user?.imageUrl; //user could be null i.e public user so use ? to avoid error
  if (profileImage)
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />; //if there is PI return image otherwise icon
}
export default UserIcon;
