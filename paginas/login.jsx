import { useState } from "react"

export default function Login ({navegar}) {
        const [email, setEmail] = useState('')
        const [nome, setNome] = useState('')
        const [senha, setSenha] = useState('')
    
    const entrar = async () => {
        const resposta = await fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nome, email, senha})


        });
        const data = await resposta.json()
        console.log(data);


    }
    return (
        <div>
            <h1>Login</h1>

            <input type="text" id="email" 
            placeholder="DIGITE EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            />

            <h3>{email}</h3>

            <input type="text" id="nome" 
            placeholder="DIGITE NOME"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            
            />

            <h3>{nome}</h3>

            <input type="text" id="senha" 
            placeholder="DIGITE SENHA"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            
            />

            <h3>{senha}</h3>

            <br />
            <br />

            <button onClick={() => entrar}>ENTRAR</button>
            <button onClick={() => navegar('cadastro')}>nao tenho cadastro</button>
        </div>
        
    )
}