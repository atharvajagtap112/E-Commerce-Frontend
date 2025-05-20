import React from 'react'
import MainCarousel from '../../HomeCarosal/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../Data/Men/men_kurta'
import { kurtaPage1 } from '../../Data/Kurta/kurta'
import { dressPage1 } from '../../Data/dress/page1'
import { mensShoesPage1 } from '../../Data/shoes'
import Footer from '../../components/Footer/Footer'
import Product from '../../components/Product/Product'

const HomePage = () => {
  return (
    <div>
       <Product/>
        {/* <MainCarousel />
        <div className='space-y-10 py-20 flex flex-col justify-center px-50 lg:px-10'>
           < HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
           < HomeSectionCarosel data={mensShoesPage1 } sectionName={"Men's Shoes"}/>
           < HomeSectionCarosel data={dressPage1}  sectionName={"Women's Dress"}/>
        </div> */}
        <Footer/>
    </div>
  )
}

export default HomePage