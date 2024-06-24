import HText from "../../shared/HText";
import { motion } from "framer-motion";
import act1 from "../../assets/act1.png";
import act2 from "../../assets/act2.png";
import act3 from "../../assets/act3.png";
import act4 from "../../assets/act4.png";
import sboard from "../../assets/sboard.png";
import { useEffect } from "react";

    const NewPage = () => {

        useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return <section id="newpage" className="w-full py-40 bg-bcg">
        <motion.div
        className="mx-auto w-5/6"
        whileInView="visible"
        viewport={{ once : true, amount: 0.5} }
        transition={{ duration: 1 }}
        variants={{
            hidden: { opacity: 0, x:-50},
            visible: { opacity: 1, x: 0},}}
        >
            <div className =" md:w-3/5 text-white">
                <HText>
                  DAY 1 -{" "}
                  <span className="text-blueish">OPEN TALK</span>
                </HText>
            </div>
            <p className = "py-5 text-white">This activity was about sharing personal stories about our own failures and how we overcame them, 
                with the organizers starting first to encourage the audience. </p>
            <p className = "py-5 text-white"> We discussed overcoming art blocks, writer’s block, fears in sports, academic anxieties, and fears of change. This day brought us closer together, helping us make new friends and reminding us not to judge others because we don't know what they are going through. We also learned the importance of perseverance, keeping a positive outlook, 
                and working towards our goals because we can overcome any obstacle—we are our only limit. </p>
            <img 
            alt="about-page-graphic"
            src={act1}
            
            />
            <div className =" md:w-3/5 text-white pt-10">
                <HText>
                  DAY 2 -{" "}
                  <span className="text-blueish">LETTERS TO MYSELF</span>
                </HText>
            </div>
            <p className = "py-5 text-white">This activity involved receiving letters from 12th graders, who shared their struggles and difficulties
                 from when they were in 9th grade and how they overcame them. We read these letters to our freshman and sophomore year students to show them
                  that their challenges are not unique and that others have successfully navigated similar issues.  </p>
            <p className = "py-5 text-white">We then discussed coping mechanisms, particularly journaling, and how writing can help them express their
                 feelings and anxiety. After the discussion, we encouraged the students to write their own letters to their future selves. In these letters,
                  they could vent about their current obstacles, describe their feelings, outline their future plans, and reflect on their fear of failure.  </p>
                  <p className = "py-5 text-white"> It was gratifying to see that most of the students found this activity relaxing. The more extroverted ones even shared some of their struggles with us, 
                    which we deeply appreciated. </p>
            <img 
            alt="about-page-graphic"
            src={act2}
            />

            <div className =" md:w-3/5 text-white pt-10">
                <HText>
                  DAY 3 -{" "}
                  <span className="text-blueish">FIXED VS GROWTH MINDSET</span>
                </HText>
            </div>
            <p className = "py-5 text-white"> We designed this workshop to help students understand and master resilience techniques, 
                especially in the face of failure. By learning these skills, they can tackle problems and setbacks without becoming discouraged. </p>
            <p className = "py-5 text-white"> To start off, we presented scenarios involving characters who were uninterested in self-improvement, 
                too fearful to confront their challenges, or blamed others for their mistakes. The students then brainstormed healthier 
                ways to handle these situations.They discussed what the characters should do and how they themselves would react in similar 
                circumstances.   </p>
            <p className = "py-5 text-white"> Next, we explained that this exercise was about comparing 
            a fixed mindset with a growth mindset and introduced the key terms for our discussion.  </p>
            <p className = "py-5 text-white">To reinforce their understanding, we concluded with an activity where students matched
                    negative statements with positive, growth-oriented alternatives, emphasizing the importance of persistence in achieving desired results. </p>
            <img 
            alt="about-page-graphic"
            src={act3}
            />

            
            <div className =" md:w-3/5 text-white pt-10">
                            <HText>
                            DAY 4 -{" "}
                            <span className="text-blueish">LEARN SOMETHING NEW</span>
                            </HText>
                        </div>
                        <p className = "py-5 text-white"> Through this activity, our aim was to encourage students to step out of their comfort zones and embrace a beginner's mindset. We aimed to help them adapt to various contexts of life and embrace change. The session began with an introduction to the concepts of a YOLO (You Only Live Once) mindset and a beginner's mind, explaining how they can foster growth and adaptability. 
            After that, we invited students to engage in making origami flapping birds. The focus was not on the final product, but on the learning process. We emphasized the importance of paying attention to each step, being present in the moment and enjoying the process of creation. The activity was designed to illustrate that learning is a journey, in which challenges are opportunities for growth and mistakes are part of the process. After the origami session, students moved on to creating animations using everyday objects around them, allowing them to explore their imagination.  
            Ultimately, we engaged the students in a reflective discussion. We asked them to share what they found most intriguing and whether they would like to delve deeper into any aspect of the session. We also encouraged them to think about how they could apply the lessons learned from these activities to their everyday lives. 
            </p>
                        <p className = "py-5 text-white"> We received excellent feedback from our audience, including comments about the activity and what they’ve learned, such as:</p>
                        <p className = "py-5 text-white"> “It was something unexpected. I felt like I went back in time.”   </p>
                        <p className = "py-5 text-white"> “Multiple learning methods were combined, and concrete examples were put into practice.”  </p>
                        <p className = "py-5 text-white"> “I really liked that there were interactive activities, not just a presentation.”  </p>
                        <p className = "py-5 text-white"> “It doesn't matter if you make mistakes; what matters is that you keep trying!”  </p>
                        <p className = "py-5 text-white"> “Don't be afraid to try something new!”   </p>
                        <img 
                        alt="about-page-graphic"
                        src={act4}
                        />


        <div className =" md:w-3/5 text-white pt-10">
            <HText>
            DAY 5 -{" "}
            <span className="text-blueish">FAIL FORWARD BOX</span>
            </HText>
        </div>
        <p className = "py-5 text-white">Fail Forward Board reunites motivational quotes, lessons learned or meaningful thoughts on failure from 
            students who attended to our activities. This initiative provides an opportunity to share experiences and insights, 
            contributing to the creation of a learning environment and mutual support within the academic community.  </p>
            <p className = "py-5 text-white">At first glance, you might wonder, why celebrate failure? Shouldn't we focus on success instead? But that's the whole point of making this board: 
                it's not about glorifying failure; it's about recognising its role in our growth and learning process. </p>
            <p className = "py-5 text-white"> Every quote pinned to the board tells a story of resilience and perseverance. It's a reminder that failure is not the end of the road, but a stepping stone to progress.
                    Here are some messages from the students:   </p>
            <p className = "py-5 text-white"> "No matter the obstacles, I can succeed. Everything will be fine in time. I must not give up."   </p>
            <p className = "py-5 text-white"> "You can fall many times, but you can rise even more times."   </p>
            <p className = "py-5 text-white"> "As long as life moves forward, so do I."  </p>
            <p className = "py-5 text-white"> "Never say never to something new."   </p>
            <img 
            alt="about-page-graphic"
            src={sboard}
            />

        </motion.div>

</section>
    };

    export default NewPage;