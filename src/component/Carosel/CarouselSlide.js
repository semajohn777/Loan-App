import Carousel from 'react-bootstrap/Carousel'
import './carousel.css'
import carOne from '../images/corousel img three.jpg'
import carTwo from '../images/corousel img two.jpg'
import carThree from '../images/Four carosel.jpg'

function CarouselSlide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block" src={carOne} alt="First slide" />
        <Carousel.Caption className="Cheack">
          <h1>We give the Best Loan</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button>Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={carTwo} alt="Second slide" />

        <Carousel.Caption className="Cheack">
          <h1>We give the Best Loan</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={carThree} alt="Third slide" />

        <Carousel.Caption className="Cheack">
          <h1>We give the Best Loan</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button>Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselSlide
