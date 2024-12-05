import {  SelectedPage } from "../../shared/types"
import {motion} from "framer-motion"
import HText from "../../shared/HText"
import comm1 from "../../assets/comm1.png";
import comm2 from "../../assets/comm2.png";
import comm3 from "../../assets/comm3.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Communication = ({ setSelectedPage }: Props)  => {
    return <section
    id="communication"
    className="mx-auto min-h-full w-full py-40 bg-bcg2">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Communication)}
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
                <HText>
                <span className="text-blueish">AGRESSIVE COMMUNICATION </span>
                  AMONGST STUDENTS{" "}
                </HText>
                </div>
            <p className="mb-5 text-white mt-10">
            The event was conducted to raise awareness about how fear of failure and various emotions experienced by students influence verbal violence behaviours.
             Students participated in interactive activities and discussions about aggression, bullying, cyberbullying and the role of education in promoting respect and tolerance within the school environment.
            </p>

            </motion.div>

        <div className="mt-10 items-center md:flex gap-10 mx-40">
            <img 
            alt="comm1"
            src={comm1}
            />
            <img 
            alt="comm1"
            src={comm2}
            />
            
            
      </div>

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
            <p className="mb-5 text-white mt-10">
            Our speakers were Mrs. Daniela Vișoianu, a prominent figure in the Romanian educational field,
             and Mr. Adrian Sandu, who develops various programs focused on effective communication, personal leadership and individual values.
            </p>
        </motion.div>


      <div className="mt-2 items-center justify-between gap-10 md:mt-28 md:flex mx-20">
        <img 
          alt="comm3"
          src={comm3}
        />
        <div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once : true, amount: 0.5} }
          transition={{ duration: 1 }}
          variants={{
              hidden: { opacity: 0, x:-50},
              visible: { opacity: 1, x: 0},}}
              >
          <p className="mb-5 text-white">
            The discussions aimed to help students understand the roots of aggressive behaviour and the importance of creating a supportive and respectful school atmosphere. 
            Afterwards, according to participants' feedbacks, they appreciated the relaxed atmosphere, the engaging speakers and the sense of wellbeing they left with, 
            all shaped by the information they gained for their growth as well-rounded individuals
            </p>
          </motion.div>
          <AnchorLink
      className="rounded-b-lg bg-primary-100 px-10 py-2 hover:bg-secondary-500 hover:text-white"
      onClick={()=> setSelectedPage(SelectedPage.FailForwardWeek)}
      href={`#${SelectedPage.FailForwardWeek}`}
    >
        Press here to see other events
    </AnchorLink>

        </div>
      </div>
        </motion.div>
        

    </section>
}

export default Communication