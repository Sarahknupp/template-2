import { AIModel, ModelSelectorProps } from '@/types/chat';
import { useEffect } from 'react';

const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModel, onModelChange }) => {
  useEffect(() => {
    const savedModel = localStorage.getItem('selectedModel') as AIModel;
    if (savedModel) {
      onModelChange(savedModel);
    }
  }, []);

  const handleModelChange = (model: AIModel) => {
    localStorage.setItem('selectedModel', model);
    onModelChange(model);
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <label className="text-sm font-medium text-gray-700">Select AI Model:</label>
      <select
        value={selectedModel}
        onChange={(e) => handleModelChange(e.target.value as AIModel)}
        className="rounded-md border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="gpt-4">GPT-4</option>
        <option value="claude-3-sonnet">Claude 3 Sonnet</option>
      </select>
    </div>
  );
};

export default ModelSelector; 