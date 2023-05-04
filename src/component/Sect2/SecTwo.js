import React from 'react'
import './secTwo.css'
import hammer from '../images/hammer Image.png'
import car from '../images/Car image.png'
import book from '../images/book.png'
import house from '../images/House image.png'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SecTwo = () => {
  return (
    <div className="sectTwo_bg">
      <Container fluid onAnimationStart={book}>
        <h1 className="text-white text-center">We Provide the best Services</h1>
        <div className="secTwo_grid">
          <div
            className="secTwo_subSec_grid"
            data-aos="fade-right"
            data-aos-duration="6000"
            data-aos-delay="50"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
          >
            <img src={hammer} alt="" />
            <div

            //   data-aos-offset="200"
            //   data-aos-easing="ease-in-sine"
            //   data-aos-duration="600"
            >
              <h1>Personal Loan</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                repellendus dignissimos nemo magni cupiditate omnis quae
                officiis? Excepturi ab natus iure. Similique, adipisci totam
                molestiae laboriosam veniam voluptatem corrupti illo.
                <br />
                <Link to="/personal" style={{ textDecoration: 'none' }}>
                  <span>Click to acquire</span>
                </Link>{' '}
              </p>
            </div>
          </div>
          <div
            className="secTwo_subSec_grid"
            data-aos="fade-right"
            data-aos-duration="6000"
            data-aos-delay="50"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <img src={house} alt="" />
            <div>
              <h1>Home Loan</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                repellendus dignissimos nemo magni cupiditate omnis quae
                officiis? Excepturi ab natus iure. Similique, adipisci totam
                molestiae laboriosam veniam voluptatem corrupti illo.
                <br />{' '}
                <Link to="/business" style={{ textDecoration: 'none' }}>
                  <span>Click to acquire</span>
                </Link>{' '}
              </p>
            </div>
          </div>
          <div
            className="secTwo_subSec_grid"
            data-aos="fade-right"
            data-aos-duration="6000"
            data-aos-delay="50"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <img src={book} alt="" />
            <div>
              <h1>Business Loan</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                repellendus dignissimos nemo magni cupiditate omnis quae
                officiis? Excepturi ab natus iure. Similique, adipisci totam
                molestiae laboriosam veniam voluptatem corrupti illo.
                <br />
                <Link to="/business" style={{ textDecoration: 'none' }}>
                  <span>Click to acquire</span>
                </Link>
              </p>
            </div>
          </div>
          <div
            className="secTwo_subSec_grid"
            data-aos="fade-right"
            data-aos-duration="6000"
            data-aos-delay="50"
            data-aos-offset="100"
            data-aos-easing="ease-in-out"
          >
            <img src={car} alt="" />
            <div>
              <h1>Car Loan</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                repellendus dignissimos nemo magni cupiditate omnis quae
                officiis? Excepturi ab natus iure. Similique, adipisci totam
                molestiae laboriosam veniam voluptatem corrupti illo.
                <br />
                <Link to="/business" style={{ textDecoration: 'none' }}>
                  <span>Click to acquire</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SecTwo
