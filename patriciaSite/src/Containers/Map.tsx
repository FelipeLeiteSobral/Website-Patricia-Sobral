import React from 'react'
import Button from '../Components/Button'

const Map = () => {
  return (
    <div className=''>
        <div className='flex justify-center'>
            <h2 className='text-4xl font-semibold text-gray-600 py-10 px-4 text-center'> Aracaju/SE - Centro Médico Jardins, sala <span className='font-Roboto'>702</span> </h2>
        </div>
        <map name="" className='flex justify-center py-6'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4658.334870979397!2d-37.06678833723989!3d-10.949991570079703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3dc52ec6a0b%3A0xbc6dae03ab88c30f!2sEstacionamento%20-%20Av.%20Ministro%20Geraldo%20Barreto%20Sobral%2C%202131%20-%20Jardins%2C%20Aracaju%20-%20SE%2C%2049026-240%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1672433138892!5m2!1spt-BR!2sus" className='min-w-[80%] h-[40vh]' loading="lazy" ></iframe>
        </map>
        <div className='flex justify-center text-white pt-10 pb-16'>
            <Button/>
        </div>
    </div>
  )
}

export default Map