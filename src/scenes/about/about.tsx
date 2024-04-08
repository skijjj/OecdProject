import { PaperAirplaneIcon, ClipboardDocumentIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { AboutType, SelectedPage } from "../../shared/types"
import {motion} from "framer-motion"
import HText from "../../shared/HText"
import Aboutt from "./Aboutt"

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
      <div className="md:my-5 md:w-3/5 text-white">
        <HText> FAIL, LEARN, GROW! </HText>
        <p className="my-7 text-sm ">
        Education comes in different shapes and sizes, offering something 
        for everyone. From traditional classrooms to online learning, let's take
         a quick look at the various types of education and what
         they offer to students.
        </p>
      </div>
      <div className="mt-5 items-center justify-between gap-8 md:flex">
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
    </motion.div>
  </section>
}

export default About