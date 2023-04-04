import React, { useEffect, useState } from "react"
import Link from "next/link"

interface IFormFields {
    email: string;
    password: string;
}

export default function Login(){

    const [error, setError] = useState<boolean>(false)
    const [formFields, setFormFields] = useState<IFormFields>({
        email: '',
        password: ''
    })

    const onLoginSubmit = () => {
        
        if(!formFields.password || !formFields.email){
            setError(true)
            return;
        }

        const payload = {
            email: formFields.email,
            password: formFields.password
        }


    }

    return (
        <main className="login-main-page">
            <section className="login-content">
                <div className="container">
                    <div className="box-title">
                        <h1 className="title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nihil nesciunt natus molestias consequuntur cupiditate beatae.
                        </h1>
                        <p className="description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa fugiat, vitae repudiandae laborum, non beatae laudantium quaerat nemo blanditiis magni at hic officia aspernatur harum impedit, commodi totam maiores facilis.
                        </p>
                    </div>

                    <form className="login-form">
                        <div className="box-input">
                            <label htmlFor="input-email">Email:</label>
                            <input className={`${error ? 'input-error' : ''}`} type="email" id='input-email' onChange={(event) => setFormFields({...formFields
                            , email: event.target.value})} />
                        </div>

                        <div className="box-input">
                            <label htmlFor="input-email">Senha:</label>
                            <input type="password" id='input-senha' onChange={(event) => setFormFields({...formFields
                            , password: event.target.value})} className={`${error ? 'input-error' : ''}`}  />
                        </div>

                        <div className="wrapper">
                            <button className="btn-submit" type="button" onClick={onLoginSubmit}>Login</button>

                            {
                                error && (
                                    <span className="warning-message">Verifique suas informações</span>
                                )
                            }
                        </div>

                    </form>
                </div>
            </section>

            <section className="section-description">
                <div className="btn-register">
                    <Link href='/signup'>Registre-se</Link>
                </div>

                <div className="container">
                    <div className="box-description">
                        <h2 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    </div>
                </div>
            </section>
        </main>
    )
}
