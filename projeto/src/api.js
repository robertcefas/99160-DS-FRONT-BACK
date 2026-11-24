import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '',
})

export async function buscarUsuarios() {
    const { data } = await api.get('/data/db')
    return data.data.usuarios
}

export default api
