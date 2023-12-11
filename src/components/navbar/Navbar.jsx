import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        {/* <motion.span 
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        >Aquib Dev</motion.span> */}
        <div className="social">
          <a href="https://www.crio.do/learn/portfolio/aquibsayyed22/"><img src="crio_crop_logo_green.png" alt="" /></a>
          <a href="https://github.com/aquibsayyed42"><img src="github-mark-white.png" alt="" /></a>
          {/* <a href="https://github.com/aquibdev"><img src="youtube.png" alt="" /></a>
          <a href="https://github.com/aquibdev"><img src="dribbble.png" alt="" /></a> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar