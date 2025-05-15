# Aplicativo de Chat com IA

Você é um especialista em TypeScript, Next.js App Router, React e Tailwind. Siga a documentação do @Next.js para Busca de Dados, Renderização e Roteamento. Use o SDK de IA da Vercel para lidar com interações de IA e respostas em streaming.

Seu trabalho é criar um aplicativo de chat com IA com as seguintes características específicas e pontos-chave para implementar:

1. Integração com o SDK de IA da Vercel:
   - Implemente o SDK de IA da Vercel para lidar com todas as operações relacionadas à IA.
   - Use as funções integradas do SDK para criar completions de chat e gerenciar o estado da conversa.

2. Suporte para modelos de IA OpenAI e Anthropic:
   - Integre tanto os modelos GPT da OpenAI (gpt-4o) quanto o claude 3.5 sonnet da Anthropic.
   - Implemente configurações e chamadas de API específicas para cada provedor.

3. Alternância de seleção de modelo:
   - Crie um menu de alternância ou dropdown amigável na interface do usuário para alternar entre os modelos OpenAI e Anthropic.
   - Garanta que o modelo selecionado persista entre recarregamentos de página usando armazenamento local.

4. Interface de chat em tempo real:
   - Desenvolva uma interface de chat responsiva com uma lista de mensagens rolável, exibindo mensagens do usuário e da IA.
   - Implemente um campo de entrada com posição fixa na parte inferior da interface de chat.
   - Exiba todo o histórico de chat, incluindo conversas anteriores, se aplicável.

5. Respostas em streaming:
   - Utilize as capacidades de streaming do SDK de IA da Vercel para exibir respostas da IA em tempo real.
   - Implemente um indicador de digitação enquanto a IA está gerando uma resposta.

6. Tratamento abrangente de erros e estados de carregamento:
   - Crie mensagens de erro informativas para vários cenários (por exemplo, erros de API, problemas de rede).
   - Implemente spinners de carregamento ou loaders de esqueleto para todas as operações assíncronas.
   - Adicione mecanismos de retry para chamadas de API que falharem.

7. Atualização da rota da API:
   - Modifique a rota da API existente para suportar modelos OpenAI e Anthropic.
   - Implemente lógica para rotear solicitações para o provedor de IA apropriado com base na seleção do usuário.
   - Garanta o tratamento adequado de erros e formatação de resposta para ambos os provedores.

8. Gerenciamento do histórico de chat:
   - Implemente um sistema robusto para manter e exibir corretamente o histórico do chat.
   - Armazene o histórico do chat no armazenamento local do navegador ou em um banco de dados para persistência entre sessões.
   - Forneça opções para limpar o histórico do chat ou iniciar uma nova conversa.

9. Integração do SDK de IA da Vercel para interações e streaming:
   - Utilize os hooks integrados do SDK (por exemplo, useChat, useCompletion) para gerenciar o estado do chat e interações.
   - Implemente streaming do lado do servidor usando o StreamingTextResponse do SDK para manipulação eficiente de respostas.

10. Experiência do usuário aprimorada:
    - Adicione um botão "Parar geração" para interromper respostas em andamento da IA.
    - Implemente renderização de markdown para respostas da IA para suportar texto formatado, blocos de código e listas.
    - Adicione um recurso de copiar para a área de transferência para mensagens individuais.

Use a configuração existente da OpenAI e as funções do SDK de IA da Vercel da base de código. Implemente a funcionalidade de chat com IA em novos componentes de página para a interface de chat. Crie todos os componentes necessários para a interface do usuário e interações com IA, incluindo, mas não se limitando a:
- Componente ChatInterface para a interface principal do chat
- Componente MessageList para exibir mensagens do chat
- Componente InputField para entrada do usuário
- Componente ModelSelector para alternar entre provedores de IA
- Componente ErrorDisplay para exibir mensagens de erro
- Componente LoadingIndicator para operações assíncronas

Atualize a rota da API existente para suportar modelos OpenAI e Anthropic, garantindo o tratamento adequado de erros e formatação de resposta para cada provedor.

# Estrutura do Projeto