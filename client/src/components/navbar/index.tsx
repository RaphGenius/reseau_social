import Logo from "../../assets/Bird-Logo.svg";

import { Link } from "react-router-dom";
import { NavBarButtonTypes } from "../../shared/types";
import { AiOutlineHome, AiFillSetting } from "react-icons/ai";
import { BsPeopleFill, BsFillDoorOpenFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
type Props = {
  isConnected: boolean;
};

const buttonNavBar: NavBarButtonTypes[] = [
  {
    name: "Accueil",
    logo: <AiOutlineHome />,
    link: "/",
  },
  {
    name: "Communauté",
    logo: <BsPeopleFill />,
    link: "/community",
  },
  {
    name: "Mon profil",
    logo: <CgProfile />,
    link: "/myProfil",
  },
  {
    name: "Parametres",
    logo: <AiFillSetting />,
    link: "/settings",
  },
];

const profilTest = ["pseudo"];

const Navbar = ({ isConnected }: Props) => {
  return (
    <nav
      className="w-[30%] lg:w-[20%] h-screen border-r-2
     border-dark-1 dark:border-white max-w-[250px] "
    >
      <div className=" flex flex-col justify-between h-full p-4">
        {/* Logo and buttons */}
        <div className="">
          {/* LOGO OF BRAND*/}
          <div className="h-[200px]  mb-6">
            <Link to="/">
              <img
                className="w-full h-full hue-animation "
                src={Logo}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="pt-4 border-t-2 border-black dark:border-white  ">
            {isConnected ? (
              <>
                <div className=" flex  flex-col gap-4   text-lg ">
                  {buttonNavBar.map((btn: NavBarButtonTypes) => (
                    <Link key={btn.name} className=" " to={btn.link}>
                      <div className="flex items-center hover:scale-105 transition  text-primary-700 will-change-transform ">
                        <div className=" text-xl mr-2 shadow-lg  border-b-2 border-primary-100 p-2 rounded-full dark:text-white  ">
                          {btn.logo}
                        </div>
                        <p className="font-playfair text-primary-500 first-letter:font-bold dark:text-white  ">
                          {btn.name}{" "}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-8 text-center w-full">
                  <button className="border-primary-700 dark:bg-white border px-6 py-2 rounded-lg hover:bg-primary-300 shadow-lg ">
                    Creer un post!
                  </button>
                </div>
              </>
            ) : (
              <div>
                <p>Soyez connecté pour pouvoir intéragir avec la communauté!</p>
                <div className="flex flex-col mt-4 gap-4">
                  <button className="px-6 py-3.5 text-primary-700  font-semibold bg-indigo-50 rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200">
                    Se connecter
                  </button>
                  <button className="px-6 py-3.5 text-primary-700  font-semibold bg-indigo-50 rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200">
                    S'inscrire
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {isConnected && (
          <div className=" text-2xl w-16 h-16  mr-2 shadow-lg  border-b-2 border-primary-100 p-4 rounded-full cursor-pointer hover:scale-105 transition will-change-transform dark:text-white ">
            <BsFillDoorOpenFill className="h-full w-full" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
