// import { useRef } from "react";
// import "./services.scss";
// import { motion, useInView } from "framer-motion";

// // const variants = {
// //   initial: {
// //     x: -500,
// //     y: 100,
// //     opacity: 0,
// //   },

// //   animate: {
// //     x: 0,
// //     y: 0,
// //     opacity: 1,
// //     transition: {
// //       duration: 1,
// //       staggerChildren: 0.1,
// //     },
// //   },
// // };

// // const Services = () => {
// //   const ref = useRef();

// //   const isInView = useInView(ref, { margin: "-100px" });

// //   return (
// //     <motion.div
// //       className="services"
// //       variants={variants}
// //       initial="initial"
// //       //   whileInView="animate"
// //       ref={ref}
// //       animate={isInView && "animate"}
// //     >
// //       <motion.div className="textContainer" variants={variants}>
// //         <motion.p>
// //           {" "}
// //           I focus on helping your brand grow <br /> and move forwards
// //         </motion.p>
// //         <hr />
// //       </motion.div>
// //       <motion.div className="titleContainer" variants={variants}>
// //         <div className="title">
// //           <img src="people.webp" alt="" />
// //           <h1>
// //             {" "}
// //             <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
// //           </h1>
// //         </div>
// //         <div className="title">
// //           <h1>
// //             {" "}
// //             <motion.b whileHover={{color:"orange"}}>For Your </motion.b> Business
// //           </h1>
// //           <button> What We Do?</button>
// //         </div>
// //       </motion.div>
// //       <motion.div className="listContainer" variants={variants}>
// //         <motion.div
// //           className="box"
// //           whileHover={{ background: "lightgray", color: "black" }}
// //         >
// //           <h2>Branding</h2>
// //           <p>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
// //             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
// //             aliquip ex ea commodo consequat.
// //           </p>
// //           <button>Go</button>
// //         </motion.div>
// //         <motion.div
// //           className="box"
// //           whileHover={{ background: "lightgray", color: "black" }}
// //         >
// //           <h2>Branding</h2>
// //           <p>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
// //             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
// //             aliquip ex ea commodo consequat.
// //           </p>
// //           <button>Go</button>
// //         </motion.div>
// //         <motion.div
// //           className="box"
// //           whileHover={{ background: "lightgray", color: "black" }}
// //         >
// //           <h2>Branding</h2>
// //           <p>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
// //             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
// //             aliquip ex ea commodo consequat.
// //           </p>
// //           <button>Go</button>
// //         </motion.div>
// //         <motion.div
// //           className="box"
// //           whileHover={{ background: "lightgray", color: "black" }}
// //         >
// //           <h2>Branding</h2>
// //           <p>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
// //             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
// //             aliquip ex ea commodo consequat.
// //           </p>
// //           <button>Go</button>
// //         </motion.div>
// //       </motion.div>
// //     </motion.div>
// //   );
// // };



// const textVariants = {
//   initial: {
//     opacity: 0,
//     x: -500,
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition:{
//       duration:1,
//       staggerChildren: 0.1
//     }
//   },
//   scrollButton:{
//     opacity: 0,
//     y: 0,
//     transition:{
//       duration:2,
//       repeat: Infinity,
//       // type:"sween",
//     },
//   },
// }

// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: "-220%",
//     transition:{
//       repeat:Infinity,
//       duration:20,
//       repeatType:"mirror"
//     }
//   }
// }

// const Services = () => {
//   return (
//     <div className='services'>
//       <div className="wrapper">

//         <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
//           <motion.h2 variants={textVariants}>AQUIB SAYYAD</motion.h2>
//           <motion.h1 variants={textVariants}>Web Developer and Ui designer</motion.h1>
//           <motion.div variants={textVariants} className="buttons">
//             <motion.button variants={textVariants}>See the Latest Work</motion.button>
//             <motion.button variants={textVariants}>Contact Me</motion.button>
//           </motion.div>
//           <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
//         </motion.div>
//       </div>
//       {/* <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
//         Writer Content Creator Influencoor 
//       </motion.div> */}
//         {/* <div className="imageContainer">
//             <img src="hero.png" alt="" />
//         </div> */}
//     </div>
//   )
//       }

// export default Services;



import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },

//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const Services = () => {
//   const ref = useRef();

//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <motion.div
//       className="services"
//       variants={variants}
//       initial="initial"
//       //   whileInView="animate"
//       ref={ref}
//       animate={isInView && "animate"}
//     >
//       <motion.div className="textContainer" variants={variants}>
//         <motion.p>
//           {" "}
//           I focus on helping your brand grow <br /> and move forwards
//         </motion.p>
//         <hr />
//       </motion.div>
//       <motion.div className="titleContainer" variants={variants}>
//         <div className="title">
//           <img src="people.webp" alt="" />
//           <h1>
//             {" "}
//             <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
//           </h1>
//         </div>
//         <div className="title">
//           <h1>
//             {" "}
//             <motion.b whileHover={{color:"orange"}}>For Your </motion.b> Business
//           </h1>
//           <button> What We Do?</button>
//         </div>
//       </motion.div>
//       <motion.div className="listContainer" variants={variants}>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </p>
//           <button>Go</button>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };



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

const Services = () => {
  return (
    <div className='services'>
      <div className="wrapper">

        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          {/* <motion.h2 variants={textVariants}>AQUIB SAYYAD</motion.h2> */}
          <motion.h1 variants={textVariants}>
            I am certified in
            <p><span>Software Development </span>and<span> Web Design</span></p>
            {/* <p><span>UI Designer,</span><p>& a</p></p> */}
          </motion.h1>
            {/* <p className="hobbies">I like sports and athletics. I&apos;m also a big Cryptocurrency and Web3 enthusiast. In my free time I like to play video games and research on new tech.</p> */}
          <h2>I like sports and athletics. I&apos;m also a big Cryptocurrency and Web3 enthusiast. In my free time I like to play video games and research on new tech.</h2>
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

export default Services;