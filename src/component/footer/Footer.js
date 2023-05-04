import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../images/semaLogo.png'
import phone from '../images/Phone image.png'
import whatapp from '../images/what image.png'
import email from '../images/Email box image.png'
import socialMedia from '../images/social media.png'
import contrast from '../images/contrast.png'
import { BiLaptop } from 'react-icons/bi'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 py-2">
      <Container className="footer">
        <div>
          <Link to="/">
            <img src={logo} alt="website Logo" width="120" />
          </Link>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
            voluptate. Rem tenetur debitis repellendus at veritatis ducimus
            cupiditate delectus consequatur. Modi vero quam ab facilis eaque
            laboriosam ipsam excepturi numquam.
          </p>
        </div>
        <div>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <h2>About Us</h2>
          </Link>

          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur molestias modi eum doloribus magni cupiditate
            laudantium ut atque sequi deleniti non dolorum possimus, vitae
            itaque explicabo? Nostrum earum odit veniam.
          </p>
        </div>
        <div>
          <h2 className="ms-3">Contact</h2>
          <div>
            <img width="50" src={phone} alt="Telphone" />
            <span className="text-white">+2347035295095</span>
          </div>
          <div>
            {' '}
            <img width="50" src={whatapp} alt="Whatapp" />
            <span className="text-white">+2348074659856</span>
          </div>
          <div>
            <img width="50" src={email} alt="email" />
            <span className="text-white">johnagbudumhe12@gmail.com</span>
          </div>
          <div className="mt-1 ms-2">
            <BiLaptop size="2em" />
            <span className="text-white ms-2 portfolio_link">
              https://portfolio-app-777.netlify.app/
            </span>
          </div>
          <div>
            <img
              width="100"
              className="ms-5"
              src={socialMedia}
              alt="social media"
            />
          </div>
        </div>
      </Container>
      <p className="text-end pe-3">
        All Right Reserved &copy;<span>Sema Ltd</span>{' '}
      </p>
    </footer>
  )
}

export default Footer
