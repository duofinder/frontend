import Link from 'next/link'

function Home() {
  return (
    
    <main className='home-page'>
        <header className='header'>
        <img src="/assets/img/duofinder-cropped.png" width={300} height={90} alt="Team up!" />
          
        <ul className='list'>
              <li className='list-item'>
                <Link className='btn-about' href="/about">Sobre</Link>
              </li>
        </ul>
        </header>
        <section className='content'>

              <div className='box-img'>
                <img src="/assets/img/animationlaranja.svg" width={800} height={800} alt="Team up!" /> 
              </div>

          <div className="container">
         
            <div className="box-title">
              <h1>DUO<span>FINDER</span></h1>    
            </div>

            <div className="box-description">
                <p> Duofinder é um site essencial para jogadores que procuram um parceiro de jogo compatível. <br/> <br/>Com sua plataforma de busca fácil de usar, categorias de jogos populares, seção de destaque e comunidade confiável, este site é a solução ideal para encontrar um duo para os jogos que você tanto ama.</p>      
            </div> 


            <div className="box-btn">
            <Link className='log-link' href="/login">Encontre seu duo!</Link>
            </div>

          </div>
        </section>  
    </main>
  )
}

export default Home