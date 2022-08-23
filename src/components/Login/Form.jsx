import React from 'react'
import './form.css'

const Form = (props) => {

    const { 
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;
  return (
    <div className='App'>
        <section className='form'>
            <h1>Autenticacion</h1>
            <div>
                <label>Correo</label>
                <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <p>{emailError}</p>


                <label>Contrasenia</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p>{passwordError}</p>

                <div>
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Iniciar sesion</button>
                            <p>No te has registrado 
                                <span onClick={() => setHasAccount(!hasAccount)}> Registrate</span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Registrarse</button>
                            <p>Ya tienes una cuenta 
                                <span onClick={() => setHasAccount(!hasAccount)}> Inicia sesion</span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>      
    </div>
  )
}

export default Form
