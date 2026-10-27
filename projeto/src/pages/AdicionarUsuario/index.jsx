import { useState } from 'react';
import './style.css';

function AdicionarUsuario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    const funcaoAdicionarUsuario = (event) => {
        event.preventDefault();

        const novoUsuario = { nome, email };
        setUsuarios((usuariosAnteriores) => [...usuariosAnteriores, novoUsuario]);
        setNome('');
        setEmail('');
    };

    return (
        <div>
            <h1>Adicionar Usuário</h1>
            <form onSubmit={funcaoAdicionarUsuario
        
            }>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button type="submit">Adicionar</button>
            </form>
            <hr />

            <h2>Listar Cadastrados</h2>
            <ul>
                {usuarios.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdicionarUsuario;