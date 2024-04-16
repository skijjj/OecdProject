import { PaperAirplaneIcon, ClipboardDocumentIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { AboutType, SelectedPage } from "../../shared/types"
import {motion} from "framer-motion"
import HText from "../../shared/HText"
import Aboutt from "./Aboutt"
import tgth from "../../assets/tgth.png";

const about: Array<AboutType> = [
  {
    icon: <AcademicCapIcon className="h-6 w-6 text-white" />,
    title: "Formal Education",
    description:"Formal education refers to structured learning programs typically conducted in traditional classrooms or educational institutions, following established curriculum guidelines. This type of education is characterized by organized instruction, standardized assessment, and the attainment of recognized qualifications or credentials upon completion of a designated course of study. "
  },
  {
    icon: <ClipboardDocumentIcon className="h-6 w-6 text-white" />,
    title: "Informal Education",
    description:"Informal education refers to the natural, unstructured ways in which individuals learn outside of formal systems. It is characterized by its lack of predefined objectives, yet it profoundly shapes the individual through life experiences and interactions.Significant informal influences include those from mass media, familial contexts (such as parental examples and attitudes), peer groups, colleagues, as well as various cultural (e.g., museums, theaters, libraries), religious, political, and other institutions. "
  },
  {
    icon: <PaperAirplaneIcon className="h-6 w-6 text-white" />,
    title: "Non-formal Education",
    description:"Non-formal education refers to extracurricular activities or activities beyond the traditional curriculum that enhance personal and social development, improving a range of skills and competencies (such as creativity, teamwork, flexibility). They often foster a sense of community and provide you with lifelong lessons. For instance: volunteering, sport clubs, arts clubs, internships etc. "
  },

];

const container ={
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ( { setSelectedPage }: Props) => {
  return <section
  id="about"
  className="mx-auto min-h-full w-5/6 py-20">
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.About)}
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
        <HText> FAIL, LEARN, GROW! </HText>
        <p className="my-7 text-sm ">
        Education comes in different shapes and sizes, offering something 
        for everyone. From traditional classrooms to online learning, let's take
         a quick look at the various types of education and what
         they offer to students.
        </p>
      </motion.div>
      <div 
      className="mt-5 items-center justify-between gap-8 md:flex">
         {about.map((about: AboutType) => (
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
        <img 
          className="mx-auto"
          alt="about-page-graphic"
          src={tgth}
        
        />
        <div>
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-moisil text-white">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once : true, amount: 0.5} }
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x:50},
                    visible: { opacity: 1, x: 0},
                }}>
                <HText>
                  FEAR OF FAILURE, EFFECTS AND{" "}
                  <span className="text-blueish">SOLUTIONS</span>
                </HText>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once : true, amount: 0.5} }
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
                hidden: { opacity: 0, x: 50},
                visible: { opacity: 1, x: 0},
            }}>
            <p className="my-5 text-white">
            WHAT IS IT?
            Fear of failure is something we all experience at one point or another. 
            It means being afraid not to succeed in the areas you want, 
            whether it is in an educational or social way, in the sports world or so on.

            </p>
            <p className="mb-5 text-white">
            NEGATIVE EFFECTS
            </p>
            <p className="mb-5 text-white">
              - losing opportunities because you're too afraid to even try
            </p>
            <p className="mb-5 text-white">
            - low self-esteem, as you think you don’t have the skills to do something special
            </p>
            <p className="mb-5 text-white">
            - overall poor well-being and a bad impact on mental health
            </p>
            <p className="mb-5 text-white">           
            - stagnation as you don’t allow yourself to grow through challenges
            </p>
          </motion.div>

        </div>
      </div>
    </motion.div>
  </section>
}

export default About