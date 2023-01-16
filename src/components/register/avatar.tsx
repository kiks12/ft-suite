
import Image from "next/image";

interface RegisterAvatarPropTypes {
  url: string
}

export default function RegisterAvatar({url}: RegisterAvatarPropTypes) {
  return (
    <div className="w-24 h-24 rounded-full overflow-hidden my-5">
      <Image alt="profile" src={url} width={100} height={100}/>
    </div>
  );
}