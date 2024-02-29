import Link from "next/link";

const Navbar = () => {
  const navbarLinks = [
    {
      text: "Ejercicio 1",
      path: "/ejercicio-1",
    },
    {
      text: "Ejercicio 2",
      path: "/ejercicio-2",
    },
    {
      text: "Ejercicio 3",
      path: "/ejercicio-3",
    },
    {
      text: "Ejercicio 4",
      path: "/ejercicio-4",
    },
    {
      text: "Ejercicio 5",
      path: "/ejercicio-5",
    },
    {
      text: "Ejercicio 6",
      path: "/ejercicio-6",
    },
    {
      text: "Ejercicio 7",
      path: "/ejercicio-7",
    },
    {
      text: "Ejercicio 8",
      path: "/ejercicio-8",
    },
    {
      text: "Ejercicio 9",
      path: "/ejercicio-9",
    },
    {
      text: "Ejercicio 10",
      path: "/ejercicio-10",
    },
  ];
  return (
    <nav className="flex justify-around p-5 bg-slate-950 items-center">
      <Link href={"/"}>
        <h1 className="text-3xl text-white">Las Test</h1>
      </Link>
      <ul className="flex gap-6">
        {navbarLinks.map((link, i) => {
          return (
            <Link
              key={i}
              href={link.path}
              className="bg-[#3945a0] px-2 py-1 rounded-lg text-white hover:bg-[#1BFFFD] hover:text-black"
            >
              {link.text}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
