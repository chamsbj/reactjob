import { useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import Homecards from '../components/Homecards';
import Joblistings from '../components/Joblistings';
import Viewalljobs from '../components/Viewalljobs'
import React from 'react'

const Homepage = () => {

  return (
    <>
    <Hero />
    <Homecards />
    <Joblistings isHome={true} />
    <Viewalljobs />


    </>
  )
}

export default Homepage