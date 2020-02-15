import React from 'react'
import './style.css'
import BtnWhatsApp from '../components/BtnWhatsApp'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import selo from '../assets/selo.png'
import img from '../assets/moveis.png'
import Helmet from 'react-helmet'

import { graphql, useStaticQuery } from 'gatsby'

const Index = () => {
    const { site } = useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    const selos = [1, 2, 3, 4]
    const projetos = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            <Helmet>
                <title>{site.siteMetadata.title}</title>
            </Helmet>
            <Header>
                <Logo />
                <div>
                    <BtnWhatsApp />
                </div>
            </Header>
            <Hero />
            <div className="flex flex-col items-center sm:flex-row justify-around" >
                {
                    selos.map(() => {
                        return <img src={selo} className="my-4" />
                    })
                }
            </div>
            <div>
                <h2 className="px-8 py-2 text-2xl font-bold ">
                    Projetos de móveis planejados
                </h2>
                <div className="flex flex-wrap">
                    {projetos.map(() => {
                        return (
                            <div className="max-w-sm">
                                <div className="m-2 rounded shadow-lg">
                                    <img src={img} alt="Projeto 1 " />
                                    <div className="px-6 py-4">
                                        <p className="font-bold text-xl mb-2">Projeto</p>
                                        <p>Descrição</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index