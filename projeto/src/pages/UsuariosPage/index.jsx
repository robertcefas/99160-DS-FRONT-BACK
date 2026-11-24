import { useEffect, useState } from 'react'
import { buscarUsuarios } from '../../api'
import './style.css'

export default function UsuarioPage() {
    const [usuarios, setUsuarios] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const dadosUsuarios = await buscarUsuarios()
                setUsuarios(dadosUsuarios)
            } catch (erroApi) {
                console.error('Erro ao buscar usuários:', erroApi)
                setErro('Não foi possível carregar os usuários. Verifique se a API está em execução.')
            } finally {
                setCarregando(false)
            }
        }

        fetchUsuarios()
    }, [])

    return (
        <div>
            <h1>Lista de Usuários</h1>
            {carregando && <p>Carregando usuários...</p>}
            {erro && <p role="alert">{erro}</p>}
            {!carregando && !erro && usuarios.length === 0 && (
                <p>Nenhum usuário cadastrado.</p>
            )}
            {!carregando && !erro && usuarios.length > 0 && (
                <ul>
                    {usuarios.map((usuario) => (
                        <li key={usuario.id}>
                            <strong>{usuario.nome}</strong> - {usuario.email} - {usuario.telefone}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}