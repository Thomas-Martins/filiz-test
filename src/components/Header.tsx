import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="p-4 lg:p-10">
      <div className="">
        <div className="md:hidden flex justify-between items-center" onClick={toggleMenu}>
          <img src="../icons/logo.svg" alt="logo" />
          <Menu />
        </div>
        <div className="hidden w-full md:flex justify-between items-center">
          <img src="../icons/logo-full.svg" alt="logo" />

          <div className="md:flex gap-5">
            <a href="#about" className="color-black decoration-none">
              Qui sommes nous ?
            </a>
            <a href="#values" className="color-black decoration-none">
              Nos Valeurs
            </a>
            <a href="#contact" className="color-black decoration-none color-primary">
              Reservez !
            </a>
          </div>
        </div>
      </div>
      <div className={`${openMenu ? "flex" : "hidden"} flex-col p-4 space-y-3`}>
        <a href="#about" className="color-black decoration-none">
          Qui sommes nous ?
        </a>
        <a href="#values" className="color-black decoration-none">
          Nos Valeurs
        </a>
        <a href="#contact" className="color-black decoration-none color-primary">
          Reservez !
        </a>
      </div>
    </nav>
  );
}
