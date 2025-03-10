import React, { createContext, useState } from 'react'
import {Routes, Route } from "react-router-dom";
import Navpar from '../Components/Navpar'
import Curds from '../Components/Curds'
import Aboutus from '../Components/Aboutus'
import Steps from '../Components/Steps'
import Sittings from '../Components/Sittings';

export const Showcontext = createContext()
export const Countercontext = createContext()
export const ActiveContext = createContext()
export const Show_DivContext = createContext()

export default function Home() {
  const [show , setShow] = useState(false)
  const [active , setActive] = useState(0)
  const [counter , setCounter] = useState(0)
  const [show_Div , setShow_Div] = useState(0)
  return (
    <div className='relative  flex flex-col   items-center gap-[50px] w-full'>
    <Showcontext.Provider value = {{show , setShow}}>
    <Countercontext.Provider value = {{counter , setCounter}}>
    <ActiveContext.Provider value = {{active , setActive}}>
    <Show_DivContext.Provider value = {{show_Div , setShow_Div}}>
    <Navpar/>
    <Routes>
      <Route path="/Sittings" element={<Sittings/>}/>
      <Route path='/' element={
      <>
    <div className=' justify-center xs:p-[10px] gap-[10px] flex flex-wrap'>
    <Curds/>
    <Curds/>
    <Curds/>
    <Curds/>
    <Curds/>
    <Curds/>
    <Curds/>
    <Curds/>
    <Curds/>
    {show && (
      <div
        className="absolute  inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" absolute top-[20%] ">
            <Steps />
          </div>
        </div>
      )}
    </div>
      <Aboutus/>
        </>
    }/>
    </Routes>
   
    </Show_DivContext.Provider>
    </ActiveContext.Provider>
    </Countercontext.Provider>
    </Showcontext.Provider>
    </div>
  )
}
