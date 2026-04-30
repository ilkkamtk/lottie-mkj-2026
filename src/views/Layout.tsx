import { Link, Outlet } from "react-router";
import Lottie, { LottieRefCurrentProps } from "../components/LottieWrapper";
import hamburgerAnimation from "../assets/hampurilainen.json";
import { useEffect, useRef, useState } from "react";

const Layout = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const hamburgerRef = useRef<LottieRefCurrentProps>(null);

  const toggle = () => {
    setToggleMenu((currentValue) => !currentValue);
  };

  useEffect(() => {
    if (!hamburgerRef.current) return;
    hamburgerRef.current.setSpeed(3);
    if (!toggleMenu) {
      hamburgerRef.current.setDirection(-1);
      hamburgerRef.current.play();
    } else {
      hamburgerRef.current.setDirection(1);
      hamburgerRef.current.play();
    }
  }, [toggleMenu]);

  return (
    <div className="m-auto h-full w-11/12">
      <nav className="absolute right-0 flex flex-col-reverse items-end justify-end lg:relative lg:block lg:flex-row">
        <ul
          className={`
          mr-4
          justify-end
          overflow-hidden
          rounded-lg
          bg-slate-200
          p-0
          shadow-md
          transition-all
          duration-500
          ease-in-out
          lg:flex
          lg:opacity-100
          ${toggleMenu ? "opacity-100" : "opacity-0"}
          `}
        >
          <li>
            <Link className="block p-4 text-center  hover:bg-slate-300" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block p-4 text-center  hover:bg-slate-300"
              to="/example"
            >
              Example
            </Link>
          </li>
        </ul>
        <div className="m-4 h-8 w-8 sm:block lg:hidden">
          <Lottie
            animationData={hamburgerAnimation}
            loop={false}
            onClick={toggle}
            lottieRef={hamburgerRef}
          />
        </div>
      </nav>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
