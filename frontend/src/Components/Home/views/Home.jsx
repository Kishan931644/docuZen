import { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features1 from '../components/Features1'
import CTA from '../components/Cta'
import Features2 from '../components/Features2'
import Steps from '../components/Steps'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import './Home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar
        logoAlt="DocuZen Logo"
        text={
          <Fragment>
            <span className="home-text">
              <span className="home-text1">Docu</span>
              <span className="home-text2">Zen</span>
            </span>
          </Fragment>
        }
      ></Navbar>
      <Hero></Hero>
      <Features1></Features1>
      <CTA></CTA>
      <Steps></Steps>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  )
}

export default Home
