import { Disclosure, Transition } from '@headlessui/react'
import { Fragment, ReactHTML } from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const card = [
  {
    title:"O tratamento com alinhador invisalign me atrapalha de comer?",
    text: <p><b>Não há restrições de alimentos com Invisalign,</b>  já que você tirará seus alinhadores antes de comer. Quer uma maçã? Pode comer. Está com vontade de comer pizza? Não passe vontate. Todos os alimentos podem ser consumidos, desde que seus alinhadores não estejam em sua boca.</p>,
  },
  {
    title:"O alinhador invisalign vai manchar os meus dentes?",
    text: <p><b>Não vai.</b>  O alinhador invisalign não tem elementos de tintura, e pode facilmente ser removível para higienização, o que dificulta ainda mais a formação de placa bacteriana. Portanto, não precisa se preocupar com manchas em seu sorriso.</p>,
  },
  {
    title:"Posso usar o invisalign transparente só para dormir?",
    text: <p><b>Não.</b>  Você pode sim dormir tranquilamente sem que eles saiam da sua boca durante o sono. Mas usar o alinhador <b>somente na hora de dormir</b> prejudicará sim o andamento do seu tratamento.</p>,
  },
  {
    title:"Quanto tempo dura o tratamento com alinhador invisalign?",
    text: <p>Embora você comece a ver resultados em questão de semanas, a duração exata do seu tratamento depende do seu caso. Por isso, é necessária a avaliação de um dentista certificado e com experiência nos métodos Invisalign. <b>Agende agora sua avaliação clicando no botão abaixo.</b></p>,
  },
  {
    title:"Quanto custa o tratamento com alinhador invisalign?",
    text: <p>É também uma resposta que depende do seu caso em particular. Existem diversas formas de proceder com o tratamento, com diferentes quantidades de alinhadores. Contudo, trata-se de um investimento pequeno comparado ao conforto, rapidez, e estética que o Invisalign proporciona. <b>Agende agora sua avaliação clicando no botão abaixo.</b></p>,
  },
]

type MyDisclosureProps = {
  title: string,
  text: React.ReactNode,
}

function MyDisclosure({title, text}:MyDisclosureProps) {
  return (
    <Disclosure>
      {({ open }) => (
            <>
      <Disclosure.Button className="bg-gray-700 w-full max-w-[1000px] flex outline-none text-base sm:text-lg bg-gray-700 p-[0.75rem] justify-start items-center gap-2">    
      <span className={`${
                    open ? '-rotate-90 transform' : ''
                  }text-white text-sm`}><ArrowRightIcon/></span><p>{title}</p>   
      </Disclosure.Button>
      <Transition
        enter="transition duration-350 origin-top ease-out"
        enterFrom="transform scale-y-0 opacity-0 "
        enterTo="transform scale-y-100 opacity-100"
        leave="transition duration-350 origin-top ease-out"
        leaveFrom="transform scale-y-100 opacity-100"
        leaveTo="transform scale-y-0 opacity-0"
      >
        <Disclosure.Panel static className="max-w-[1000px] bg-yellow-200 drop-shadow-xl z-10 text-gray-700 px-4 pb-11 text-justify text-base">
          <p>
            {text}
          </p>
        </Disclosure.Panel>
      </Transition>
      </>
          )}
    </Disclosure>
  )
}
 export default MyDisclosure