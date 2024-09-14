import logo from "../../assets/Logo.svg"
import { IoHome } from "react-icons/io5";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
// import { Button } from "@nextui-org/react";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { getId } from "../../services/auth.service";
import { useLogout } from "../../hooks/useLogout";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Nav = () => {
  const [userId, setUserId] = useState(null);
  const logout = useLogout();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  // toast login
   useEffect(() => {
    if (sessionStorage.getItem("loginSuccess") === "true") {
          toast.success("Login Success");
          sessionStorage.removeItem("loginSuccess");
          }
    }, [])

    // User Id
    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token)
        if (token) {
            const id = getId(token);
            setUserId(id);
        }
    }, []);

    // Logout
    const handleLogout = async () => {
        try {
            await logout();
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
            toast.success("Logout success");
        } catch (error) {
            toast.error("Logout failed");
        }
    };

    const getNavLinkClass = (path) => {
      return location.pathname === path ? "text-sky-400" : "text-white hover:text-sky-400";
    };

  return (
    <div className="bg-gradient-to-r from-slate-500 to-gray-600 mx-32 text-sm rounded-xl shadow-lg">
      <div className="flex justify-between p-3">
        <img src={logo} alt="" className="h-10"/>

        <div className="hidden lg:flex gap-5 items-center">
          <Link to="/" className={getNavLinkClass("/")}>
            <div className="flex gap-1">
              <div className="text-lg">
                <IoHome />
              </div>
              <p className="font-bold">Home</p>
            </div>
          </Link>
          <Link to="/upload" className={getNavLinkClass("/upload")}>
            <div className="flex gap-1">
              <div className="text-lg">
                <MdOutlineAddToPhotos />
              </div>
              <p className="font-bold">Upload</p>
            </div>
          </Link>
          <Link to="/album" className={getNavLinkClass("/album")}>
            <div className="flex gap-1">
              <div className="text-lg">
                <BiSolidPhotoAlbum />
              </div>
              <p className="font-bold">Album</p>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex gap-2 items-center pe-5">
          {userId ? 
            <>
              <Button as={Link} to={"/post"} color="transparent" className="flex gap-1 text-white">
                <span className="text-lg"><FaRegUserCircle /></span>
                <span>{userId ? userId.substring(0, 5) : ""}...</span>
              </Button>
              <Button isIconOnly color="transparent" onClick={handleLogout} className="text-white text-lg"><IoIosLogOut /></Button>
            </>:
            <Button as={Link} to="/login" color="primary" className="bg-sky-400 font-bold"><IoIosLogIn />Login</Button>
          }
            {/* <Button color="success" variant="solid" className="font-bold text-white">Register</Button> */}
        </div>

        <div className="flex items-center text-white lg:hidden">
            <Button isIconOnly color="transparent" onPress={handleOpen} className="text-white text-lg"><GiHamburgerMenu /></Button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-600 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <div className="flex justify-between">
            <img src={logo} alt="" className="h-10"/>
            <Button isIconOnly color="transparent" onPress={handleOpen} className="text-white text-lg"><RxCross2 /></Button>
          </div>
          <ul className="text-white p-5 text-center">
            <li className="mb-3">
              <Link to="/" className={getNavLinkClass("/")}>
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/upload" className={getNavLinkClass("/upload")}>
                Upload
              </Link>
            </li>
            <li className="">
              <Link to="/album" className={getNavLinkClass("/album")}>
                Album
              </Link>
            </li>
          </ul>

          {userId ? 
              <>
                <div className="flex justify-around">
                  <Button as={Link} to={"/post"} color="transparent" className="flex gap-1 text-white">
                    <span className="text-lg"><FaRegUserCircle /></span>
                    <span>{userId ? userId.substring(0, 5) : ""}...</span>
                  </Button>
                  <Button isIconOnly color="transparent" onClick={handleLogout} className="text-white text-lg"><IoIosLogOut /></Button>
                </div>
              </>:
              <div className="text-center">
                <Button as={Link} to="/login" color="primary" className="bg-sky-400 font-bold"><IoIosLogIn />Login</Button>
              </div>
            }
        </div>
      </div>
    </div>
  )
}
export default Nav
