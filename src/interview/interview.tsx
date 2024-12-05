import {  SelectedPage } from "../../shared/types"
import {motion} from "framer-motion"
import HText from "../../shared/HText"


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Interview = ({ setSelectedPage }: Props) => {

  

  return <section
  id="interview"
  className="mx-auto min-h-full w-5/6 py-20 bg-bcg">
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Interview)}
                className="flex flex-col items-center text-center">
                <HText>
                  INTERVIEW WITH MR. {" "}
                  <span className="text-blueish">CONSTANTIN SANDA</span>
                </HText>
      <p className = "py-5 text-white"> Mr. Constantin Sanda is a psychologist based in Sweden, who accepted our invitation to speak about fear of failure in school.  Here are some key points from the interview: 
            </p>
                        <p className = "py-2 text-white"> Fear of failure and the cultural environment are interconnected.  </p>
                        <p className = "py-2 text-white"> Your results are not mirroring your potential!    </p>
                        <p className = "py-2 text-white"> You study to grow as a person, not to increase the annual average.  </p>
                        <p className = "py-2 text-white"> Failure is normal, focus on reflecting on the learning experience!    </p>
                        <p className = "py-2 text-white"> Extracurricular activities are very important for your growth and overall well-being in the educational environment.   </p>
                        <p className = "py-2 text-white"> Connect with yourself and listen to your interests! You should allow yourself to try again.   </p>
                        <p className = "py-2 text-white"> How important do you find each point? Which advice would you start implementing tomorrow?     </p>
                        <p className = "py-2 text-white"> We’re looking forward to your comments!    </p>
              <div className="w-3/6 py-10 mx-auto">
              </div>
                        <p className = "py-2 text-white"> When talking about extracurricular activities, it's important to discern between engaging in healthy competition and genuinely enjoying what you're doing.   </p>
                        <p className = "py-2 text-white"> If you feel the need for a break to think about your future, grant yourself that space!     </p>
                        <p className = "py-2 text-white"> Take time to delve deeper into your experiences and question your motivations.   </p>
                        <p className = "py-2 text-white"> View failure as constructive feedback that offers an opportunity for improvement.   </p>
                        <p className = "py-2 text-white"> Be aware of what you’re saying to yourself and treat yourself as you would treat your best friend!    </p>
                        <p className = "py-2 text-xl text-white"> We hope you enjoyed the interview and that you found some useful ideas! What other interviews would you like us to conduct about the field of education?   </p>
                        <div className="flex justify-end p-12">
          </div>
    </motion.div>
  </section>
}

export default Interview