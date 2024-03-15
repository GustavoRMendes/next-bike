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
            <div className='planePrice'>
              <h3 className='price'>R$ 199</h3>
              <p className='mensal'>mensal</p>
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
          <div className='priceTitle'>
            <h3 className='titleOuro'>OURO</h3>
            <div className='planePrice2'>
              <h3 className='priceOuro'>R$ 299</h3>
              <p className='mensal'>mensal</p>
            </div>
          </div>

          <div className='section'>
            <ul className='lista-ouro'>
              <li>Cinco trocas por ano</li>
              <li>Assistência Especial</li>
              <li>Suporte 24h</li>
              <li>Cobertura Nacional</li>
              <li>Desconto em parceiros</li>
              <li>Acesso ao clube</li>
            </ul>
            <button className='buttonOuro'>INSCREVA-SE</button>
          </div>
        </div>
      </main>
    </>
  )
}
