'use client';
import { useState } from "react"

const LoginForm = () =>{

    const [Formulario, setFormulario] = useState({
        email: '',
        senha: ''
    })

    const aoSubmeter = (e) =>{
        e.preventDefault()
        console.log('submeteu', Formulario)
    }

    const aoAlterarValores =(e) => {
        const { name, value} = e.target
        setFormulario ({
            ...Formulario,
            [name]:value
        })
    }
    return(
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="email">e-mail</label>
                <input type="text" name="email" onChange={aoAlterarValores}/>
            </div>
            <div>
                <label htmlFor="senha">senha</label>
                <input type="password" name="senha" onChange={aoAlterarValores}/>
            </div>
            <button type="submit">enviar</button>
        </form>
    )
}
export default LoginForm