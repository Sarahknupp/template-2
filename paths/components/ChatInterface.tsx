import { useState, useEffect } from 'react';
import { useChat } from 'ai/react';
import { Message, AIModel, ChatState } from '@/types/chat';
import ModelSelector from './ModelSelector';
import MessageList from './MessageList';
import InputField from './InputField';
import ErrorDisplay from './ErrorDisplay';

// Simple ID generator
const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

const ChatInterface = () => {
  const [selectedModel, setSelectedModel] = useState<AIModel>('gpt-4');
  const [error, setError] = useState<string | null>(null);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    setInput
  } = useChat({
    api: '/api/chat',
    body: {
      model: selectedModel,
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      // Note: We can't directly set messages from useChat
      // Instead, we'll need to implement this through the API
      console.log('Loaded saved messages');
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  const handleModelChange = (model: AIModel) => {
    setSelectedModel(model);
  };

  const handleClearChat = () => {
    localStorage.removeItem('chatMessages');
    window.location.reload();
  };

  const handleMessageSubmit = (message: string) => {
    setInput(message);
    handleSubmit(new Event('submit'));
  };

  const formattedMessages: Message[] = messages
    .filter((msg) => msg.role === 'user' || msg.role === 'assistant')
    .map((msg) => ({
      id: generateId(),
      content: msg.content,
      role: msg.role as 'user' | 'assistant',
      createdAt: new Date(),
    }));

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex justify-between items-center p-4 border-b">
        <ModelSelector
          selectedModel={selectedModel}
          onModelChange={handleModelChange}
        />
        <button
          onClick={handleClearChat}
          className="text-gray-600 hover:text-gray-800"
        >
          Clear Chat
        </button>
      </div>

      <MessageList messages={formattedMessages} isLoading={isLoading} />

      <div className="border-t">
        {isLoading && (
          <button
            onClick={stop}
            className="w-full py-2 text-sm text-red-600 hover:text-red-800"
          >
            Stop Generating
          </button>
        )}
        <InputField
          onSubmit={handleMessageSubmit}
          disabled={isLoading}
        />
      </div>

      <ErrorDisplay
        error={error}
        onDismiss={() => setError(null)}
      />
    </div>
  );
};

export default ChatInterface; 