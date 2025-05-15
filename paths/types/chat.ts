export type AIModel = 'gpt-4' | 'claude-3-sonnet';

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  createdAt: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  selectedModel: AIModel;
}

export interface ModelSelectorProps {
  selectedModel: AIModel;
  onModelChange: (model: AIModel) => void;
}

export interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export interface InputFieldProps {
  onSubmit: (message: string) => void;
  disabled: boolean;
}

export interface ErrorDisplayProps {
  error: string | null;
  onDismiss: () => void;
} 