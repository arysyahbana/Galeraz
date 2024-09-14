import { Button, Card, CardBody, CardFooter, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, useDisclosure } from "@nextui-org/react"
import Nav from "../../components/Layouts/Navbar"
import { CiTrash } from "react-icons/ci"
import { FaRegEdit } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import React from "react";
import { IoAlertCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const AlbumPage = () => {
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

    return(
        <div className="bg-slate-100 h-screen">
            <div className="pb-5"></div>
                <Nav />

            <div className="container mx-auto py-12">
                <div className="text-center mb-12">
                    <p className="text-3xl font-bold mb-0 text-sky-600">Album</p>
                    <span className="text-default-500">Anda</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <Card as={Link} to={"/album/create"} className="p-5" isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="flex flex-col justify-center items-center text-sky-500 gap-2">
                            <span className="text-5xl"><IoAddCircleOutline /></span>
                            <span className="text-xl">Tambah Album Baru</span>
                        </CardBody>
                    </Card>

                    <motion.div variants={cardVariants} transition={{duration: 1, delay: 0.3, type: "spring", stiffness: 100}} whileInView={"visible"} initial="hidden" viewport={{once: false, amount: 0.5}}>
                        <Card className="" isPressable onPress={() => console.log("item pressed")}>
                            <CardBody as={Link} to={"/album/detail"}>
                                <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="https://nextui.org/images/hero-card-complete.jpeg"
                                width="100%"
                                />
                            </CardBody>
                            <CardFooter className="px-5 flex flex-col items-start">
                                <p className="text-xl font-bold">Orang</p>
                                <p className="text-default-500 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="text-xl w-full flex justify-end items-center mt-5">
                                    <Button as={Link} to={"/album/edit"} isIconOnly color="transparent" className="text-sky-500 text-lg"><FaRegEdit /></Button>
                                    <Button isIconOnly color="transparent" onPress={() => handleOpen("blur")} className="text-red-500 text-lg"><CiTrash /></Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </motion.div>
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
                        <p className="text-2xl font-bold text-center mb-0">Hapus Album</p>
                        <span className="text-default-500 text-center px-10">Apakah anda yakin ingin menghapus album ini?</span>
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
export default AlbumPage