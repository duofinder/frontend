import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Signup(){
    const [username, setUsername] = useState<string>()
    return (
        <main className="signup-page">
            <section className="signup-content">
                <div className="container">
                    <div className="box-title">
                        <h1 className="title">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam est totam. 
                        </h1>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, esse consectetur. Nam eum blanditiis quidem autem, dolorem recusandae a magnam delectus similique. Suscipit tempore obcaecati illo, ab exercitationem illum ipsam.   
                        </p>
                    </div>
                    <form className="signup-form">

                        <div className="box-input">
                            <label htmlFor="input-user">Usuário</label>
                            <input onChange={(event) => setUsername(event.target.value)} type="text" id="input-user" />

                        </div>

                        <div className="box-input">
                            <label htmlFor="input-email">Email</label>
                            <input type="email" id="input-email" />

                        </div>

                        <div className="box-input">
                            <label htmlFor="input-password">Senha</label>
                            <input type="password" id="input-password" />

                        </div>

                        <div className="box-input">
                            <label htmlFor="confirm-password">Confirme sua senha</label>
                            <input type="password" id="confirm-password" />

                        </div>

                        <div className="wrapper">
                            <button className="btn-submit" type="button">Registre-se</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="section-description">
                <div className="container">
                    <div className="box-description"> 
                        <Link href={"/login"}><Image src={"/assets/img/duofinder-cropped.png"} width={500} height={200} alt="Team up, level up, find a duo!"/></Link>   
                        <Link href={"/login"}><Image src={"/assets/img/ani-signup.svg"} width={500} height={500} alt="Team up, level up, find a duo!"/></Link> 
                        

                    </div>
                </div>
            </section>
        </main>
    )
}