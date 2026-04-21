import BannerFaleConosco from '../assets/images/bannerFaleConosco.png'
import EmailSimbol from '../assets/images/o-email (2) 1.png'
import TelefoneSimbol from '../assets/images/telefone (2) 1.png'
import CheckIcon from '../assets/images/CheckIcon.png'


export default function FaleConosco() {
    return (
        <section className="w-full min-h-screen relative flex items-center justify-center">

            <img
                src={BannerFaleConosco}
                alt="Fundo"
                className="absolute inset-0 w-full h-full object-cover"
            />


            <div className="absolute inset-0 bg-black/10"></div>


            <div className="relative z-10 w-full max-w-4xl px-20 py-10 text-white text-center">


                <h1 className="text-4xl font-bold mb-2">Fale Conosco</h1>
                <p className="mb-8 text-gray-200">
                    Tem alguma sugestão ou problema? Entre em contato com a gente.
                </p>


                <div className="bg-white text-black rounded-2xl p-8 shadow-lg text-left">

                    <h1 className="text-3xl font-bold mb-2 text-center">
                        Contato
                    </h1>


                    <div className="grid md:grid-cols-2 gap-6">


                        <div className="space-y-4">

                            <div>
                                <label ><h1 className='font-bold'>Nome</h1></label>
                                <input
                                    type="text"
                                    placeholder="Digite seu nome"
                                    className="w-full border rounded-lg p-2 mt-1"
                                />
                            </div>


                            <div>
                                <label><h1 className='font-bold'>Email</h1></label>
                                <input
                                    type="text"
                                    placeholder="Digite seu email"
                                    className="w-full border rounded-lg p-2 mt-1"
                                />
                            </div>

                            <div> <h1 className='font-bold'>Mensagem</h1>
                                <textarea
                                    placeholder="Escreva sua mensagem"
                                    className="w-full border rounded-lg p-2 h-24"
                                />
                            </div>


                            {/* BOTÃO */}
                            <div className="flex justify-center mt-8">
                                <button className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold">
                                    Enviar mensagem
                                </button>
                            </div>
                        </div>


                        {/* DIREITA */}
                        <div className="space-y-5">


                            <div className="mt-8 space-y-3 text-sm">

                                <div className="flex items-center gap-2"> 
                                    <img src={EmailSimbol} alt="email" className="w-5 h-5" />
              
                                   <a href="https://www.google.com/gmail/about/signup_complete.html" className="flex items-center text-lg gap-2 hover:text-green-400 transition-colors">contato@ecodenuncia.com</a>

                                </div>

                                <div className="flex items-center gap-2">
                                    <img src={TelefoneSimbol} alt="telefone" className="w-5 h-5" />

                                    <a href="https://web.whatsapp.com/" className="flex items-center text-lg gap-2 hover:text-green-400 transition-colors">(12) 99999-9999</a>

                                </div>

                            </div>

                            <div className="space-y-3">

                                <div className="flex items-center gap-3  text-green-800">

                                    <img src={CheckIcon} alt="check" className="w-5 h-5" />

                                    <span>Análise cuidadosa das informações</span>
                                </div>

                                <div className="flex items-center gap-3  text-green-800">

                                    <img src={CheckIcon} alt="check" className="w-5 h-5" />

                                    <span>Encaminhamento aos órgãos responsáveis</span>
                                </div>

                                <div className="flex items-center gap-3 text-green-800">
                                    <img src={CheckIcon} alt="check" className="w-5 h-5" />
                                    <span>Acompanhamento quando necessário</span>

                                </div>

                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </section>
    )
}
