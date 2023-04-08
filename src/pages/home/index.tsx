import Link from 'next/link'
import { useState } from 'react'

function Home() {

  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  return (
    <main className='home-page'>
        <header className={`header ${activeMenu ? 'active' : ''}`}>
          <div className="container">
            <img src="/assets/img/duofinder-cropped.png" width={300} height={90} alt="Team up!" />

            <button onClick={() => setActiveMenu(!activeMenu)} className='menu-hamburguer'>
              <div className="hamburguer-btn">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>

              <div className="hamburguer-close-btn">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </button>

            <nav className='menu-mobile'>
              <ul className='list'>
                <li className='list-item'>
                  <Link className='btn-link' href="/about">Sobre</Link>
                </li>
              </ul>
            </nav>    

            <nav className='menu'>
              <ul className='list'>
                <li className='list-item'>
                  <Link className='btn-link' href="/about">Sobre</Link>
                </li>
              </ul>
            </nav>  
          </div>
        </header>

        <section className='section-content'>
          <div className="container">
            <div className='box-img'>
              <img src="/assets/img/animationlaranja.svg" alt="Team up!" /> 
            </div>

            <div className="content">
              <div className="box-title">
                <h1>DUO<span>FINDER</span></h1>    
              </div>

              <div className="box-description">
                  <p> Duofinder é um site essencial para jogadores que procuram um parceiro de jogo compatível.<br/> <br/>Com sua plataforma de busca fácil de usar, categorias de jogos populares, seção de destaque e comunidade confiável, este site é a solução ideal para encontrar um duo para os jogos que você tanto ama.</p>      
              </div> 

              <div className="box-btn">
                <Link className='log-link' href="/login">Encontre seu duo!</Link>
              </div>
            </div>
          </div>
        </section>  
    </main>
  )
}

export default Home