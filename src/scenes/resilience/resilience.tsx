import { SelectedPage } from "../../shared/types"
import resilience from "../../assets/resilience.png";
import { motion } from "framer-motion";
import HText from "../../shared/HText"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Resilience = ({setSelectedPage}: Props) => {
  return <section
  id="resilience"
  className="mx-auto min-h-full w-5/6 py-20">
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Resilience)}
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
        <HText>
                  <span className="text-blueish">RESILIENCE</span>: BOUNCING BACK FROM SETBACKS 
                </HText>
        
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
            <p className="mb-5 text-white">
            Have you ever felt the weight of fear bearing down on you as you face a daunting exam or assignment? You're not alone. Fear of failure is a common struggle among students, but the good news is that resilience can help us overcome it.
            </p>
            <p className="mb-5 text-white">
            It's natural to feel apprehensive about failing, especially in a school environment where success is often equated with grades and achievements. Academic pressure, societal expectations and the fear of disappointing others can all contribute to this fear. However, it's essential to recognise that failure is not the end, but rather an opportunity for growth and learning.
            </p>
            <p className="mb-5 text-white">
            Resilience is the ability to bounce back from setbacks, adapt to change, and persevere in the face of adversity. It's what enables us to pick ourselves up after a fall and keep moving forward. With resilience, we have the power to transform obstacles into opportunities and setbacks into pathways to success. 
            </p>
            <p className="mb-5 text-white">
            There is emotional resilience, which involves accessing optimism during challenging times. Physical resilience refers to the body capacity to adapt to difficulties and recover. Community resilience denotes the collective ability of groups of people to respond to and bounce back from adverse situations, like natural disasters. 
            </p>
            <p className="mb-5 text-2xl text-white">
            Resilience is not a permanent state. While you might feel capable of handling one challenge, another might feel overwhelming. Remember the factors that build resilience and try to apply them when dealing with adversity!
            </p>
            <p className="mb-5 text-2xl text-white">
            What's one <span className="text-blueish"> small step</span> you can take today to build resilience and overcome the fear of failure in your academic journey? 
            </p>
            
          </motion.div>

      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        <img 
          className="mx-auto"
          alt="resilience"
          src={resilience}
        
        />
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
                    <HText>
                Here are 
                  <span className="text-blueish"> 10 steps</span> that can help you build resilience over time:
                </HText>
              </motion.div>
            </div>
          </div>

          <motion.div>
            <p className="my-5  text-white">1.	Foster social connections: nurture relationships with friends, family, colleagues or anyone who brings positivity into your life. 
            </p>
            <p className="mb-5 text-white">
            2.	Maintain a daily routine: schedule regular meals and exercise, for example.
            </p>
            <p className="my-5  text-white"> 3.	Take breaks from stress: give yourself permission to step away from stressful situations and recharge by engaging in hobbies or simply taking short walks during breaks. 
            </p>
            <p className="mb-5 text-white">
            4.	Teach self-care: prioritise your physical, mental and emotional well-being; get enough sleep, eat nutritious meals, practice mindfulness. 
            </p>
            <p className="my-5 text-white"> 5.	Set realistic goals: break larger goals into smaller, manageable tasks. 
            </p>
            <p className="mb-5 text-white"> 6.	Encourage self-discovery: explore your interests, values, strengths and weaknesses by trying something new or journaling about your thoughts.
            </p>
            <p className="my-5  text-white"> 7.	Accept change as part of life: reframe challenges as opportunities for learning and growth.
            </p>
            <p className="mb-5 text-white">8.	Develop self-awareness, which involves recognising and understanding your thoughts, feelings and behaviours: reflect on them and seek feedback from others.

            </p>
            <p className="my-5  text-white"> 9.	Learn coping skills: seek support from family and friends, engage in diverse activities  
            </p>
            <p className="mb-5 text-white">10.	Increase optimism by maintaining a positive outlook and mindset. Express gratitude for the things in your life and surround yourself with positive influences! 
            </p>
            
          </motion.div>

        </div>
      </div>
    </motion.div>
  </section>
};

export default Resilience