import React from 'react'
import MainCarousel from '../../HomeCarosal/MainCarosel'
import HomeSectionCarosel from '../../components/Navigations/HomeSectionCarosel/HomeSectionCarosel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='space-y-10 py-20 flex flex-col justify-center px-50 lg:px-10'>
           < HomeSectionCarosel/>
           < HomeSectionCarosel/>
           < HomeSectionCarosel/>
        </div>
    </div>
  )
}

export default HomePage