import { Button, Card, CardBody, Input, Select, SelectItem } from "@nextui-org/react"
import Nav from "../../components/Layouts/Navbar"
import { FaCloudUploadAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const UploadPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        albumId: '',
    });
    const [image, setImage] = useState(null);
    const [headers, setHeaders] = useState({});

     useEffect(() => {
        // Mengambil token dari localStorage
        const token = localStorage.getItem('token');

        // Menyiapkan header dengan Authorization
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        setHeaders(config);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

     const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('albumId', formData.albumId);
        if (image) {
            formDataToSend.append('image', image);
        }

        try {
            const response = await axios.post('https://express-galeraz-backend.vercel.app/api/post/v1/store', formDataToSend, headers);
            console.log('Success:', response.data);
            sessionStorage.setItem('uploadSuccess', 'true');
            window.location.href = '/';
        } catch (error) {
            console.error('Error:', error);
            // Tangani error
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <div className="bg-slate-100 h-screen">
            <div className="pb-5"></div>
                <Nav />
            <motion.div transition={{duration: 0.5, delay: 0.1, type: "spring", stiffness: 100}} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} className="container mx-auto my-12">
                <Card className="p-5">
                    <CardBody>
                        <p className="font-bold text-center text-xl flex justify-center gap-3">
                            <span className="pt-1"><FaCloudUploadAlt /></span>
                            <span>Posting Foto Baru</span>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 mt-12 gap-5">
                                    <Input size="sm" label="Judul Foto" className="w-full" name="title" value={formData.title} onChange={handleChange}/>
                                    <Select size="sm" 
                                            label="Pilih Album (Tidak Wajib)" 
                                            className="w-full" 
                                            name="albumId"
                                            value={formData.albumId}
                                            onChange={handleChange}
                                        >
                                            <SelectItem>Tes 1</SelectItem>
                                            <SelectItem>Tes 2</SelectItem>
                                            <SelectItem>Tes 3</SelectItem>
                                            <SelectItem>Tes 4</SelectItem>
                                    </Select>
                                    <Input size="sm" label="Deskripsi Foto" className="w-full col-span-2" name="description" value={formData.description} onChange={handleChange}/>
                                    
                                    <div className="flex items-center justify-center w-full col-span-2">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Klik untuk upload</span> atau seret and lepaskan foto</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" name="image" onChange={handleImageChange}/>
                                        </label>
                                    </div> 

                                    <Button type="button" color="danger" className="bg-red-400">Batal</Button>
                                    {isLoading ? 
                                        <Button color="primary" variant="solid" className="w-full shadow-lg bg-sky-400" isLoading>Memposting ...</Button> :
                                        <Button type="submit" color="primary" className="bg-sky-400">Posting</Button>
                                    }
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    )
}
export default UploadPage