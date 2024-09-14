import { Button, Card, CardBody, Input, Select, SelectItem } from "@nextui-org/react"
import Nav from "../../components/Layouts/Navbar"
import { FaCloudUploadAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

const EditPostPage = () => {
    return (
        <div className="bg-slate-100 h-screen">
            <div className="pb-5"></div>
                <Nav />
            <motion.div transition={{duration: 0.5, delay: 0.1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} className="container mx-auto my-12">
                <Card className="p-5">
                    <CardBody>
                        <p className="font-bold text-center text-xl flex justify-center gap-3">
                            <span className="pt-1"><FaCloudUploadAlt /></span>
                            <span>Edit Postingan Foto</span>
                        </p>
                         <div className="grid grid-cols-2 mt-12 gap-5">
                            <Input size="sm" label="Judul Foto" className="w-full" />
                            <Select size="sm" 
                                    label="Pilih Album (Tidak Wajib)" 
                                    className="w-full" 
                                >
                                    <SelectItem>Tes 1</SelectItem>
                                    <SelectItem>Tes 2</SelectItem>
                                    <SelectItem>Tes 3</SelectItem>
                                    <SelectItem>Tes 4</SelectItem>
                            </Select>
                            <Input size="sm" label="Deskripsi Foto" className="w-full col-span-2" />
                            
                            <div className="flex items-center justify-center w-full col-span-2">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <img src="/images/1.jpg" alt="Preview" className="h-48 w-60 object-cover py-2" />
                                        {/* <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg> */}
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Klik untuk upload</span> atau seret and lepaskan foto</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div> 

                            <Button as={Link} to={"/post"} color="danger" className="bg-red-400">Batal</Button>
                            <Button color="primary" className="bg-sky-400">Edit</Button>
                         </div>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    )
}
export default EditPostPage