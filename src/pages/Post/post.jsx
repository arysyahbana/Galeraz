import { Button, Card, CardBody, CardFooter, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, useDisclosure } from "@nextui-org/react"
import Nav from "../../components/Layouts/Navbar"
import { Link } from "react-router-dom"
import { IoAlertCircleOutline } from "react-icons/io5"
import { FaRegCommentDots, FaRegEdit, FaRegUserCircle } from "react-icons/fa"
import { CiMail, CiTrash } from "react-icons/ci";
import { TbMapPin } from "react-icons/tb";
import { BiLike } from "react-icons/bi"
import React from "react"
import { motion } from "framer-motion";

const PostPage = () => {
    const list = [
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
    ];

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')
    const handleOpen = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
    }

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 100 },
        visible: { opacity: 1, scale: 1, y: 0 },
    };

    return (
        <div className="bg-slate-100 h-screen">
            <div className="pb-5"></div>
                <Nav />

            <div className="container mx-auto py-12">
                <div className="flex justify-center">
                    <p className="text-6xl text-sky-700"><FaRegUserCircle /></p>
                </div>
                <p className="text-3xl font-bold text-slate-600 text-center mt-2">Ary Syahbana</p>
                <div className="flex gap-5 justify-center mt-3">
                    <p className="text-default-500 text-center">@ arysyahbana_</p>
                    <p className="text-default-500 text-center flex gap-1"><span className="pt-1"><CiMail /></span><span>arysyahbana@gmail.com</span></p>
                    <p className="text-default-500 text-center flex gap-1"><span className="pt-1"><TbMapPin /></span><span>Padang</span></p>
                </div>
                <p className="text-3xl mt-12 text-slate-600 text-center">Postingan Foto Anda</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
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
                                    />
                                </CardBody>
                                <CardFooter className="text-small pt-2 px-5 flex-col items-start">
                                    <b className="mt-2 text-xl">{item.title}</b>
                                    <p className="text-default-500 text-start">{item.desc.substring(0, 50)}...</p>
                                    <div className="flex justify-between w-full">
                                        <div className="">
                                            <Button as={Link} to={"/post/edit"} isIconOnly color="transparent" className="text-sky-500 text-lg"><FaRegEdit /></Button>
                                            <Button isIconOnly color="transparent" onPress={() => handleOpen("blur")} className="text-red-500 text-lg"><CiTrash /></Button>
                                        </div>

                                        <div className="flex gap-3 pt-2">
                                            <div className="flex gap-1">
                                                <span className="pt-1"><FaRegCommentDots /></span>
                                                <span>{item.comment}</span>
                                            </div>
                                            <div className="flex gap-1">
                                                <span className="pt-1"><BiLike /></span>
                                                <span>{item.like}</span>
                                            </div>
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

            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1 text-rose-500">Alert</ModalHeader>
                    <ModalBody>
                        <div className="mx-auto text-7xl text-rose-500 font-bold"><IoAlertCircleOutline /></div>
                        <p className="text-2xl font-bold text-center mb-0">Hapus Foto</p>
                        <span className="text-default-500 text-center px-10">Apakah anda yakin ingin menghapus foto ini?</span>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="default" variant="light" onPress={onClose}>
                        Close
                        </Button>
                        <Button color="danger" onPress={onClose}>
                        Hapus
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>
    )
}
export default PostPage