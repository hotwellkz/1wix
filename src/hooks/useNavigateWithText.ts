import { useRef } from 'react';

export function useNavigateWithText() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCreateClick = () => {
    if (textareaRef.current) {
      const text = textareaRef.current.value;
      
      // Copy text to clipboard
      navigator.clipboard.writeText(text).then(() => {
        // After successful copy, store and navigate
        localStorage.setItem('designText', text);
        window.location.href = 'https://boltdiy-production-9620.up.railway.app/';
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        // If copy fails, still proceed with navigation
        localStorage.setItem('designText', text);
        window.location.href = 'https://boltdiy-production-9620.up.railway.app/';
      });
      
    }
  };

  return {
    handleCreateClick,
    textareaRef
  };
}