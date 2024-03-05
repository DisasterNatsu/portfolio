import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinBoxLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"#"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://www.instagram.com/shilajit.dutta.37/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/shilajit.dutta.37/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/shilajit-dutta-2214072a2/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link
        href={"https://github.com/DisasterNatsu/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
