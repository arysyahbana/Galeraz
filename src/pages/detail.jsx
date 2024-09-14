import { Card, CardBody, Image, Input } from "@nextui-org/react"
import Nav from "../components/Layouts/Navbar"
import { FaRegCommentDots, FaRegUserCircle } from "react-icons/fa"
import { BiLike, BiSolidPhotoAlbum } from "react-icons/bi"
import { CiTrash } from "react-icons/ci";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingImage from "../assets/loading.gif"
import axios from "axios";

const DetailPage = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const id = window.location.pathname.split("/").pop();

        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        axios
        .get(`https://express-galeraz-backend.vercel.app/api/post/v1/show/${id}`, config)
        .then((response) => {
            if (response.data && typeof response.data.data === 'object') {
                setPost(response.data.data);
                console.log(response.data.data);
            } else {
                console.error("Unexpected data format:", response.data.data);
            }
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setError(error);
            setLoading(false);
        });

    }, [])

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
    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div className="bg-slate-100 h-full pb-20">
            <div className="pb-5"></div>
                <Nav />

            <div className="container mx-auto my-12">
                <motion.div transition={{duration: 0.5, delay: 0.1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.9 }} viewport={{once: true, amount: 0.5}}>
                    <Image src={post.imageUrl} alt="image" width="100%" height={600} className="w-full object-cover h-full"/>
                </motion.div>
                <div className="my-2 flex justify-end gap-3 w-full text-lg px-5 mb-0">
                    <div className="flex gap-1 text-amber-600">
                        <span className="pt-1"><FaRegCommentDots /></span>
                        <span>{post.likeCount}</span>
                    </div>
                    <div className="flex gap-1 text-sky-500">
                        <span className="pt-1"><BiLike /></span>
                        <span>{post.commentCount ?? "0"}</span>
                    </div>
                </div>

                <div className="px-5">
                    <h1 className="text-4xl font-bold text-sky-600">{post.title}</h1>
                    <div className="flex gap-3">
                        <div className="flex gap-1">
                            <div className="pt-1">
                                <FaRegUserCircle />
                            </div>
                            <p className="">{post.user.name}</p>
                        </div>
                        <div className="flex gap-1">
                            <div className="pt-1">
                                <BiSolidPhotoAlbum />
                            </div>
                            <p className="">{post.album ?? "No album"}</p>
                        </div>
                    </div>
                    <p className="mt-2 text-default-500">{post.description}</p>
                </div>

                <div className="w-full px-5 mt-8">
                    <div className="flex gap-1 text-lg text-amber-600">
                        <span className="pt-1"><FaRegCommentDots /></span>
                        <span className="font-bold">Comments</span>
                    </div>
                    <Input type="text" label="Berikan Comment di Postingan ini" className="shadow"/>

                    <motion.div transition={{duration: 0.5, delay: 0.1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} viewport={{once: false, amount: 0.5}}>
                        <Card className="mt-5">
                            <CardBody>
                                <div className="flex justify-between px-5">
                                    <div className="flex flex-col">
                                        <div className="flex gap-1">
                                        <div className="pt-1">
                                            <FaRegUserCircle />
                                        </div>
                                        <p className="">Riki</p>
                                    </div>
                                    <p className="text-default-500 px-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aspernatur distinctio, voluptates accusantium sequi reiciendis.</p>
                                    </div>

                                    <div className="text-xl flex items-center text-red-500">
                                        <CiTrash />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>

                    <motion.div transition={{duration: 0.5, delay: 0.2, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} viewport={{once: false, amount: 0.5}}>
                        <Card className="mt-5">
                            <CardBody>
                                <div className="flex justify-between px-5">
                                    <div className="flex flex-col">
                                        <div className="flex gap-1">
                                        <div className="pt-1">
                                            <FaRegUserCircle />
                                        </div>
                                        <p className="">Riki</p>
                                    </div>
                                    <p className="text-default-500 px-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aspernatur distinctio, voluptates accusantium sequi reiciendis.</p>
                                    </div>

                                    <div className="text-xl flex items-center text-red-500">
                                        <CiTrash />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>

                    <motion.div transition={{duration: 0.5, delay: 0.3, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} viewport={{once: false, amount: 0.5}}>
                        <Card className="mt-5">
                            <CardBody>
                                <div className="flex justify-between px-5">
                                    <div className="flex flex-col">
                                        <div className="flex gap-1">
                                        <div className="pt-1">
                                            <FaRegUserCircle />
                                        </div>
                                        <p className="">Riki</p>
                                    </div>
                                    <p className="text-default-500 px-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aspernatur distinctio, voluptates accusantium sequi reiciendis.</p>
                                    </div>

                                    <div className="text-xl flex items-center text-red-500">
                                        <CiTrash />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default DetailPage