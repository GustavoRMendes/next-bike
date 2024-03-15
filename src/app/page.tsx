import { font_body, font_title } from '@/font'
import React from 'react'

export default function Home () {
  return (
    <>
      <p>ESCOLHA O SEGURO</p>
      <h1>você seguro<strong>.</strong></h1>
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
              <li><span>✔️</span>Duas trocas por ano </li>
              <li><span>✔️</span>Assistência Técnica</li>
              <li><span>✔️</span>Suporte 08h às 18h</li>
              <li><span>✔️</span>Cobertura Estadual</li>
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
              <li> <span>✔️</span>Cinco trocas por ano</li>
              <li> <span>✔️</span>Assistência Especial</li>
              <li> <span>✔️</span>Suporte 24h</li>
              <li> <span>✔️</span>Cobertura Nacional</li>
              <li> <span>✔️</span>Desconto em parceiros</li>
              <li> <span>✔️</span>Acesso ao clube</li>
            </ul>
            <button className='buttonOuro'>INSCREVA-SE</button>
          </div>
        </div>
        
      </main>
      
    </>
  )
}
