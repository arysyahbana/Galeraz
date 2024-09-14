import { Card, CardBody } from "@nextui-org/react"
import FormLogin from "../Fragments/Auth/FormLogin"
import FormRegister from "../Fragments/Auth/FormRegister"
import BackgroundImages from "../Elements/Background";
import { motion } from "framer-motion"


const AuthLayout = (props) => {
    const {type} = props;
    return(
        <div className="bg-slate-50 h-screen flex items-center justify-center relative overflow-hidden">
            <BackgroundImages />
            <Navigation type={type} />
        </div>
    )
}

const Navigation = ({type}) => {
    if (type === "login") {
        return (
            <motion.div transition={{duration: 1, delay: 0.3, type: "spring", stiffness: 100}} animate={{ opacity: 1 }} initial={{ opacity: 0 }} viewport={{once: false, amount: 0.5}} className="container mx-auto px-52">
                <Card>
                    <CardBody>
                        <div className="flex justify-between">
                            <div className="hidden xl:block">
                                <img src="/images/login.svg" alt="" />
                            </div>
                            <div className="w-full xl:w-1/2 px-5 pb-10 xl:pb-0">
                                <h1 className="text-2xl font-bold text-center mt-24">👋 Selamat Datang di Galeraz</h1>
                                <p className="mb-12 text-center">Silahkan login untuk mengakses Galeraz</p>
                                <FormLogin />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
        )
    } else if (type === "register") {
        return (
             <motion.div transition={{duration: 1, delay: 0.3, type: "spring", stiffness: 100}} animate={{ opacity: 1 }} initial={{ opacity: 0 }} viewport={{once: false, amount: 0.5}} className="container mx-auto px-52">
                <Card>
                    <CardBody>
                        <div className="flex justify-between">
                            <div className="w-full xl:w-1/2 px-5 pb-10 xl:pb-0">
                                <h1 className="text-2xl font-bold text-center mt-16">✍️ Daftar dan Buat Akun Baru</h1>
                                <p className="mb-12 text-center">Silahkan registrasi akun barumu</p>
                                <FormRegister />
                            </div>
                            <div className="hidden xl:block">
                                <img src="/images/register.svg" alt=""/>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
        )
    } else {
        return null
    }
}
export default AuthLayout