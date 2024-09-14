import { Button, Card, CardBody, Input } from "@nextui-org/react"
import Nav from "../../components/Layouts/Navbar"
import { FaCloudUploadAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

const AlbumEditPage = () => {
    return (
        <div className="bg-slate-100 h-screen relative">
            <div className="pb-5"></div>
                <Nav />
            <motion.div transition={{duration: 0.5, delay: 0.1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} className="container mx-auto my-12">
                <Card className="p-5">
                    <CardBody>
                        <p className="font-bold text-center text-xl flex justify-center gap-3">
                            <span className="pt-1"><FaCloudUploadAlt /></span>
                            <span>Edit Album Orang</span>
                        </p>
                         <div className="grid grid-cols-2 mt-12 gap-5">
                            <Input size="sm" label="Nama Album" className="w-full col-span-2" />
                            <Input size="sm" label="Deskripsi Album" className="w-full col-span-2" />
                            <Button as={Link} to="/album" color="danger" className="bg-red-400">Batal</Button>
                            <Button color="primary" className="bg-sky-400">Edit</Button>
                         </div>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    )
}
export default AlbumEditPage