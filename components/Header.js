// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header
      className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] bg-white/30 backdrop-blur-lg"
      style={{ backdropFilter: 'blur(3px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row justify-between items-center gap-y-6 
      py-8"
        >
          {/* logo */}
          <Link href="/">
            <Image
              src="/logo-swarnim.svg"
              alt="logo"
              width={330}
              height={48}
              priority={true}
            />
          </Link>
          {/* social */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
