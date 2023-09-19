import React from 'react'
import "./Home.scss"
import HomeBanner from '../../components/homeBanner/HomeBanner'
import HomeSection2 from '../../components/homeSection2/HomeSection2'
import HomeSection3 from '../../components/homesection3/HomeSection3'

const Home = () => {
  return (
    <div className='home'>
      <HomeBanner/>
      <HomeSection2/>
      <HomeSection3/>
    </div>
  )
}
export default Home