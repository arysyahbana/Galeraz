import TL from "../../../assets/TL.png"
import TR from "../../../assets/TR.svg"
import TR1 from "../../../assets/TR-1.svg"
import TR3 from "../../../assets/TR-3.svg"
import BL1 from "../../../assets/BL-1.svg"
import BL2 from "../../../assets/BL-2.svg"
import BR from "../../../assets/BR.svg"
import { motion } from "framer-motion";

const BackgroundImages = () => {
    return (
        <>
            <motion.img transition={{duration: 0.5, delay: 0.1, type: "spring", stiffness: 100}} animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} src={TL} alt="" className="absolute top-0 left-0"/>
            <motion.img transition={{duration: 0.5, delay: 0.3, type: "spring", stiffness: 260, damping: 20}} animate={{ opacity: 1, scale: 1, rotate: 0 }} initial={{ opacity: 0, scale: 0, rotate: 180 }} src={TR} alt="" className="absolute top-0 right-0" />
            <motion.img transition={{duration: 0.5, delay: 0.5, type: "spring", stiffness: 160}} animate={{ opacity: 1, rotate: 0 }} initial={{ opacity: 0, rotate: -45 }} src={TR1} alt="" className="absolute top-0 right-60" />
            <motion.img transition={{duration: 0.5, delay: 0.5, type: "spring", stiffness: 260}} animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} src={TR3} alt="" className="absolute top-72 right-0" />
            <motion.img transition={{duration: 0.5, delay: 0.7, type: "spring", stiffness: 50}} animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} src={BL1} alt="" className="absolute bottom-0 left-0" />
            <motion.img transition={{duration: 0.5, delay: 0.8, type: "spring", stiffness: 50}} animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} src={BL2} alt="" className="absolute bottom-0 left-60" />
            <motion.img transition={{duration: 0.5, delay: 0.9, type: "spring", stiffness: 60}} animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} src={BR} alt="" className="absolute bottom-0 right-0" />
        </>
    )
}
export default BackgroundImages