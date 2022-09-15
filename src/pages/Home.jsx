import Footer from "../compnents/footer";
import Nav from "../compnents/nav";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

const Home = () => {
  return (
    <div className="home">
      <section className="top-section">
        <Nav/>
        <div className='main'>
          <h1>LASTCALL MAN</h1>
          <p>Available now for iOS, Andriod and all consoles </p>
          <div className='main-buttons'>
            <button>Download</button>
            <button>Explore</button>
          </div>
          <div className="sm-phone-img">
            <img className="phone-img-1" src={require('../assets/sm-phone-1.png')} alt=""/>
            <img className="phone-img-2" src={require('../assets/sm-phone-2.png')} alt=""/>
          </div>
          <div className="phone-img">
            <img className="phone-img-1" src={require('../assets/Group 37.png')} alt=""/>
            <img className="phone-img-2" src={require('../assets/Group 38.png')} alt=""/>
          </div>
          <div className='line'>
            <div className='smaller-line'></div>
          </div>
        </div>
      </section>
      <section className="categories">
        <div className="categories-top">
          <h3>Categories</h3>
          <div className='category-buttons'> 
            <button className='action-button'>
              <p>Actions</p>
              <img src={require('../assets/arrow-down.png')} alt=""/>
            </button>
            <button>Actions</button>
            <button>Adventures</button>
            <button>Racings</button>
            <button>Hard Core</button>
          </div>
        </div>
        <div className='fps'>
          <h3>FPS</h3>
          <div className="game-card-wrapper">
            <GameAward2/>
          </div>
          <div className='long-line'>
            <div className='smaller-long-line'></div>
          </div>
        </div>
        <div className="survival">
          <h3>Survival</h3>
          <div className="game-card-wrapper">
            <GameAward1/>
          </div>
          <div className='long-line'>
            <div className='smaller-long-line'></div>
          </div>
        </div>
        <div className="featured-news">
          <div className="featured-news-top">
            <h3>Featured News</h3>
            <button>View All</button>
          </div>
          <img className="small-award-img" src={require('../assets/sm-award.png')} alt=""/>
          <img className="big-award-img" src={require('../assets/game-award.png')} alt=""/>
          <div className='award-card-wrapper'>
            <GameAward src={require('../assets/award-1.png')} title="MOGames Community Hangout" subtitle="Gather with all creators of MOGames to share amazing moments together"/>
            <GameAward src={require('../assets/award-2.png')} title="Grand Launch of MO Consoles" subtitle="Save the date. Anticipate the events of our new products launch"/>
            <GameAward src={require('../assets/award-3.png')} title="Creators Spotlight for the Month" subtitle="Get to see the top creators for the Month and their skills"/>
          </div>
    </div>
      </section>
      <section className="come-work-with-us">
        <div className="come-work-with-us-text">
          <h3>Come work with us</h3>
          <p>Join the incredible team to build incredible products for players </p>
          <div className='d-flex'>
            <div className="openings">
              <h2>100</h2>
              <h6>Openings</h6>
            </div>
            <div>
              <h2>20+</h2>
              <h6>Offices</h6>
            </div>
          </div>
          <button>Explore Careers</button>
        </div>
      </section>
      <section className='news-letter'>
        <div style={{width: '90%',display: 'flex',flexDirection: 'column'}}>
          <h3>NEWSLETTER</h3>
          <form style={{alignSelf: 'center'}}>
            <div>
              <h2>10000+</h2>
              <p>Subscriptions</p>
            </div>
            <input type='email' placeholder="Enter Email Address"/>
            <button>Subscribe</button>
          </form>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Home;

const GameAward = (props) => {
  return(
    <div className="game-award-card">
      <img src={props.src} alt=""/>
      <h4>{props.title}</h4>
      <h5>{props.subtitle}</h5>
      <button>Read More</button>
    </div>
  )
}
const Array2 = [
  {
    date:'October 1, 2022',
    src: 1,
    name:'John Hit',
    key: 1,
  },
  {
    date:'November 8, 2022 ',
    src: 2,
    name:'Revenge',
    key: 2,
  },
  {
    date:'November 21, 2022',
    src: 2, 
    name:'Revenge of the Elites',
    key: 3,
  }
]
const Array1 = [
  {
    date:'October 1, 2022',
    src: 1,
    name:'John Hit',
    key: 1,
  },
  {
    date:'November 8, 2022 ',
    src: 2,
    name:'Revenge',
    key: 2,
  },
  {
    date:'November 21, 2022',
    src: 2, 
    name:'Revenge of the Elites',
    key: 3,
  }
]
const GameAward1 = (props) => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWidth(window.innerWidth);
  }
  window.addEventListener('resize', handleResize)
  const [activeThumb, setActiveThumb] = useState();
  return(
      <Swiper
          onSwiper={setActiveThumb}
          loop={false}
          spaceBetween={10}
          modules={[Navigation, Thumbs]}
          className='product-images-slider-thumbs'
          slidesPerView={width > 1700 ? 3 : width / 610 }
      >
        {   
            Array1.map((props) => (
                <SwiperSlide key={props.key}>
                  <div className='games'>
                    <span style={{maxWidth: '100%'}} ><img className='img' src={require("../assets/game-img-"+props.src+ ".png")} alt=""/></span>
                    <div className="games-bottom">
                      <div>
                        <h5>{props.date}</h5>
                        <h4>{props.name}</h4>
                      </div>
                      <span><img src={require('../assets/arrow.png')} alt=""/></span>
                    </div>
                  </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
  )
}
const GameAward2 = (props) => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWidth(window.innerWidth);
  }
  window.addEventListener('resize', handleResize)
  const [activeThumb, setActiveThumb] = useState();
  return(
      <Swiper
      onSwiper={setActiveThumb}
      loop={false}
      spaceBetween={10}
      modules={[Navigation, Thumbs]}
      className='product-images-slider-thumbs'
      slidesPerView={width > 1700 ? 3 : width / 610 }
      >
        {
            Array2.map((props) => (
                <SwiperSlide key={props.key}>
                  <div className='img games'>
                    <img src={require("../assets/game-img-"+props.src+ ".png")} alt=""/>
                    <div className="games-bottom">
                      <div>
                        <h5>{props.date}</h5>
                        <h4>{props.name}</h4>
                      </div>
                      <span><img src={require('../assets/arrow.png')} alt=""/></span>
                    </div>
                  </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
  )
}