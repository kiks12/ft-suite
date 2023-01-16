
// import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';

interface AvatarMenuButtonPropTypes {
  url?: string;
}

export default function AvatarMenuButton({ url }: AvatarMenuButtonPropTypes) {

  return (
    <div className="flex items-center border py-1 px-2 rounded-full cursor-pointer">
      <RxHamburgerMenu size={19}/>

      <div className="w-8 h-8 bg-pink-700 rounded-full ml-3 overflow-hidden flex items-center justify-center">
        {/* <Image src={url} alt="thumbnail" height={20} width={20}/> */}
      </div>
    </div>
  );
}