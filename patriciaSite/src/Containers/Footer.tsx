import React from 'react'

const Footer = () => {
  return (
    <div className='bg-tablet bg-center bg-cover'>
        <div className='from-gray-600/[0.97] to-gray-500/[0.93] bg-gradient-to-b flex justify-center h-full'>
            <footer className='xl:w-[65%] md:w-[95%] sm:w-[90%] md:h-[82vh] text-white md:flex justify-center'>
                <div className='hidden md:flex pt-16 self-end h-full'>
                    <img src="https://ibb.co/WN9wdnm" alt="" className='object-contain self-end max-h-full' />
                </div>
                <div className='md:max-w-[50%] p-10 text-justify'>
                    <p className='text-yellow-100 text-2xl pb-3'>Conheça a</p>
                    <h3 className='text-5xl font-bold pb-8 text-left'>Dra. Patrícia Sobral</h3>
                    <p className='text-lg'>
                        Dra. Patrícia Sobral formou-se pela Universidade Federal de Sergipe em <span className='font-Roboto'>1990</span>, tendo se especializado em Odontopediatria pela UFRJ em <span className='font-Roboto'>1993</span>. É membro da ABO/SE como Ortodontista desde <span className='font-Roboto'>2004</span> <b>e, mais recentemente, em <span className='font-Roboto'>2016</span>, tornou-se Invisalign TOP DOCTOR.</b> <br/> <br/>
                        Dra. Patrícia Sobral atua exclusivamente na área de Ortodontia e Ortopedia Facial desde <span className='font-Roboto'>2004</span>, já tendo atendido milhares de pacientes com sucesso em consultório particular.
                    </p>
                    <form action="" className='flex flex-col pt-10 gap-3 outline-none text-gray-800 font-medium'>
                        <input type="text" required  id="name" className='rounded-lg h-10 w-full px-4 outline-none' placeholder='Nome'/>
                        <input type="email" required  className='rounded-lg h-10 w-full px-4 outline-none' placeholder='E-mail'/>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{2}[0-9]{5}[0-9]{4}" required className='rounded-lg h-10 w-full px-4 outline-none' placeholder='WhatsApp (79)987654321'/>
                        <button className='rounded-full text-white bg-green-500 px-4 py-2 font-bold uppercase w-full font-["Bebas Neue"] text-center text-lg hover:bg-green-300 hover:text-gray-700 transition ease-in duration-150 drop-shadow-lg'>Agende agora</button>
                    </form>
                </div>
                <div className='flex md:hidden pt-16 justify-center'>
                    <img src="https://ibb.co/WN9wdnm" alt="" className='object-cover h-full w-[55%]' />
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer

