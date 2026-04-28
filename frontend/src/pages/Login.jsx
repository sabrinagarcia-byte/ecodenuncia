import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginERegistro() {
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)
  const navigate = useNavigate()

  // Função que envia os dados de login para o backend
  async function handleLogin(evento) {
    evento.preventDefault()
    setErro('')
    setMensagem('')
    setCarregando(true)

    try {
      const resposta = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginData.email,
          senha: loginData.password
        })
      })

      const dados = await resposta.json()

      if (resposta.ok) {
        // Login deu certo!
        setMensagem(dados.mensagem)
        // Salva os dados do usuário no localStorage
        localStorage.setItem('usuario', JSON.stringify(dados.usuario))
        // Redireciona para a home depois de 1 segundo
        setTimeout(() => navigate('/'), 1000)
      } else {
        // Algo deu errado (email/senha errados, etc)
        setErro(dados.erro)
      }
    } catch (error) {
      setErro('Não foi possível conectar ao servidor. Verifique se o backend está rodando.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="mx-auto max-w-7xl font-nunito px-6 py-10">
      <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] rounded-[32px] overflow-hidden bg-white shadow-[0_40px_80px_rgba(15,23,42,0.12)]">
        <div className="relative bg-[radial-gradient(circle_at_top_left,_rgba(22,163,74,0.20),transparent_40%),linear-gradient(180deg,#065f46,#047857)] p-10 text-white flex flex-col justify-center">
          <div className="absolute inset-0 bg-[url('assets/images/imgBgLoginECadastro.jpeg')] bg-cover bg-center" />
        </div>

        <div className="p-10">
          <div className="max-w-md mx-auto space-y-6">
            <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Entrar na sua conta</h2>

              {/* Mensagem de sucesso */}
              {mensagem && (
                <div className="mt-4 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                  {mensagem}
                </div>
              )}

              {/* Mensagem de erro */}
              {erro && (
                <div className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  {erro}
                </div>
              )}

              <form className="mt-8 space-y-5" onSubmit={handleLogin}>
                <label className="block text-sm text-slate-700">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">Email</span>
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(event) => setLoginData({ ...loginData, email: event.target.value })}
                    placeholder="seu@email.com"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:ring-offset-2"
                  />
                </label>

                <label className="block text-sm text-slate-700">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">Senha</span>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(event) => setLoginData({ ...loginData, password: event.target.value })}
                    placeholder="••••••••"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  />
                </label>

                <button
                  type="submit"
                  disabled={carregando}
                  className="inline-flex w-full justify-center rounded-xl bg-green-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {carregando ? 'Entrando...' : 'Entrar'}
                </button>

                <div className="text-center text-sm text-slate-500">
                  <a href="#" className="font-medium text-green-600 hover:text-green-700">Esqueci minha senha</a>
                </div>
              </form>
            </div>
            <div className="text-center text-sm text-slate-500">
              Não tem conta? <a href="/cadastro" className="text-green-600 hover:text-green-700">Cadastre-se aqui</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
