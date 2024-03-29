import { motion } from 'framer-motion';
import React, {useEffect, useState} from 'react'
import './About.scss';
import { client, urlFor } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper';
 
// const abouts = [
//   {
//     title: 'Software Engineer',
//     description: `I am a B. Tech in Software Engineering Graduate from Harare Institute Of Technology, awarded with a First Class Degree on completion`,
//     imgUrl: images.about01
//   },
//   {
//     title: `Frontend Developer`,
//     description: `I am proficient with React and Vue frontend javascript frameworks for web development`,
//     imgUrl: images.about02
//   },
//   {
//     title: `Backend Developer`,
//     description: `I am proficient in NodeJS and Spring Boot from RESTful API development. NodeJS with typescript and Spring Boot with Java 11`,
//     imgUrl: images.about03
//   },
//   {
//     title: `Mobile App Developer`,
//     description: `I am good at react-native a framework i use for developing Android Apps, iOS Apps `,
//     imgUrl: images.about04
//   }
// ]

export const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = `*[_type == "abouts"]`;
    client.fetch(query).then((data) => setAbouts(data));
  }, [])
  

  return (
    <>
      <h2 className="head-text">I Know That <span>Good Systems</span><br /> means <span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView={{opacity: 1}}
              whileHover={{scale: 1.1}}
              transition={{duration: 0.5, type: 'tween'}}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{marginTop: 20}}>
                {about.title}
              </h2>
              <p className="p-text" style={{marginTop: 10}}>
                {about.description}
              </p>

            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
