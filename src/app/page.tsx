import { font_body, font_title } from '@/font'
import React from 'react'

export default function Home () {
  return (
    <>
      <p>ESCOLHA O SEGURO</p>
      <h1>você seguro<span>.</span></h1>
      <main>
        <div className='prata'>
          <div className='priceTitle'>
            <h3 className='titlePrata'>PRATA</h3>
            <div>
              <h3>R$ 199</h3>
              <p>mensal</p>
            </div>
          </div>
          <div className='section'>
            <ul className='lista-prata'>
              <li>Duas trocas por ano</li>
              <li>Assistência Técnica</li>
              <li>Suporte 08h às 18h</li>
              <li>Cobertura Estadual</li>
            </ul>
            <button className='buttonPrata'>INSCREVA-SE</button>
          </div>
        </div>


        {/* OURO */}
        <div className='ouro'>
          <div className='priceTitle' style={{ position: "relative" }}>
            <h3 className='titleOuro'>OURO</h3>
            <div>
              <h3 style={{ color: "#E1E1E1", position: 'absolute', right: "40px" }}>R$ 299</h3>
              <p style={{ color: '#B0B0B0', fontSize: "12px", position: 'absolute', right: "40px", top: '25px' }}>mensal</p>
            </div>
          </div>

          <div className='section'>
            <ul>
              <li>Cinco trocas por ano</li>
              <li>Assistência Especial</li>
              <li>Suporte 24h</li>
              <li>Cobertura Nacional</li>
              <li>Desconto em parceiros</li>
              <li>Acesso ao clube</li>
            </ul>
            <button>INSCREVA-SE</button>
          </div>
        </div>
      </main>
    </>
  )
}
