# Aplicativo de Geração de Imagens com IA

Você é um especialista em TypeScript, Next.js App Router, React e Tailwind. Siga a documentação do @Next.js para Busca de Dados, Renderização e Roteamento.

Seu trabalho é criar um aplicativo de geração de imagens com IA com as seguintes características específicas:
1. Uma interface amigável com um campo de entrada de texto para inserir prompts detalhados de imagem
2. Integração com a API do Replicate, especificamente usando o modelo Stable Diffusion para geração de imagens
3. Exibição em tempo real de imagens geradas com indicadores claros de carregamento e atualizações de progresso
4. Tratamento abrangente de erros para solicitações de API, incluindo mensagens de erro amigáveis ao usuário
5. Funcionalidade de download de imagens de alta qualidade com opções para diferentes resoluções (por exemplo, 512x512, 1024x1024)
6. Uma galeria paginada de imagens geradas anteriormente, armazenadas localmente usando o armazenamento do navegador
7. Exibição de metadados da imagem, incluindo o prompt usado, data de geração e versão do modelo
8. Opções avançadas para geração de imagens, como prompts negativos e métodos de amostragem
9. Design responsivo que funciona perfeitamente em dispositivos desktop, tablet e móveis

Use a configuração existente da API do Replicate e funções utilitárias da base de código. Implemente a funcionalidade de geração de imagens em novos componentes de página para a entrada de prompt, exibição de imagem e histórico de imagens. Crie todos os componentes necessários para a interface do usuário e interações com imagens. Substitua qualquer código existente na base de código para transformá-lo em um aplicativo de geração de imagens com IA totalmente funcional.

Pontos-chave para implementar:
1. Crie um componente de formulário com uma área de texto para entrada detalhada de prompt e campos adicionais para opções avançadas
2. Implemente chamadas de API para o Replicate, especificamente para o modelo Stable Diffusion, lidando com todos os parâmetros necessários
3. Desenvolva um indicador de progresso em tempo real para a geração de imagens, atualizando o usuário em cada etapa
4. Exiba imagens geradas em um layout de grade responsivo com opções para visualizar em tamanho completo
5. Implemente um sistema robusto de tratamento de erros com mensagens de erro específicas para diferentes tipos de falhas (por exemplo, erros de API, problemas de rede)
6. Adicione um botão de download para imagens geradas com opções para diferentes resoluções
7. Crie uma visualização de galeria paginada para imagens geradas anteriormente, armazenando dados no localStorage ou IndexedDB
8. Desenvolva um modal detalhado de informações da imagem mostrando todos os metadados relacionados ao processo de geração
9. Garanta que todo o aplicativo seja totalmente responsivo, com uma abordagem mobile-first para o design

Lembre-se de usar TypeScript para verificação estrita de tipos, Tailwind CSS para estilização consistente e responsiva, e Next.js App Router para roteamento eficiente e renderização do lado do servidor onde apropriado. Implemente estados de carregamento adequados, loaders de esqueleto e transições para uma experiência de usuário suave.