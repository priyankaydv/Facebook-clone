import React from 'react'

const SignIn = (props) => {
    const {email,setEmail,password,setPassword, handleLogin, handlerSignUp,hasAccount, setHasAccount,emailError,passwordError}=props;
    return (
        <section className="login2">
        <div className="login2Container">
        <label>username</label>
        <input type="text" autoFocus required value={email} onChange={e=>setEmail(e.target.value)} />
        <p className="errorMsg">{emailError}</p>
        </div>
            
        </section>
    )
}

export default SignIn
