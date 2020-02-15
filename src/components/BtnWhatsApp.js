import React from 'react'
import wa from '../assets/wa.png'
const BtnWhatsApp = () => {
    return (

        < div className="bg-white shadow rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row" >
            <img src={wa} alt='whatslogo' />
            <div className="ml-2">
                <h3 className="font-bold text-2xl">Orçar seu Projeto!</h3>
                <p className="text-xs">Projeto e orçamento sem compromisso.</p>
                <p className="font-bold">(85) 3291-33251</p>
            </div>
        </div >
    )
}

export default BtnWhatsApp