import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition:{
      duration:1,
      staggerChildren: 0.1
    }
  },
  scrollButton:{
    opacity: 0,
    y: 0,
    transition:{
      duration:2,
      repeat: Infinity,
      // type:"sween",
    },
  },
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition:{
      repeat:Infinity,
      duration:20,
      repeatType:"mirror"
    }
  }
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">

        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Hi, my name is</motion.h2>
          <motion.h1 variants={textVariants}>Aquib Sayyad</motion.h1>
          <motion.h3 variants={textVariants}>I read, write and execute. Check out my projects below. :)</motion.h3>
          {/* <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the Latest Work</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div> */}
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      {/* <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Writer Content Creator Influencoor 
      </motion.div> */}
        {/* <div className="imageContainer">
            <img src="hero.png" alt="" />
        </div> */}
    </div>
  )
}

export default Hero
