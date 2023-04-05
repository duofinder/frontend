import Link from 'next/link'

function Home() {
  return (
    
    <main className='home-page'>
        <header className='header'>
          <img src="/assets/img/duofinder-cropped.png" width={300} height={100} alt="Team up!" />
        <ul className='list'>
              <li className='list-item'>
                <Link className='btn-about' href="/about">Sobre</Link>
              </li>
        </ul>
        </header>
        <section className='content'>
          <div className="container">
            <div className="box-title">
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nisi facere eos ratione porro modi nostrum necessitatibus eligendi excepturi esse? Praesentium velit dicta vel accusamus dolor sit at error! Error.</h2>
            </div>
            <div className="box-description">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse consectetur. Nam eum blanditiis quidem autem, dolorem recusandae a magnam delectus similique. Suscipit tempore obcaecati illo, ab exercitationem illum ipsam.   
                </p>      
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