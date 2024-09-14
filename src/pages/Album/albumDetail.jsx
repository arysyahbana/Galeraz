import { Card, CardBody, CardFooter, Image, Pagination } from "@nextui-org/react"
import Nav from "../../components/Layouts/Navbar"
import { Link } from "react-router-dom"
import { FaRegCommentDots } from "react-icons/fa"
import { BiLike } from "react-icons/bi"
import { motion } from "framer-motion";

const AlbumDetailPage = () => {
    const list = [
    {
      title: "Katana Girl",
      img: "/images/1.jpg",
      user: "Joko",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
      comment: "12",
      like: "29"
    },
    {
      title: "Navia",
      img: "/images/2.jpg",
      user: "Budi",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
      comment: "27",
      like: "76"
    },
    {
      title: "Raiden Shogun",
      img: "/images/3.jpg",
      user: "Intan",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
      comment: "4",
      like: "12"
    },
    {
      title: "Rem",
      img: "/images/4.jpg",
      user: "Yuna",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
      comment: "15",
      like: "32"
    },
    {
      title: "Samurai Warrior",
      img: "/images/5.jpg",
      user: "Riki",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
      comment: "23",
      like: "62"
    },
    {
      title: "Sekirou",
      img: "/images/6.jpg",
      user: "Rudi",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
      comment: "12",
      like: "47"
    },
    {
      title: "Strong Woman",
      img: "/images/7.jpg",
      user: "Mia",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
      comment: "34",
      like: "87"
    },
    {
      title: "Metal Girl",
      img: "/images/9.jpeg",
      user: "Rina",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia tempus tempus efficitur montes, mus nisl senectus?",
      comment: "12",
      like: "32"
    },
    ];

    const cardVariants = {
      hidden: { opacity: 0, scale: 0.8, y: 100 },
      visible: { opacity: 1, scale: 1, y: 0 },
    };
    
    return (
        <div className="bg-slate-100 h-full">
            <div className="pb-5"></div>
                <Nav />

            <div className="container mx-auto py-12">
                <div className="text-center mb-12">
                    <p className="text-3xl font-bold mb-0 text-sky-600">Orang</p>
                    <span className="text-default-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aspernatur distinctio, voluptates accusantium sequi reiciendis.</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {list.map((item, index) => (
                      <motion.div key={index} variants={cardVariants} transition={{duration: 1, delay: index * 0.3, type: "spring", stiffness: 100}} whileInView={"visible"} initial="hidden" viewport={{once: false, amount: 0.5}}>
                        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody as={Link} to="/detail" className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                height={250}
                                alt={item.title}
                                className="w-full object-cover h-full"
                                src={item.img}
                                loading="lazy"
                                />
                            </CardBody>
                            <CardFooter className="text-small pt-2 pb-5 px-5 flex-col items-start">
                                <b className="mt-2 text-xl">{item.title}</b>
                                <p className="text-default-500 text-start">{item.desc.substring(0, 50)}...</p>
                                <div className="flex justify-end gap-3 w-full">
                                    <div className="flex gap-1">
                                        <span className="pt-1"><FaRegCommentDots /></span>
                                        <span>{item.comment}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <span className="pt-1"><BiLike /></span>
                                        <span>{item.like}</span>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                      </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 items-center justify-center mt-12">
                    <Pagination total={10} initialPage={1} color="secondary" />
                </div>
            </div>
        </div>
    )
}
export default AlbumDetailPage