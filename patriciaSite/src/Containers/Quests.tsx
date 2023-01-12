import MyDisclorsure, {card} from '../Components/MyPopover'
import Button from '../Components/Button'

const Quests = () => {
  return (
    <div>
        <div className='flex bg-yellow-200 justify-center px-4'>
            <div className='flex flex-col w-full items-center'>
                <h2 className='text-3xl sm:text-5xl font-semibold text-gray-600 py-10 text-center '>
                    Perguntas frequentes
                </h2>
                <div className='gap-3 flex flex-col w-full items-center text-white font-medium text-lg'>
                    {card.map((card, index:number)=>(
                        <MyDisclorsure title={card.title} text={card.text} key={card.title + index}/>
                        ))}
                </div>
                <div className='flex justify-center p-10 text-white'>
                <Button/>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Quests