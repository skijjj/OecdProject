import useMediaQuery from "../../hooks/useMediaQuery"
import { SelectedPage } from "../../shared/types"
import BigLogo from "../../assets/BigLogo.png";
import slogan from "../../assets/slogan.png";
import quote2 from "../../assets/quote2.png";
import { motion } from "framer-motion";

// import BigLogo from "../../assets/BigLogo.png";
// import BigLogo from "../../assets/BigLogo.png";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ( {setSelectedPage} : Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
    id = "home"
    className="gap-16 py-10 md:h-full md:pb-0"
    >
    <motion.div 
    className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
    onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
        <div className="z-10 mt-32 md:basis-3/5">
            <motion.div 
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once : true, amount: 0.5} }
            transition={{ duration: 1 }}
            variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0},
            }}
            >
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:content-evolvetext">
                        <img alt = "BigLogo" src={BigLogo} />
                    </div>
                </div>

                <p className="mt-8 text-sm text-white">
                Our mission is to foster a vibrant educational atmosphere that embraces all aspects of learning, 
                specially tailored for high school students' needs. 
                The upcoming activities will align with this objective. 
                </p>
            </motion.div>
            <motion.div 
            className="mt-8 flex intems-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once : true, amount: 0.5} }
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0},
            }}
            >
                
            </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center mx-8 md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
            <img alt="quote2" src={quote2}/>
        </div>
    </motion.div>
    {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
                <div className="flex w-3/5 items-center justify-between gap-8 my-200">
                    <img alt="slogan" src={slogan} />
                </div>
            </div>
        </div>
    )}

    </section>
  )
}

export default Home