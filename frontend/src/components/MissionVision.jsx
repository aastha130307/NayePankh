import { motion } from "framer-motion";
import "../App.css";

import hunger from "../assets/hunger.jpg";
import education from "../assets/education.jpg";
import empowerment from "../assets/empowerment.avif";
import health from "../assets/health.jpg";
import child from "../assets/child.webp";
import environment from "../assets/environment.jpg"

const missions = [
  {
    img: hunger,
    title: "Tackling Hunger",
    desc: "Combating poverty by fighting hunger and ensuring no one goes to bed with an empty stomach."
  },
  {
    img: education,
    title: "Driving Education",
    desc: "Providing educational support to underprivileged children facing financial or infrastructure barriers."
  },
  {
    img: empowerment,
    title: "Empowering Individuals",
    desc: "Fostering empathy and kindness to help marginalized communities overcome poverty."
  },
  {
    img: health,
    title: "Health & Sanitation",
    desc: "Promoting hygiene, supplying sanitary products, and running health awareness campaigns."
  },
  {
  img: environment, 
  title: "Environmental Protection",
  desc: "Promoting sustainability through tree plantation, clean energy awareness, and reducing waste in communities."
},
{
  img: child, 
  title: "Child Welfare & Protection",
  desc: "Ensuring safety, education, and emotional well-being of underprivileged and vulnerable children."
}
];

const MissionVision = () => {
    return (
      <div className="mv-section">
        <motion.div className="mv-mission" initial={{opacity:0,x:-80}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}}viewport={{once:true}}>
           <h2>Our Mission</h2>
           <div className="mv-grid">
             {missions.map((item,index)=>(
             <motion.div className="mv-card" key={index} whileHover={{scale:1.05}} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}>
                <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              </motion.div>
              ))}
              </div>
            </motion.div>

              <motion.div className="mv-vision" viewport={{once:true}} initial={{opacity:0,x:80}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}}>
                <h2>Our Vision</h2>
                <p>
          We envision a world where every child has access to education,
          no one sleeps hungry, and every individual lives with dignity
          and opportunity.
        </p>

        <p>
          NayePankh Foundation aims to build a society driven by
          compassion, equality, and empowerment.
        </p>
              </motion.div>
      </div>    
    )
}

export default MissionVision