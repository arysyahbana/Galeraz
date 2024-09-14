import Nav from "../components/Layouts/Navbar"
import {Card, CardBody, Image, CardFooter, Pagination} from "@nextui-org/react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingImage from "../assets/loading.gif"
import axios from "axios";
import toast from "react-hot-toast";

const HomePage = () => {
  // const list = [
  //   {
  //     title: "Katana Girl",
  //     img: "/images/1.jpg",
  //     user: "Joko",
  //     desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
  //     comment: "12",
  //     like: "29"
  //   },
  //   {
  //     title: "Navia",
  //     img: "/images/2.jpg",
  //     user: "Budi",
  //     desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
  //     comment: "27",
  //     like: "76"
  //   },
  //   {
  //     title: "Raiden Shogun",
  //     img: "/images/3.jpg",
  //     user: "Intan",
  //     desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
  //     comment: "4",
  //     like: "12"
  //   },
  //   {
  //     title: "Rem",
  //     img: "/images/4.jpg",
  //     user: "Yuna",
  //     desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
  //     comment: "15",
  //     like: "32"
  //   },
  //   {
  //     title: "Samurai Warrior",
  //     img: "/images/5.jpg",
  //     user: "Riki",
  //     desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
  //     comment: "23",
  //     like: "62"
  //   },
  //   {
  //     title: "Sekirou",
  //     img: "/images/6.jpg",
  //     user: "Rudi",
  //     desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
  //     comment: "12",
  //     like: "47"
  //   },
  //   {
  //     title: "Strong Woman",
  //     img: "/images/7.jpg",
  //     user: "Mia",
  //     desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
  //     comment: "34",
  //     like: "87"
  //   },
  //   {
  //     title: "Metal Girl",
  //     img: "/images/9.jpeg",
  //     user: "Rina",
  //     desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
  //     comment: "12",
  //     like: "32"
  //   },
  // ];

  useEffect(() => {
    if (sessionStorage.getItem("uploadSuccess") === "true") {
      toast.success("Upload Success");
      sessionStorage.removeItem("uploadSuccess");
    }
  },[])
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  // Mengambil token dari localStorage
  const token = localStorage.getItem('token');

  // Menyiapkan header dengan Authorization
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
      .get("https://express-galeraz-backend.vercel.app/api/post/v1/index", config)
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setPosts(response.data.data);
          console.log(response.data.data);
        } else {
          // setError(new Error("Data is not in array format"));
          console.log(response.data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
    }, []);


    if (loading) {
      return (
        <div className="bg-slate-100 text-gray-700 h-screen pb-20">
            <div className="flex flex-col justify-center items-center h-full">
              <img src={LoadingImage} alt="" className="" />
              {/* <span>Loading ...</span> */}
            </div>
        </div>
      );
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return(
        <div className="bg-slate-100 text-white h-full pb-20">
            <div className="banner">
                <div className="pb-5"></div>
                <Nav />

                <motion.h1 variants={cardVariants} transition={{duration: 1, delay: 0.3, type: "spring", stiffness: 100}} whileInView={"visible"} initial="hidden" viewport={{once: false, amount: 0.5}} className="text-5xl font-bold text-center mt-24 mb-0">Galeraz</motion.h1>
                <motion.p transition={{duration: 1, delay: 0.3, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} viewport={{once: false, amount: 0.5}} className="text-center text-lg">Home</motion.p>
                <form className="max-w-md md:max-w-xl lg:max-w-3xl mx-auto mt-12">   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Cari</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Cari Foto" required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>
            </div>

            <div className="container mx-auto mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {posts.length > 0 ? (
                  posts.map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={cardVariants}
                      transition={{ duration: 1, delay: index * 0.3, type: "spring", stiffness: 100 }}
                      whileInView={"visible"}
                      initial="hidden"
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="w-full">
                        <CardBody as={Link} to={`/detail/${item.id}`} className="overflow-visible p-0">
                          <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            height={250}
                            alt={item.title}
                            className="w-full object-cover h-full"
                            src={item.imageUrl}
                            loading="lazy"
                          />
                        </CardBody>
                        <CardFooter className="text-small pt-2 pb-5 px-5 flex-col items-start">
                          <p className="flex gap-1">
                            <span className="pt-1">
                              <FaRegUserCircle />
                            </span>
                            <span>{item.user.name}</span>
                          </p>
                          <b className="mt-2 text-xl">{item.title}</b>
                          <p className="text-default-500 text-start">{item.description ? item.description.substring(0, 50) : "No description available"}...</p>
                          <div className="flex justify-end gap-3 w-full">
                            <div className="flex gap-1">
                              <span className="pt-1">
                                <FaRegCommentDots />
                              </span>
                              <span>{item.comment ?? "0"}</span>
                            </div>
                            <div className="flex gap-1">
                              <span className="pt-1">
                                <BiLike />
                              </span>
                              <span>{item.likeCount}</span>
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                ) : (
                  <p>No posts found.</p>
                )}
              </div>

              <div className="flex flex-wrap gap-4 items-center justify-center mt-12">
                  <Pagination total={10} initialPage={1} color="secondary" />
              </div>
            </div>
        </div>
    )
}
export default HomePage