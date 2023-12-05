import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Axis",
    img: "./axis.png",
    desc: "Axis is an AI application featuring a chatbot, code generator and an image generator. Developed using Next.js, React.js, Tailwind, Prisma and Open AI. Hosted on Netlify.",
    url: "https://axis-ai.netlify.app"
  },
  {
    id: 2,
    title: "Qkart",
    img: "./qkart.png",
    desc: "Qkart is an E-commerce platform, developed using React, Express, Node.js, and MongoDB. Hosted on Netlify and Microsoft Azure.",
    url: "https://qkartstores.netlify.app"
  },
  {
    id: 3,
    title: "Qtrip",
    img: "./qtrip.png",
    desc: "QTrip is a travel website, developed using HTML, CSS, and JavaScript. Styled the page with Bootstrap, and leveraged localStorage to retain user preferences on the client-side. Hosted on Netlify and Microsoft Azure.",
    url: "https://qtrip-42.netlify.app"
  },
  {
    id: 4,
    title: "Xboard",
    img: "./xboard.png",
    desc: "Xboard is a newsfeed website that displays news content from Flipboard’s RSS feed using REST API. Developed using HTML, CSS, JavaScript and Bootstrap. Hosted on Netlify.",
    url: "https://xboardtimes.netlify.app"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-350, 350]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a target="new" href={item.url}><button>Visit</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
