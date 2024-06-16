import { SelectedPage, AboutType } from "../../shared/types"
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon} from "@heroicons/react/24/solid"
import growth from "../../assets/growth.png";
import { motion } from "framer-motion";
import HText from "../../shared/HText"
import Aboutt from "../about/Aboutt"

const growthandfixed: Array<AboutType> = [
    {
      icon: <ArrowTrendingUpIcon className="h-6 w-6 text-white" />,
      title: "Growth Mindset",
      description:"These people realize they are on a continuous learning journey throughout their life, in which it is normal to make a lot of mistakes. Their success comes from overcoming challenges. They understand the importance of getting out of their comfort zone with the risk of failing at first, but the reward of learning and becoming a better version of themselves. They can actively listen about their negative parts and what they do wrong and want to improve their behavior. ",
    },
    {
      icon: <ArrowTrendingDownIcon className="h-6 w-6 text-white" />,
      title: "Fixed Mindset",
      description:"These people believe they are supposed to know how to do something perfectly from their first attempt. They do not allow themselves to make mistakes. Their success comes from validation, and it is more important than anything. They will never choose development, as that involves challenges and the possibility of failing at first. Therefore, they prefer being stuck at the same level, hoping this way their confidence won’t drop. ",
    },
  
  ];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const GrowthAndFixed = ( {setSelectedPage}: Props) => {
  return  <section
  id="growthandfixed"
  className="mx-auto min-h-full w-5/6 py-20">
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.GrowthAndFixed)}
    >
      <motion.div 
        className="md:my-5 md:w-3/5 text-white"
        initial="hidden"
            whileInView="visible"
            viewport={{ once : true, amount: 0.5} }
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0},
            }}>
        <HText> GROWTH VS FIXED MINDSET </HText>
        
      </motion.div>
      <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once : true, amount: 0.5} }
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
                hidden: { opacity: 0, x: -50},
                visible: { opacity: 1, x: 0},
            }}>
            <p className="my-5 text-white text-2xl"> Why can other people do things better than I can? 
            </p>
            <p className="mb-5 text-white">
            Some might say that it is simply because of our nature. Some of us are gifted or smarter. Everything is related to genes. The truth though is that our ability to do different things is strongly influenced by the environment we grew up in, what we learned along the way and the endeavors we make to develop new skills.
            </p>
            <p className="mb-5 text-white">
            Because of these 2 opposite concepts, people have split into 2 groups: those who, for example, think they can’t change their IQ (they are called fixed mindset people), and those who believe nurture can change everything (these people have a growth mindset).
            </p>
            
          </motion.div>
          <img 
          className="mx-auto"
          alt="draw"
          src={growth}
        
        />
        <div 
      className="mt-5 items-center justify-between gap-8 md:flex">
         {growthandfixed.map((about: AboutType) => (
            <Aboutt
              key={about.title}
              title={about.title}
              description={about.description}
              icon={about.icon}
              setSelectedPage={setSelectedPage}
            />
          ))}
      </div>

      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        <div>
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] text-white">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once : true, amount: 0.5} }
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x:50},
                    visible: { opacity: 1, x: 0},
                }}>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  </section>
};

export default GrowthAndFixed;