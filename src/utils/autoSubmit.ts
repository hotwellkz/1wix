// Этот скрипт будет внедрен в целевую страницу
export const autoSubmitScript = `
  (function() {
    // Получаем сохраненный текст
    const designText = localStorage.getItem('designText');
    
    if (designText) {
      const checkElements = () => {
        // Находим textarea и фиолетовую кнопку
        const textarea = document.querySelector('textarea');
        const purpleButton = document.querySelector('button.bg-purple-500, button[style*="background-color: rgb(168, 85, 247)]"');
        
        if (textarea && purpleButton) {
          // Устанавливаем значение текста
          textarea.value = designText;
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
          
          // Очищаем сохраненный текст
          localStorage.removeItem('designText');
          
          // Небольшая задержка для обновления UI
          setTimeout(() => {
            purpleButton.click();
          }, 100);
        } else {
          // Если элементы не найдены, повторяем через небольшой интервал
          setTimeout(checkElements, 100);
        }
      }
      
      // Начинаем проверку элементов
      checkElements();
    }
  })();
`;
