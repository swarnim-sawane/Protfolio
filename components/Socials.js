//links
import Link from "next/link";

//icons
import { 
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine, 
  RiPinterestLine,
  RiGithubLine,
  RiLinkedinLine 
} from 'react-icons/ri' 



const Socials = () => {
  return( 
    <div className="flex items-center gap-x-5 text-lg">
    <a href={"https://github.com/swarnim-sawane"} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </a>
    <a href={"https://www.linkedin.com/in/swarnim-sawane-346686215/"} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </a>
    <a href={"https://www.instagram.com/swarnim_sawane/"} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </a>
    <a href={"https://www.facebook.com/profile.php?id=100006044745383"} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </a>
    <a href={"https://youtube.com/@melodicious5698"} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine />
    </a>
    {/* <a href={""} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
      <RiPinterestLine />
    </a> */}
  </div>
  );
};

export default Socials;
