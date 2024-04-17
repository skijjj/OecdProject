import { SelectedPage, ClassType} from "../../shared/types"
import activity1 from "../../assets/activity1.png";
import activity2 from "../../assets/activity2.png";
import activity3 from "../../assets/activity3.png";
import activity4 from "../../assets/activity4.png";
import activity5 from "../../assets/activity5.png";
import activity6 from "../../assets/activity6.png";
import HText from "../../shared/HText"
import { motion } from "framer-motion";
import Class from "./Class";

const ffw: Array<ClassType> = [
    {
        name: "Open Talk",
        description: "The purpose of this event was to identify and address issues related to students' fear of failure, to encourage public speaking, and to promote an environment where they can learn from each other based on personal experiences. The program includes various activities, starting with presenting famous examples of failures or mistakes, continuing with sharing personal stories, and ending with discussions about resilience techniques and healthy approaches to managing and overcoming obstacles.",
        image: activity1,

    },
    {
        name: "Letters to Myself",
        description: "We wanted students to realize that they are not alone in facing their challenges. They understood that the seemingly enormous obstacles they faced were not as difficult to overcome and that ultimately, these would have disappeared without considerable efforts on their part. ",
        image: activity2,

    },
    {
        name: "Fixed vs Growth Mindset",
        description: "Providing participants with the opportunity to learn how to approach various challenges and failures in a constructive and efficient manner. Activities included presenting scenarios for improvement and resolution, as well as informing about the concepts of growth mindset and fixed mindset. At the end of the session, a debate and a question-and-answer session had been organized to ensure a deep understanding of the subject. It is important to remember that success is achieved when you push your fears and limits.",
        image: activity3,

    },
    {
        name: "Try Something New",
        description: "We aimed to encourage students to push beyond the boundaries of their comfort zones, to discover new areas of interest, to approach change with courage and confidence, to develop their ability to adapt to a variety of contexts, and to adopt a receptive and open mindset, akin to that of a beginner.",
        image: activity4,

    },
    {
        name: "Fail Forward Box",
        description: "The objectives of this initiative were diverse and included encouraging students to actively share their stories (even anonymously) and demonstrating that everyone faces fears and failures. Participants were invited to write texts about failures, lessons learned, and motivational quotes. This initiative provides an opportunity to share experiences and insights, contributing to the creation of a learning environment and mutual support within the academic community.",
        image: activity5,

    },
    {
        name: "Co-Agency",
        image: activity6,

    },


]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const FailForwardWeek = ( {setSelectedPage}: Props) => {
    return <section id="failforwardweek" className="w-full bg-bcg2 py-40">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.FailForwardWeek)}
        >
            <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once : true, amount: 0.5} }
            transition={{ duration: 1 }}
            variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0},}}
            >
                <div className =" md:w-3/5 text-white">
                    <HText>Fail Forward Week</HText>
                </div>
                <p className = "py-5 text-white">By planning and implementing a series of 5 activities over the course of one week, we aimed at addressing this issue through relevant activities and information from reliable sources. 
We noticed a lack of structured communication regarding anxiety in school counseling, so we organized a week of activities to address this gap. 
Through events like workshops and open discussions, 
we aim to promote students' personal growth, confidence, and stress management skills.</p>

            </motion.div>

            {/*slide thing*/}
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {ffw.map((item: ClassType, index) => (
                        <Class 
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                />
                    ))}

                </ul>
            </div>

        </motion.div>
  
    </section>
  }
export default FailForwardWeek