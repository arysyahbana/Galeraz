import InputForm from "../../Elements/Input"
import { useEffect, useRef, useState } from "react"
import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../../../services/auth.service";
const FormLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef(null);

    useEffect(() =>
        emailRef.current.focus()
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        login(data, (status, res) => {
            setIsLoading(false);
            if (status) {
                localStorage.setItem("token", res.data.data.token)
                sessionStorage.setItem("loginSuccess", "true")
                window.location.href = "/"
            } else {
                toast.error(res.message)
            }
        })
    }

    useEffect(() => {
        if (sessionStorage.getItem("registerSuccess")) {
            toast.success("Registration Success");
            sessionStorage.removeItem("registerSuccess")
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <InputForm label="Email" name="email" type="email" placeholder="Masukkan Email" ref={emailRef}/>
            <InputForm label="Password" name="password" type="password" placeholder="Masukkan Password" />
            {isLoading ? 
                <Button color="primary" variant="solid" className="w-full shadow-lg bg-sky-400 font-bold mt-5" isLoading>Loging in ...</Button> :
                <Button type="submit" color="primary" variant="solid" className="w-full shadow-lg bg-sky-400 font-bold mt-5">Login</Button>
            }
            <p className="text-slate-500 hover:text-slate-700 ms-2 text-center pt-2">Belum Punya Akun? <Link to="/register" className="text-sky-400">Registrasi</Link></p>
            {/* <Button type="submit" className="bg-sky-500 text-white rounded-xl hover:bg-sky-600 w-full py-2 shadow">Login</Button> */}
        </form>
    )
}
export default FormLogin