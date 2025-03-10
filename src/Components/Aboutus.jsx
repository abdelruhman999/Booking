import React from 'react'
import logo from '../assets/WhatsApp_Image_2025-03-09_at_03.02.22_87134602-removebg-preview.png'
export default function Aboutus() {
  return (
    <div className='  w-full flex relative gap-[250px] xs:pt-[150px] pt-[350px]  flex-col '>
        <div className='p-[20px] xs:top-[100px]  absolute top-[50px] '>

        <img src={logo} className=' h-[403px] xs:h-[130px] rounded-lg'  />
        </div>
 
        <div className='bg-[#CECAFA] xs:h-[158px]  rounded-t-full h-[358.5px]' ></div>
    </div>
  )
}
