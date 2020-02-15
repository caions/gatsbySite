import React from 'react'
import img from '../assets/moveis.png'

const Hero = () => {
    return (
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="p-8">
                <h2 className="font-bold text-2xl">Móveis Planejados</h2>
                <p className="text-xl">Comerciais e residenciais para todos os ambientes</p>
                <p className="text-gray-700">Atendemos Pouso Alegre em toda a região</p>
            </div>
            <div>
                <img src={img} alt='Móveis planejados' />
            </div>
        </div>
    )
}

export default Hero
