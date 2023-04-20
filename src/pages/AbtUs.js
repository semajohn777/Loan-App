import React from 'react'
import '../component/pagesCss/Abt.css'
import Footer from '../component/footer/Footer'
import goalsImg from '../component/images/company goals resized.jpg'
import workWithUs from '../component/images/work with us resize.jpg'
import experience from '../component/images/flexbility.jpg'
import { AbtUsDataItems } from '../utilis/AbtUsData'
import profile1 from '../component/images/profile-1.jpg'
import profile2 from '../component/images/profile-2.jpg'
import profile3 from '../component/images/profile-3.jpg'
import Marquee from 'react-fast-marquee'
import harvard from '../component/images/harvard-logo.jpg'
import Angeles from '../component/images/los Angeles times.png'
import oracle from '../component/images/oracle.png'
import ticket from '../component/images/ticketmaster.png'
import airlogo from '../component/images/Airbnb_Logo_.png'
import capital from '../component/images/capital-one-logo.png'

const AbtUs = () => {
  const { data } = AbtUsDataItems
  console.log(data)
  return (
    <div className="abt_us">
      {/* <div>{data.map() }</div> */}
      <div className="abt_flex brown_div">
        <img
          src={goalsImg}
          alt="Company Goals and Vision"
          className="goal_img"
        />
        <div className="p-3 pt-0">
          <h1 className="text-center abt_header">Company Goal and Vision</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            obcaecati omnis nisi voluptates, ex perferendis esse nostrum amet?
            Enim vitae ut ipsa iure a fuga atque adipisci hic, veniam vel.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            eos ipsam dolorum maxime deserunt sit iusto perspiciatis minima esse
            repellendus. Harum numquam iste dolorem dolor exercitationem unde
            alias adipisci reiciendis? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Sed illo explicabo facere nihil iste accusamus
            voluptas repellendus, officiis, aliquid magni neque sequi quaerat
            illum ex veniam harum suscipit exercitationem nam?{' '}
            <span>Read More</span>
          </p>
        </div>
      </div>
      <div className="abt_flex p-3 pt-0 column_reverse">
        <div>
          <h1 className="text-center abt_header">Work with us</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            laboriosam quo tempora sit consequuntur esse dolore nostrum ipsa
            officia repellendus reprehenderit sed nesciunt nemo consectetur
            fugit, repellat alias. Earum, culpa! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Magnam omnis natus deleniti sequi
            repellendus ducimus, ipsum quos, fugiat dolore nisi, dolorem
            accusamus suscipit harum nam? Adipisci molestias corrupti accusamus
            numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos repellat sapiente natus ratione illo id tenetur odio obcaecati
            nostrum voluptatibus laboriosam error eligendi deserunt officia, rem
            dolores ipsum libero temporibus.<span>Read More</span>
          </p>
        </div>
        <img src={workWithUs} alt="Work With Us" />
      </div>
      <div className="abt_flex brown_div">
        <img src={experience} alt="Experience Our Discount" />
        <div className="p-3 pt-0">
          <h1
            className="text-center abt_header"
            data-aos="flip-down"
            data-aos-anchor-placement="top-center"
          >
            Experience Our Discount
          </h1>
          <p className="text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
            quae! Necessitatibus eligendi officiis laborum voluptate molestiae
            cum voluptas? Qui cupiditate ab consequuntur facere quas eum,
            deleniti ducimus aliquam officiis vitae! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Corporis magnam voluptate inventore!
            Maxime harum similique distinctio ullam doloribus? Corrupti
            voluptate unde animi temporibus esse aspernatur distinctio aliquam
            porro asperiores ad. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. At, eos quod? Rem enim est repellat veniam
            consequuntur voluptatum blanditiis vitae, quibusdam consequatur. Et
            recusandae eveniet perferendis assumenda! Repellat, quisquam eum.
            <span>Read More</span>
          </p>
        </div>
      </div>
      <h1 className="text-center">Testimonial</h1>
      <div className="testimonial">
        <div
          className="test_1"
          data-aos="zoom-in-up"
          data-aos-duration="4000"
          data-aos-delay="50"
          data-aos-offset="350"
          data-aos-easing="ease-in-out"
        >
          <img src={profile1} alt="" />
          <div className="same_bg_color"></div>
          <div className="brown_div test_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            minima nesciunt consequatur expedita, quia vero in eum doloremque
            officiis quae hic deserunt, labore corporis ipsum ipsa, dolores
            minus amet quas!
          </div>
        </div>
        <div
          className="test_2"
          data-aos="zoom-in-up"
          data-aos-duration="4000"
          data-aos-delay="50"
          data-aos-offset="380"
          data-aos-easing="ease-in-out"
        >
          <img src={profile2} alt="" />
          <div className="same_bg_color"></div>
          <div className="brown_div test_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            minima nesciunt consequatur expedita, quia vero in eum doloremque
            officiis quae hic deserunt, labore corporis ipsum ipsa, dolores
            minus amet quas!
          </div>
        </div>
        <div
          className="test_3"
          data-aos="zoom-in-up"
          data-aos-duration="4000"
          data-aos-delay="50"
          data-aos-offset="400"
          data-aos-easing="ease-in-out"
        >
          <img src={profile3} alt="" />
          <div className="same_bg_color"></div>
          <div className="brown_div test_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            minima nesciunt consequatur expedita, quia vero in eum doloremque
            officiis quae hic deserunt, labore corporis ipsum ipsa, dolores
            minus amet quas!
          </div>
        </div>
      </div>
      <h1 className="text-center">Our Patners</h1>
      <Marquee direction="left" className="marquee">
        <img src={harvard} alt="" className="marquee_img" />
        <img src={airlogo} alt="" className="marquee_img" />
        <img src={Angeles} alt="" className="marquee_img" />
        <img src={capital} alt="" className="capital_img" />
        <img src={ticket} alt="" className="marquee_img" />
        <img src={oracle} alt="" className="marquee_img" />
      </Marquee>
      <Footer />
    </div>
  )
}

export default AbtUs
