import { Button } from "@nextui-org/react"
import InputForm from "../../Elements/Input"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../../services/auth.service";
import toast from "react-hot-toast";

const FormRegister = () => {
    const fullnameRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name : '',
        username  : '',
        email     : '',
        address    : '',
        password  : '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.username || !formData.email || !formData.address || !formData.password) {
            toast.error("Semua field harus diisi!");
            return;
        }

        console.log(formData);
        setIsLoading(true);

        const dataToSubmit = { ...formData, role: 'user' };
        register(dataToSubmit, (success, data) => {
            setIsLoading(false);
            if (success) {
                setTimeout(() => {
                    sessionStorage.setItem("registerSuccess", "true")
                    window.location.href = '/login';
                }, 2000);
            } else {
                toast.error("Registration failed!");
                console.error("Registration failed", data);
            }
        });
    }

    useEffect(() => {
        fullnameRef.current.focus()
    }, [])
    return (
        <form onSubmit={handleSubmit}>
            <InputForm label="Nama Lengkap" name="name" type="text" placeholder="Masukkan Nama Lengkap" ref={fullnameRef} onChange={handleChange} value={formData.name} required/>
            <div className="grid grid-cols-2 gap-2">
                <InputForm label="Username" name="username" type="text" placeholder="Masukkan Username" onChange={handleChange} value={formData.username} required/>
                <InputForm label="Email" name="email" type="email" placeholder="Masukkan Email" onChange={handleChange} value={formData.email} required/>
            </div>
            <InputForm label="Alamat" name="address" type="text" placeholder="Masukkan Alamat" onChange={handleChange} value={formData.address} required/>
            <InputForm label="Password" name="password" type="password" placeholder="Masukkan Password" onChange={handleChange} value={formData.password} required/>
            {isLoading ? 
                <Button color="primary" variant="solid" className="w-full shadow-lg bg-sky-400 font-bold" isLoading >Registering ...</Button>:
                <Button type="submit" color="primary" variant="solid" className="w-full shadow-lg bg-sky-400 font-bold">Register</Button>
            }
            <p className="text-slate-500 hover:text-slate-700 ms-2 text-center pt-2">Sudah Punya Akun? <Link to="/login" className="text-sky-400">Login</Link></p>
        </form>
    )
}
export default FormRegister