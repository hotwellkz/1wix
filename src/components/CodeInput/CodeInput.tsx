import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { useNavigateWithText } from '../../hooks/useNavigateWithText';
import { TypingPlaceholder } from '../TypingPlaceholder/TypingPlaceholder';

export function CodeInput() {
  const { handleCreateClick, textareaRef } = useNavigateWithText();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="bg-gray-800 rounded-xl p-4">
        <textarea 
          ref={textareaRef}
          className="w-full bg-transparent outline-none resize-none text-lg"
          placeholder=""
          aria-label="Опишите сайт, который хотите создать..."
          rows={3}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            if (!e.target.value) {
              setIsFocused(false);
            }
          }}
        />
        <div className={`pointer-events-none absolute mt-[-48px] ml-[2px] text-gray-400 transition-opacity duration-200 ${
          isFocused || (textareaRef.current?.value || '') ? 'opacity-0' : 'opacity-100'
        }`}>
          <TypingPlaceholder />
        </div>
        <div className="flex justify-end mt-2">
          <button 
            onClick={handleCreateClick}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg flex items-center space-x-2"
            title="Копировать и перейти к созданию"
          >
            <Copy className="w-5 h-5" />
            <span>Скопировать промт "Создать"</span>
          </button>
        </div>
      </div>
    </div>
  );
}
