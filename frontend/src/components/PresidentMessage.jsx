import President from "../assets/President.jpg";
import "../App.css";
import { motion } from "framer-motion";

const PresidentMessage = ()=>{
    return (
        <div className="president">
         <motion.div className="p-photo" initial={{opacity:0,x:-80}} whileInView={{opacity:1,x:0}} transition={{duration:0.8,ease:"easeOut"}} viewport={{once:true}}>
          <img src={President} alt="President Image" className="p-img"/>
         </motion.div>
         <motion.div className="p-content" initial={{opacity:0,x:80}} whileInView={{opacity:1,x:0}} transition={{duration:0.8,ease:"easeOut",delay:0.2}} viewport={{once:true}}>
          <h3 className="p-name">Prashant Shukla</h3>
          <p className="p-role">Founder & President, NayePankh Foundation <span className="p-since">Leading since 2021</span></p>
          <p className="p-quote">"If we all do something, then together there is no problem that we cannot solve!"</p>
         </motion.div>
         </div>
    )
}

export default PresidentMessage