import { useState } from 'react'
import Button from "../Components/Button"

function Header() {
  return (
    <div className='bg-tablet bg-cover bg-center'>
      <header className="h-full w-full text-white flex justify-center relative bg-gradient-to-b from-gray-700/[0.95] to-gray-500/[0.9]">
        <div className='xl:w-[65%] lg:w-[75%] md:w-[85%] sm:w-[90%] w-[90%] flex flex-col sm:flex-row md:gap-10 '>
          <div className='flex flex-col sm:max-w-[46%] py-8 justify-around'>
            <div className='flex flex-col w-full'>
              <img src="https://i.ibb.co/MCN9bGZ/logo.png" alt="Logo" className='w-72 sm:w-48 object-cover self-center sm:self-start' />
              <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-4xl font-light sm:pt-4 pt-12'><span className='font-bold'>Dentes perfeitos mais rápido,</span> sem atrapalhar seu sorriso</h1>
              <p className=' xl:text-2xl lg:text-xl md:text-lg sm:text-base text-lg text-yellow-100 xl:py-6 p-5 sm:px-0'>O alinhador <span className='font-Roboto'>100</span>% transparente Invisalign soluciona todos os casos de desalinhamento dental. Agende sua consulta!</p>
            </div>
            <div className='flex self-center sm:self-start pt-6 sm:pt-2'>
              <Button/>
            </div>
          </div>
          <div className='flex sm:pt-6 items-end'>
            <img src="https://i.ibb.co/zQFYCwt/patricia.png" alt="Doutora patrícia" className='object-contain lg:max-w-[95%] xl:max-w-[90%]' />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
