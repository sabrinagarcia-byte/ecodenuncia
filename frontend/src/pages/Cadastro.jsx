import { useState } from 'react'

export default function LoginERegistro() {
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', confirm: '' })

  return (
    <div className="mx-auto max-w-7xl font-nunito px-6 py-10 space-y-20">
      <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] rounded-[32px] overflow-hidden bg-white shadow-[0_40px_80px_rgba(15,23,42,0.12)]">
        <div className="relative bg-[radial-gradient(circle_at_top_left,_rgba(22,163,74,0.20),transparent_40%),linear-gradient(180deg,#065f46,#047857)] p-10 text-white flex flex-col justify-center">
<div className="absolute inset-0 bg-[url('assets/images/imgBgLoginECadastro.jpeg')] bg-cover bg-center" />
        </div>

        <div className="p-10">
          <div className="max-w-md mx-auto space-y-6">
            <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Criar uma conta</h2>
              <form className="mt-8 space-y-5">
                <label className="block text-sm text-slate-700">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">Nome</span>
                  <input
                    type="text"
                    value={registerData.name}
                    onChange={(event) => setRegisterData({ ...registerData, name: event.target.value })}
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  />
                </label>

                <label className="block text-sm text-slate-700">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">Email</span>
                  <input
                    type="email"
                    value={registerData.email}
                    onChange={(event) => setRegisterData({ ...registerData, email: event.target.value })}
                    placeholder="seu@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  />
                </label>

                <label className="block text-sm text-slate-700">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">Senha</span>
                  <input
                    type="password"
                    value={registerData.password}
                    onChange={(event) => setRegisterData({ ...registerData, password: event.target.value })}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  />
                </label>

                <label className="block text-sm text-slate-700">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">Confirmar senha</span>
                  <input
                    type="password"
                    value={registerData.confirm}
                    onChange={(event) => setRegisterData({ ...registerData, confirm: event.target.value })}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  />
                </label>

                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-xl bg-green-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-green-700"
                >
                  Criar conta
                </button>

                <div className="text-center text-sm text-slate-500">
                  Já tem uma conta? <a href="/login" className="font-medium text-green-600 hover:text-green-700">Entrar</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
