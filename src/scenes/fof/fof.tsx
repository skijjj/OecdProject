import { SelectedPage } from "../../shared/types"
import draw from "../../assets/draw.png";
import { motion } from "framer-motion";
import HText from "../../shared/HText"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const FearOfFailure = ( {setSelectedPage}: Props) => {
  return <section
  id="fearoffailure"
  className="mx-auto min-h-full w-5/6 py-20">
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.FearOfFailure)}
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
        <HText> What causes fear of failure? </HText>
        
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
            <p className="my-5 text-2xl text-white"> PERFECTIONISM
            </p>
            <p className="mb-5 text-white">
            -For a long time, perfectionism has been viewed as a good thing producing great results. However, it is more of a negative trait than a positive one, as it fuels the fear of failure. In most cases, these unreasonable standards we create discourage us from allowing ourselves to try and learn new things.
            </p>
            <p className="my-5 text-2xl text-white"> LOW SELF ESTEEM + COMPARISON 
            </p>
            <p className="mb-5 text-white">
            -With low self-esteem and a negative self-perception, our sense of worth often depends on meeting the expectations of others. Therefore, comparison becomes a daily habit that ensures not failing, or so we think. 
            </p>
            <p className="my-5 text-2xl text-white"> WORRYING ABOUT OTHERS' OPINIONS 
            </p>
            <p className="mb-5 text-white">
            -We all tend to care too much about others' opinions and the impact the mistakes we make are going to have on our image. But the truth is that nobody cares that much to remember the mistakes you make. Everybody has their own life to concentrate on.
            </p>
            <p className="my-5 text-2xl text-white"> NEGATIVE THOUGHTS 
            </p>
            <p className="mb-5 text-white">
            - Unfortunately, without realizing, trying to stop the embarrassment from happening, before even trying or failing, we prepare ourselves for failure through adopting negative self-perceptions. Intrusive thoughts appear in our minds to "assure" us that we are not good enough to succeed.
            </p>
            
          </motion.div>

      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        <img 
          className="mx-auto"
          alt="draw"
          src={draw}
        
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
                How can we cope with the fear of {" "}
                  <span className="text-blueish">failure?</span>
                </HText>
              </motion.div>
            </div>
          </div>

          <motion.div>
            <p className="my-5 text-2xl text-white"> REDEFINE FAILURE 
            </p>
            <p className="mb-5 text-white">
            -First and foremost, it is essential to understand that FAILURE IS NORMAL. It is something we should seek, as we shouldn't consider it a negative experience, but one of the best things that can happen to us. Failing often shows in fact your courage to try new things, to get out of your comfort zone. It means being given the chance to learn new things every other time. Therefore, it is important not to regret the times you fail, but to LEARN FROM THESE EXPERIENCES.
            </p>
            <p className="my-5 text-2xl text-white"> BEGINNER'S MIND
            </p>
            <p className="mb-5 text-white">
            -Having this kind of mentality means allowing yourself to try new things without thinking that you need to excel from the first time. It is okay to try over and over again until you succeed, as long as you grow with every new attempt.
 But remember that we all have our own learning journeys, so it shouldn't be important for you when someone learns something easier or faster. We all excel in different areas, but that shouldn't stop us from aspiring to learn new skills as well.

            </p>
            <p className="my-5 text-2xl text-white"> FUTURE PLANS
            </p>
            <p className="mb-5 text-white">
            -However, when we want to organize our lives and plan ahead, in order not to stumble upon fear of not achieving what we want, it is important to AIM FOR SMALLER TARGETS, that seem easier to attain.  Of course, in the end, every small step that you take will help you achieve the main, bigger goal.
Don't forget to CELEBRATE EVERY ACCOMPLISHMENT, even if it’s small

            </p>
            <p className="my-5 text-2xl text-white"> YOLO (You Only Live Once) MINDSET 
            </p>
            <p className="mb-5 text-white">
            - Sometimes it is beneficial to have this kind of mindset, to stop being afraid of failing or embarrassing yourself. It can be a good starting point to being more FLEXIBLE and relaxed, realizing there is a day after the one in which you fail, and that the world doesn't stop there. 
This being said, LET GO OF CONTROL, and FOCUS ON THE PRESENT MOMENT. Don’t overthink what is going to happen if something doesn’t turn out exactly as you wanted. FIND JOY IN THE JOURNEY! If the path you have chosen is closed, go on the other one. 

            </p>
            <p className="my-5 text-2xl text-white"> DON’T STAY IN YOUR COMFORT ZONE! 
            </p>
            <p className="mb-5 text-white">
            -Instead get out and learn how to shine!    
            </p>
            
          </motion.div>

        </div>
      </div>
    </motion.div>
  </section>
};

export default FearOfFailure