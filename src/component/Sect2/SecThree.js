import React from 'react'
import './secTwo.css'
import { Container } from 'react-bootstrap'
import bidWoman from '../images/IMG-20220712-WA0000.jpg'
import bg from '../images/bg.jpeg'
import woman from '../images/pexels-ogo-3597932.jpg'
import myPic from '../images/Edited pic.jpg'

const SecThree = () => {
  return (
    <Container fluid className="secThree">
      <h1 className="text-center text-white">
        MEET OUR LEADERS AND TEAM MEMBERS
      </h1>
      <p className="width-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor
        maiores recusandae, quae repudiandae amet eligendi tenetur accusantium
        excepturi, commodi ipsa quasi nobis dicta, dolorem architecto optio
        debitis deleniti neque.
      </p>
      <div className="secThree_grid">
        <img
          data-aos="zoom-in-up"
          data-aos-duration="4000"
          data-aos-delay="50"
          data-aos-offset="100"
          data-aos-easing="ease-in-out"
          src={bg}
          width="88%"
          alt={bg}
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="4000"
          data-aos-delay="50"
          data-aos-offset="150"
          data-aos-easing="ease-in-out"
          src={woman}
          width="88%"
          alt={woman}
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="4000"
          data-aos-delay="50"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          src={myPic}
          width="88%"
          alt={myPic}
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="4000"
          data-aos-delay="50"
          data-aos-offset="250"
          data-aos-easing="ease-in-out"
          src={bidWoman}
          width="98%"
          alt={bidWoman}
          className="image_bid_woman"
        />
      </div>
    </Container>
  )
}

export default SecThree
