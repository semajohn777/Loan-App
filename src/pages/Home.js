import React from 'react'
import '../component/pagesCss/home.css'
import CarouselSlide from '../component/Carosel/CarouselSlide'
import SecTwo from '../component/Sect2/SecTwo'
import SecThree from '../component/Sect2/SecThree'
import SecFour from '../component/Sect2/SecFour'
import Footer from '../component/footer/Footer'

const Home = () => {
  return (
    <div>
      <div className="picture_div">
        <CarouselSlide />
      </div>
      <SecTwo />
      <SecThree />
      <SecFour />
      <Footer />
    </div>
  )
}

export default Home
