export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 space-y-12">
      <header className="w-full text-center">
        <h1 className="text-3xl font-bold mb-2">Comunidade Criador Digital</h1>
        <div className="w-24 h-1 bg-[#FFAE00] mx-auto"></div>
      </header>

      <section className="max-w-4xl w-full text-center space-y-8">
        <h2 className="text-xl font-semibold border p-4 font-mono rounded-md inline-block">
          Comece escolhendo um caminho de template da pasta /paths/.
        </h2>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Crie tudo o que você imaginar 🪄</h2>
          <p className="text-lg font-light text-gray-300 max-w-2xl mx-auto">
            Esta página inteira será substituída quando você executar seu caminho de template.
          </p>
        </div>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Aplicativo de Chat com IA', 'Aplicativo de Geração de Imagens com IA', 'Aplicativo de Mídia Social', 'Aplicativo de Notas de Voz'].map((title, index) => (
          <div key={index} className="border rounded-lg p-6 hover:bg-white hover:text-black transition-colors">
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            <p className="text-sm">
              {index === 0 && "Um aplicativo de conversação inteligente alimentado por modelos de IA, com respostas em tempo real e integração perfeita com Next.js e vários provedores de IA."}
              {index === 1 && "Crie imagens a partir de prompts de texto usando IA, alimentado pela API Replicate e Next.js."}
              {index === 2 && "Uma plataforma social rica em recursos com perfis de usuários, postagens e interações usando Firebase e Next.js."}
              {index === 3 && "Um aplicativo de anotações baseado em voz com transcrição em tempo real usando a API Deepgram, integração com Firebase para armazenamento e uma interface limpa e simples construída com Next.js."}
            </p>
          </div>
        ))}
      </section>

      <footer className="w-full text-center mt-8">
        <a 
          href="https://comunidade.criador.digital" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block px-8 py-4 bg-[#FFAE00] text-black font-bold rounded-full hover:bg-opacity-80 transition-all text-base"
        >
          ENTRE NA COMUNIDADE
        </a>
      </footer>
    </main>
  );
}