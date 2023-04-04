import Link from 'next/link'

function Home() {
  return (
    
    <main className='home-page'>
        <header className='header'>
            <h1 className='title'>Duofinder</h1>
        <ul className='links'>
              <li className='list'>
                <Link href="/about">Sobre</Link>
              </li>
              <li className='list'>
                <Link href="/login">Login</Link>
              </li>
              <li className='list'>
              <Link href="/signup">Sign-up</Link>
              </li>   
        </ul>
        </header>

        <section className='content'>
            <div className="h2">
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nisi facere eos ratione porro modi nostrum necessitatibus eligendi excepturi esse? Praesentium velit dicta vel accusamus dolor sit at error! Error.</h2>
            </div>
            <div className="description">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse consectetur. Nam eum blanditiis quidem autem, dolorem recusandae a magnam delectus similique. Suscipit tempore obcaecati illo, ab exercitationem illum ipsam.   
                </p>
                    
            </div>

            <div className="button">
            <Link className='duo' href="/login">Encontre seu duo!</Link>
            </div>

            
          
        </section>


           
        
    </main>
  )
}

export default Home