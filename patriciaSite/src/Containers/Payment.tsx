import Button from '../Components/Button'

const Payment = () => {
  return (
    <div>
        <div className="w-full bg-gray-300 flex justify-center">
            <div className='xl:w-[65%] lg:w-[80%] md:w-[85%] sm:w-[90%] w-full flex flex-col px-10'>
                <h2 className='text-4xl font-semibold text-gray-600 py-10 text-center '>
                        Porque trabalhamos com plano próprio de pagamento?
                </h2>
                
                <div className='flex justify-center'>
                    <ul className='flex flex-col gap-4 text-gray-700 text-lg font-medium'>
                        <li><span className='text-xs pr-4'><ion-icon name="ellipse"></ion-icon></span>Fazemos atendimentos com descontos especiais em parcerias com bancos e convênios</li>
                        <li><span className='text-xs pr-4'><ion-icon name="ellipse"></ion-icon></span>Disponibilizamos diversas formas de pagamento, inclusive boleto bancário e planos próprios</li>
                        <li><span className='text-xs pr-4'><ion-icon name="ellipse"></ion-icon></span>O método Invisalign exige muito mais tecnologia, tempo de consulta, e especialidade do que os planos de saúde podem oferecer</li>
                    </ul>
                </div>
                <div className='flex text-white justify-center py-10'>
                    <Button/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment