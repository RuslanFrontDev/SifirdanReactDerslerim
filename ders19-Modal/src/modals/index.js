import modalsComponents from '../modalsComponents/modalsComponents';
import {useModals} from '../utils/modal'
export default function Modal() {
   const modals = useModals()
   return (
      <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
        {modals.map((modal, index)=>{
         const modalC = modalsComponents.find(mc=>mc.name === modal.name)
         return (
            <div className='hidden last:block' key={index}>
            <modalC.element key={index}/>
            </div>
         )
        })}
      </div>
   )
}