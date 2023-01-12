import Button from '../Components/Button'
import CarouselFadeExample from '../Components/Carrossel'

const Casos = () => {
  return (
        <div className="w-full bg-gray-300 text-white flex justify-center">
            <div className='xl:w-[65%] lg:w-[80%] md:w-[85%] sm:w-[90%] w-full md:flex-row flex-col items-center flex md:gap-10'>
                <div className='flex flex-col p-10'>
                    <h2 className='text-3xl sm:text-4xl font-semibold text-gray-600 pb-6'>
                        Invisalign transparente resolve meu caso?
                    </h2>
                    <p className='text-gray-900 text-lg font-medium text-justify md:pb-10'>
                        Sim. A tecnologia Invisalign já conta com mais de 12 milhões de casos de sucessos em sua plataforma, de maneira que seu problema certamente já foi resolvido por nós antes. <br /> <br />

                        Nosso Scanner iTero 3D mapeará digitalmente todo o seu sorriso com alta precisão. É o que há
                        de mais moderno na odontologia digital hoje.
                    </p>
                    <div className='hidden md:flex'>
                        <Button/>
                    </div>
                </div>
                <div className='flex w-[75%] sm:w-[45%] md:w-[37%] md:py-16'>
                    <CarouselFadeExample/>
                </div>
                <div className='md:hidden flex py-10'>
                        <Button/>
                </div>
            </div>
        </div>
  )
}

export default Casos