import Button from '../Components/Button'
import Icone from "../Components/Icone"

const Comparation = () => {
  return (
    <div>
        <div className="flex justify-center py-8 sm:pt-20 sm:pb-12">
            <h2 className='sm:text-5xl text-4xl font-semibold text-gray-600'>Invisalign <span className='text-yellow-400 font-bold'> VS </span> Fixo</h2>
        </div>
        <div className="flex justify-center sm:py-6">
            <img src="https://i.ibb.co/t8fPRzT/vsX.png" alt="" className='max-w-100%' />
        </div>
        <div className="flex sm:flex-col w-full justify-center align-center py-6 px-2 sm:text-2xl text-lg text-center text-gray-600 sm:font-semibold font-medium gap-10">
            <ul className='sm:flex-row flex-col flex h-full justify-center sm:gap-28 text-wrap max-w-[900px] self-start sm:self-center'>
                <li className='max-w-44'>
                    <div>
                        <Icone/>
                    </div>
                    <p> Não atrapalha seu sorriso</p></li>
                <li className='max-w-44'>
                    <div>
                        <Icone/>
                    </div>
                    <p> Pode comer o que quiser</p></li>
                <li className='max-w-44'>
                    <div>
                        <Icone/>
                    </div>
                    <p> Tratamento mais rápido</p></li>
            </ul>
            <ul className='sm:flex-row flex-col flex h-full justify-center sm:gap-28 text-wrap max-w-[900px] self-start sm:self-center'>
                <li className='max-w-44'>
                    <div>
                        <Icone/>
                    </div>
                    <p>Menos idas ao dentista</p></li>
                <li className='max-w-44'>
                    <div>
                        <Icone/>
                    </div>
                    <p>Não acumula bactéria</p></li>
                <li className='max-w-44'>
                    <div>
                        <Icone/>
                    </div>
                    <p>Gengiva não sangra</p></li>
            </ul>
        </div>
            <div className='flex justify-center text-white sm:pt-10 py-8 sm:pb-16'>
                <Button/>
            </div>
        <div >

        </div>
    </div>
  )
}

export default Comparation