
import { motion } from "framer-motion";


const childVariant ={
  hidden: {opacity: 0, scale: 0.9},
  visible: { opacity: 1, scale: 1}
}
type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
}


const Aboutt = ({ icon,title,description } : Props) => {
  return (
    <motion.div 
    variants={childVariant}
    className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-red p-4">
                {icon}
            </div>
        </div>
        <h4 className="font-bald text-white">{title}</h4>
        <p className="my-3 text-white">{description}</p>
        {/* <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.MessageUs)}
                href={`#${SelectedPage.MessageUs}`}
        >
          <p>Find out more about us</p>
        </AnchorLink> */}
    </motion.div>
  )
}

export default Aboutt