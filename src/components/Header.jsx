import { useEffect } from "react";
import LogoImage from "../assets/images/logo.png";

export default function Header() {
  useEffect(() => {
    changeAppbarBackgroundOnScroll();
  }, []);

  const changeAppbarBackgroundOnScroll = () => {
    const appbar = document.querySelector(".appbar");
    const classesToAdd = ["bg-dark-900/20", "backdrop-blur-sm"];
    const height = appbar.offsetHeight;
    document.addEventListener("scroll", (e) => {
      if (window.scrollY > height) {
        appbar.classList.add(...classesToAdd);
      } else {
        appbar.classList.remove(...classesToAdd);
      }
    });
  };

  return (
    <header className="w-full fixed flex justify-center items-center font-satoshi z-10 appbar transition-all">
      <div className="max-w-[80%] flex w-full justify-center items-center py-8">
        <div className="w-1/3 flex-1">
          <a href="/" className="flex w-8 h-8">
            <img src={LogoImage} alt="Logo" className="w-8 h-8" />
          </a>
        </div>
        <div className="w-2/3 flex-1">
          <nav>
            <ul className="flex justify-end md:text-xl lg:text-2xl gap-x-3 md:gap-x-12">
              <li className="">
                <a
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li className="">
                <a
                  href="/skills"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li className="">
                <a
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
