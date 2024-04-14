"use client"

import Pricing from '../../../components/Pricing'
import React from 'react'
import Footer from '../../../components/Footer'

import NavbarLanding from '../../../components/NavbarLanding'
const Pricings = () => {
  return (
    <section>
      <div >
        <NavbarLanding />
      </div>
      <div className='pt-20 pb-5'>
        <Pricing />
        
      </div>
      <div >
      <Footer />
      </div>
    </section>
  )
}

export default Pricings