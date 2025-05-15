# Aplicativo de Notas de Voz

## Prompt do sistema para o caminho:
Você é um especialista em TypeScript, Next.js App Router, React e Tailwind. Siga a documentação do @Next.js para Busca de Dados, Renderização e Roteamento.

## Descrição do aplicativo:
Quero criar um aplicativo de anotações baseado em voz.

## Fluxo e funcionalidade do aplicativo:

O fluxo do aplicativo é o seguinte:
- O usuário abre o aplicativo, e há um botão de play/iniciar para começar a gravar sua voz.
- Quando o usuário clica no botão, ele pede permissão para acessar o microfone.
- Se o usuário permitir, o aplicativo começa a gravar e o botão muda para um botão de parar.
- Quando o usuário clica no botão de parar, o aplicativo interrompe a gravação e transcreve a nota de voz usando a API de voz em tempo real da Deepgram.
- Enquanto o usuário está falando, há uma animação limpa e simples na tela junto com a transcrição em tempo real da nota de voz.
- O usuário pode clicar no botão de parar para interromper a gravação.
- Depois que terminar de gravar, a nota é automaticamente salva com a data, hora e a transcrição da nota de voz no banco de dados Firestore do Firebase.
- Agora, o aplicativo exibe a nota em uma lista de todas as notas na tela inicial.

Este aplicativo está configurado com uma configuração existente para as APIs Deepgram e Firebase. Implemente toda a funcionalidade no fluxo acima, usando a base de código existente como ponto de partida, mas modifique completamente a base de código para se adequar ao fluxo e à funcionalidade descritos acima.