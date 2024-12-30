import { useRef } from 'react';

export function useNavigateWithText() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCreateClick = () => {
    if (textareaRef.current) {
      const text = textareaRef.current.value;
      
      // Копируем текст в буфер обмена
      navigator.clipboard.writeText(text).then(() => {
        // После успешного копирования сохраняем в localStorage и переходим
        localStorage.setItem('designText', text);
        window.location.href = 'https://boltdiy-production-95ec.up.railway.app/';
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        // Если копирование не удалось, все равно сохраняем и переходим
        localStorage.setItem('designText', text);
        window.location.href = 'https://boltdiy-production-95ec.up.railway.app/';
      });
    }
  };

  return {
    handleCreateClick,
    textareaRef
  };
}
