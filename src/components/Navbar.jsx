import Link from "next/link";
import { CiGrid31 } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { GiDrill } from "react-icons/gi";
import { TfiGallery } from "react-icons/tfi";

const Navbar = () => {
  const navbarLinks = [
    {
      icon: <CiGrid31 />,
      text: "Card generator",
      path: "/card-generator",
    },
    {
      icon: <IoPeople />,
      text: "Digital Clock",
      path: "/digital-clock",
    },
    {
      icon: <GiDrill />,
      text: "Drilling Info",
      path: "/drilling-info",
    },
    {
      icon: <TfiGallery />,
      text: "Galeria de Cartas",
      path: "/galeria-cartas",
    },
  ];
  return (
    <nav className="flex flex-col h-screen gap-9 justify-center p-5 bg-slate-950 items-center fixed">
      <Link href={"/"}>
        <h1 className=" text-3xl text-white">Last Test</h1>
      </Link>
      <ul className="flex flex-col gap-6">
        {navbarLinks.map((link, i) => {
          return (
            <div key={i} className="flex items-center">
              <p className="text-white">{link.icon}</p>
              <Link
                href={link.path}
                className="px-2 py-1 rounded-lg text-white hover:bg-[#1BFFFD] hover:text-black"
              >
                {link.text}
              </Link>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
